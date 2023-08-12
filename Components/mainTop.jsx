import React from "react";
import Image from "next/image";
import bg from "./assets/bg-0.gif";
import consoles from "./assets/platforms.gif";
import style from "../styles/Home.module.css";
import platforms from "./assets/releasePlatform.png";
import Link from "next/link";
export default function MainTop() {
  return (
    <div className="w-100  ">
      <div className="container relative pv5">
        <div className="  vh-100-l vh-75 ">
          <Image
            src={bg}
            alt="5 force fighters banner"
            layout="fill"
            objectFit="cover"
            className=""
            quality={100}
            style={{ layout: "fill" }}
          />
        </div>
      </div>
      <div className="main-container w-100  z-1 absolute  white">
        <div className="btn w-100 " style={{letterSpacing:"-2px"}}>
          <h1 className="w-100 center tc f-headline-ns f1 ma0 shadow-text mt0-ns mt4 ">
            5 F<span className="f-subheadline-ns f2">ORCE</span> F
            <span className="f-subheadline-ns f2">IGHTERS</span>
          </h1>
          <div className="w-100 flex mt4 ">
            <div className="w-80  mw6 tc  center">
              <Link href="https://store.steampowered.com/app/1599170/5_Force_Fighters/">
                <button
                  className={`white  b--white  center tc f1-ns f3 br2 bg_5ff pa4-ns pa3 w7 w-100 mt3-ns pointer grow ba bw1`}
                >
                  Add to your wishlist
                </button>
              </Link>
            </div>
          </div>
          <div className="b--red w-100  ph3 mh3 red-border ">
            <div
              className="ma0-ns mt5-ns mt4-m shadow-text red-border   "
              style={{ marginLeft: "-10px" }}
            >
              <Image
                src={platforms}
                alt=""
                width={400}
                height={200}
                className="release red-border-img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
