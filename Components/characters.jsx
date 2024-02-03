import React from "react";
import Image from "next/image";

import cocoa_bg from "./assets/Cocoa.jpg";
import cocoa_icon from "./assets/cocoa-full.gif";
import blaine_bg from "./assets/Blaine.jpg";
import blaine_icon from "./assets/blaine-full.gif";
import pomme_bg from "./assets/Pomme.jpg";
import pomme_icon from "./assets/pomme-full.gif";
import stralechi_bg from "./assets/Stralechi.jpg";
import stralechi_icon from "./assets/stralechi-full.gif";
import pebbles_bg from "./assets/Pebbles.jpg";
import pebbles_icon from "./assets/pebbles-full.gif";

import { useState, useEffect } from "react";

const refsArray = Array(5)
  .fill()
  .map(() => React.createRef());
const init = 0;
const desc = React.createRef();
const icon = React.createRef();
export default function Characters() {
  const [chars, setChars] = useState([
    {
      name: "Pebbles",
      desc: " approaches each battle with mix ups making his motions are rarely predictable. Once he has his opponent in the air, his power increases making him a terrifying foe.",
      icon: pebbles_icon,
      bg: <Image
        src={pebbles_bg}
        alt="5 force fighters banner"
        className="cover h-auto  "
        quality={100}
        priority={true}
        loading="eager"
      />
    },

    {
      name: "Blaine",
      desc: " armed with a polearm, is designated under the archetype of a midrange glass cannon; he is able to keep his opponents at bay while dealing massive amounts of damage. With practice you'll be able to master his rage and character specific ability to burn foes.",
      icon: blaine_icon,
      bg: <Image
        src={blaine_bg}
        alt="5 force fighters banner"
        className="cover h-auto  "
        quality={100}
        priority={true}
        loading="eager"
      />
    },
    {
      name: "Pomme",
      desc: " is regarded as a setup character. Using her resources such as traps and projectiles plus proper timing, she can devastate her foes with her brute strength. If her strength isn't enough, she is able to apply super armor to guts through attacks.",
      icon: pomme_icon,
      bg: <Image
        src={pomme_bg}
        alt="5 force fighters banner"
        className="cover h-auto  "
        quality={100}
        priority={true}
        loading="eager"
      />
    },
    {
      name: "Stralechi",
      desc: " possesses the all rounder play style. His Hashira sword techniques allow him to close the distance between him and his opponent. By utilizing his long startups but quick release sword slashes and tossing water to keep foes where they are.",
      icon: stralechi_icon,
      bg: <Image
        src={stralechi_bg}
        alt="5 force fighters banner"
        className="cover h-auto  "
        quality={100}
        priority={true}
        loading="eager"
      />
    },
    {
      name: "Cocoa",
      desc: " is a rush down character. He uses his high speed movements to close the gap between him and his adversaries. Lacking projectiles, it's pivotal to use his combo strings to end matches.",
      icon: cocoa_icon,
      bg: <Image
        src={cocoa_bg}
        alt="5 force fighters banner"
        className="cover h-auto  "
        quality={100}
        priority={true}
        loading="eager"
      />
    },
  ]);


  const [currentChar, setCurrentChar] = useState(0);


  function getDesc(e) {
    
    console.log( e.currentTarget.id);
    setCurrentChar(e.currentTarget.id)
   
    refsArray.forEach((r) => {
      if (r.current.classList.contains("ba", "bg-white-10")) {
        r.current.classList.remove("ba", "bg-white-10");
      }
      if (desc.current.classList.contains("ba", "bg-white-10")) {
        desc.current.classList.remove("ba", "bg-white-10");
      }
    });

    e.currentTarget.classList.add("ba", "bg-white-10");
  }
  return (
    <div className="ma0  ph4 pv4 white ">
      <div className="ma0 ">
        <h2 className="ma0 f1 white">|Your Rider</h2>
        <div className=" black w-100 pv4 flex justify-center">


          <div
            className="  f2-ns f3-m f4 shadow-text relative white"
            ref={desc}
          >
            <div className="flex flex-wrap items-center  ">
              <div className=" w-100 flex ">
                {chars.map((r, index) => {
                  return (
                    <div
                      key={index}
                      id={index}
                      onClick={getDesc}
                      ref={refsArray[index]}
                      className={`center flex justify-center items-end  b--white-10 br2 w-30 grow ${index === 0 ? "bg-white-10 ba" : ""
                        }`}
                    >
                      <div
                        className={
                          "pointer b--white-20 flex flex-wrap items-center  w-100-ns "
                        }
                      >
                        <div
                          className=" ba flex items-center bg-black-50 w-100-m "
                          style={{ minHeight: "80px", height: "auto" }}
                        >
                          <Image
                            src={r.icon}
                            alt="character"
                            className="w-auto h-auto"
                            priority={true}
                            loading="eager"
                          />
                        </div>
                        <div className="flex items-center w-100 flex justify-center">
                          <p className="white tc f3-ns f5-m f7 ma0 pv3-l pv2-m">
                            {r.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="w-100 flex flex-wrap items-center bg-black">
                <div className=" w-50-l  w-100 bg-black-70 pa4-l ">
                  {
                    chars[currentChar].bg
                  }
                </div>
                <div className="w-50-l w-100 pa4-l lh-2 bg-black-70   ">
                  <p className="f3-l f4-m f5 ">
                    <span className="pink b">{chars[currentChar].name}</span>
                    { chars[currentChar].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
