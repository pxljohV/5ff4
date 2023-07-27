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
    <div className="white">
      <div className=" w-70-l w-90-m w-100 center ">
        <div className=" w-100 mt5 tc">
          <p className="f3 orange ma0 pt3 pt4">NEWS</p>
          <h2 className="pa0 f1-l f1-m f2 ma0 bb w-90 center pb4">& UPDATES</h2>
        </div>
        <div className="container w-100 flex flex-wrap ph5-l pv5  b--red justify-between " >
          {result.map((doc, index) => {
            return (
              <div key={index} className={`n-container w-100 mw6 tc  ${index % 2 === 0 ? "mr-auto" : ""}`}>
                <Link href={`/post/${doc.date}`}>
                  <h2>{doc.title}</h2>
                  <p>{doc.date}</p>
                  {doc.img && (
                    <img
                      src={doc.img}
                      alt=""
                      style={{ width: "auto", maxHeight: "900px" }}
                    />
                  )}
                  <div className=" center purple5-bg  glow ma0">
                    <p className="z-0 ff5 f4-m f4-l pa3 b  w-100 mw5  center ma0">{"LEARN MORE >> "}</p>

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