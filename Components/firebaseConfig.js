// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const { initializeApp } = require("firebase/app");
const { getFirestore,  doc, getDoc, updateDoc, query, collection, getDocs,  } = require("firebase/firestore");
const firebaseConfig = {
    apiKey: process.env.API_ID ,
    authDomain: process.env.AUTO_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
  };

  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//on this doc
async function Add(newEmailNum, _email) {
  try {
    let obj = {};
    obj[newEmailNum] = _email;
    //console.log(obj);
    const ref = doc(db, "Subscribers", "Email_List");
    await updateDoc(ref, obj);
    GetData();
  } catch (e) {
    console.log(e);
  }
}

async function Check(_email) {
  try {
    const snap = await getDoc(doc(db, "Subscribers", "Email_List"));
    const keys = Object.keys(await snap.data());
    const newEmailNum = JSON.stringify(keys.length);
    const email = _email;
    Add(newEmailNum, email);
  } catch (e) {
    console.log(e);
  }
}

async function GetData() {
  try {
    const snap = await getDoc(doc(db, "Subscribers", "Email_List"))
    console.log(await snap.data())
  }
  catch { e }

}

export { db, firebaseConfig, Check }