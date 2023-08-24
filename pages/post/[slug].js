import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head.js";
import Footer from "../../Components/footer";
import tachyons from "tachyons/css/tachyons.css";

import { useEffect, useState } from "react";
import { firebaseConfig } from "../../Components/firebaseConfig.js";
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
const border = {
  borderBottom: "solid 1px #ffffff67",
  boxShadow: "inset 0px -8px 8px -4px #e7094c",
  backgroundColor: "rgba(70, 29, 48, 0)",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default function NewsFetch({ Slug }) {
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
  const router = useRouter();
  getDocument();

  useEffect(() => {}, [result]);

  return (
    <div>
      <Head className="ma0 pa0 mb0">
        <title>5 FORCE FIGHTERS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="ma0 pa0 fixed top-0 z-2 ">
        <nav
          className={`nav_gradient fixed w-100  ph3 ma0 h2 top-0 flex items-center justify-between pv4 ${border} `}
        >
          <div className="w-60 ">
            <div className="flex ">
              <Link href="/">
                <h1 className="white f3-ns f5 ">5 FORCE FIGHTERS</h1>
              </Link>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <Link href="/">
              <p className="white f4-ns f5 pa2 br2 b">Home</p>
            </Link>
            <Link href="https://store.steampowered.com/app/1599170/5_Force_Fighters/">
              <p className="white f4-ns f5 pa2 br2 b">WishList</p>
            </Link>
          </div>
        </nav>
      </header>

      <div className=" w-70-l w-80-m w-90 center pv4">
        <div className="tl f4 w-10  mt5" style={{ color: color }}>
          <Link href="../news">{"<<back"}</Link>
        </div>
        <div className=" w-100tc ">
          <div className=" w-100  tc mt4 white">
            <p className="f3 ma0 b" style={{ color: color }}>
              NEWS
            </p>
            <h2 className="pa0 f1-l f1-m f2 ma0 bb w-90 center pb4">
              & UPDATES
            </h2>
          </div>
        </div>
        {result.map((doc, index) => {
          if (doc.date == router.query.slug) {
            return (
              <div key={index} className="w-100  tc center  b--pink">
                <div className=" w-100 tc flex items-center ">
                  <h1 className="pa0 f2-l f3-m f3 ma0 w-100 center mb3 pv2 ">
                    {doc.title}
                  </h1>
                </div>

                {doc.img && (
                  <img
                    src={doc.img}
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                  />
                )}

                <p>{doc.date}</p>

                {doc.content && (
                  <div>
                    <p className="tl">{doc.content[0]}</p>
                    <p className="tl">{doc.content[1]}</p>
                    <p className="tl">{doc.content[2]}</p>
                    <p className="tl">{doc.content[3]}</p>
                    <p className="tl">{doc.content[4]}</p>
                    <p className="tl">{doc.content[5]}</p>
                    <p className="tl">{doc.content[6]}</p>
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
      <div
        className="tl f4 mb3 w-70 center bb b--white-10 pv3"
        style={{ color: color }}
      >
        <Link href="../news" className="">
          {"<<back"}
        </Link>
      </div>
      <Footer />
    </div>
  );
}
