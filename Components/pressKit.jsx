import React from "react";
import Image from "next/image";
import bg from "./assets/bg-1.gif";
import five from "./assets/5ff.gif";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import style from "../styles/Home.module.css";

export default function PressKit() {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl("https://www.youtube.com/watch?v=vrimRovXtcQ");
  });
  return (
    <div className="w-100 white">
      <div className="container relative pv4-ns   ">
        <div className="">
          <Image
            src={bg}
            alt="5 force fighters background"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ imageRendering: "high-quality" }}
          />
        </div>
        <div
          className="relative pv5-l pv4-m pv3 w-100 center ph4-ns flex justify-between flex-wrap items-center "
          style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="w-100 ">
            <h2 className="w-100 ph4 f1">Content</h2>
          </div>

          <div
            className="w-100 flex justify-between items-center flex-wrap-reverse"
          
          >
            <div className={`w-40-l w-100 white flex`}>
              <h3 className="w-100 f4-ns f4-m f5 ph4">
                5 Force Fighters, is a fighting game like no other! Where
                burning meter raises your focus and the true force of each
                distinct fighter. The simple inputs are balanced effortlessly
                with methodical combat systems that partake in the interactive
                story; the 5 protagonists will embrace the powers of the
                5-Force, reach Corvegas, and try their damndest to defeat Ken D.
                Sangre.
              </h3>
            </div>
            <div className="container w-50-l w-100 ph4 ph0-ns" style={{ marginTop: "" }}>
              <p className="white underline">Press Kit</p>
              <div className={"relative  bg-black flex items-center "}>
                {url && (
                  <ReactPlayer
                    url={url}
                    controls={true}
                    width="100%"
                    heigth="auto"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
