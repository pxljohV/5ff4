import React from "react";
import Image from "next/image";
import bg from "./assets/bg-0.gif";
import consoles from "./assets/platforms.gif";
import style from '../styles/Home.module.css'
import platforms from "./assets/releasePlatform.png"
export default function MainTop() {
  return (
    <div className="w-100  ">
      <div className="container relative">
        <div className="  vh-100-l vh-75">
          <Image
            src={bg}
            alt="5 force fighters banner"
            layout="fill"
            objectFit="cover"
            className=""
            quality={100}

          />
        </div>
      </div>
      <div className="w-100  z-1 absolute  white " style={{ marginTop: "-350px" }}>
        <div className="btn w-100 pointer ">
          <h1 className="w-100 center tc f-headline-ns f1 ma0 shadow-text mt0-ns mt4">5 F<span className="f-subheadline-ns f2">ORCE</span> F<span className="f-subheadline-ns f2">IGHTERS</span></h1>
          <div className="w-100 flex mt4">
            <div className="w-100-ns w-80  mw6 tc  center">
              <h2 className={`white  b--white ba center tc f1-ns f3 br2 bg_5ff pa4-ns pa3 mt3 `}>
                WISHLIST NOW!
              </h2>
            </div>
          </div>
          <div className="b--red w-100  ph4-ns mh3 red-border ">
          <div className="ma0-ns mt4 ml0  shadow-text red-border  " style={{ marginLeft: "-10px" }}>
              <Image src={platforms} alt="" width={300} height={100} className="red-border-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
