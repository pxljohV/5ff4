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
    <div className="w-100">
      <div className="container relative">
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
          className="relative pv5-l pv5 w-100 center ph4 flex justify-between flex-wrap items-center "
          style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="w-80 mw5">
            <div className="w-100 relative">
              <Image
                src={five}
                alt="5 force fighters logo"
                layout="responsive"
                className=""
              />
            </div>
          </div>

          <div className="w-100 flex justify-between items-center flex-wrap-reverse" style={{ marginTop: "-10%" }}>
            <div className={`w-40-l w-100 white flex`}>
              <h3
                className="w-100 lh-2"
              >
                Unravel the story of 5 teens blessed with elemental powers, but
                cursed with scarred pasts that have led them to a common, but
                destructive, goal.
              </h3>
            </div>
            <div className="container w-50-l w-100 " style={{ marginTop: "" }}>
              <p className="white underline">Press Kit</p>
              <div
                className={"relative  bg-black flex items-center ba"}
              >
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
