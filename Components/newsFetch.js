import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { firebaseConfig } from "./firebaseConfig.js";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
const color = "#e7094c";
const resultRef = React.createRef();
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

/*to do - send email to an email list */
function submit() {
  /*  get doc
      push to doc

    // Initialize Firebase
    const firebaseConfig = {
      // Your Firebase configuration object goes here
    };
    firebase.initializeApp(firebaseConfig);

    // Get a document reference
    const db = firebase.firestore();
    const docRef = db.collection('users').doc('abc123');

    // Update the document's "emails" array field
    docRef.update({
      emails: firebase.firestore.FieldValue.arrayUnion('email@email.com')
    }).then(() => {
      console.log('Email added to array successfully');
    }).catch((error) => {
      console.error('Error adding email to array:', error);
    });
  */
}


export default function NewsFetch() {
  async function getDocument() {
    // doc() getDoc()

    /// GET DOCUMENTS *
    const q = query(collection(db, "5FF_NEWS"));
    const Docs = await getDocs(q);
    //Result = [];
    Docs.forEach((doc) => {
      // console.log(doc.data())
      Result.push(doc.data());
    });

    try {
      Result.forEach((r) => {
        r.content = r.content.split("*");
      });
    } catch (e) {
      console.log(e);
    }

    setResult(await Result);
  }
  //let Result = [];
  const initValue = [{}];
  const [Result, setResulter] = useState([]);
  const [result, setResult] = useState(initValue);
  const [content, setContent] = useState([]);

  getDocument();

  useEffect(() => { }, [result]);

  return (
    <div className="container-news white bg-black-90">
      <div className=" w-70-l w-90-m w-100 center mt3 pv4">
        <div className=" w-100  tc bb b--red pb3 mw7 center ">
          <p className="f2 b ma0 pt3 pt4  w-90 center" style={{ color: color }}>
            NEWS{" "}
            <span className="pa0 f2 ma0 w-90 center pb4 white">& UPDATES</span>
          </p>
        </div>
      
        <div className="container w-100 flex flex-wrap ph5-l pv3 bg-white-10   b--red justify-between items-end ph3">
          {result.map((doc, index) => {
            return (
              <div
                key={index}
                className={`newsGet  w-40-ns  mw7 tc mt4 bg-black pa2 ${
                  index % 2 === 0 ? "mr-auto" : ""
                }`}
              >
                <Link href={`/post/${doc.date}`}>
                  {doc.img && (
                    <img
                      src={doc.img}
                      alt=""
                      style={{ width: "490px", heigth: "auto" }}
                    />
                  )}
                  <h3 className="ma0 f4">{doc.title}</h3>
                  <p className="ma0 f6">{doc.date}</p>
                  <div className=" center bg_5ff  glow ma0 mt2">
                    <p className="z-0 ff5 f6-l f6-m pv3 b  w-100 center ma0 ">
                      {"LEARN MORE >>"} 
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}