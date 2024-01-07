import React from "react";
import Image from "next/image";
import bg from "./assets/bg-2.gif";

import { useState, useEffect } from "react";
export default function Features() {
  const [chars, setChars] = useState([
    {
      name: "Cocoa",
      desc: "I am Cocoa",
    },
    {
      name: "Pebbles",
      desc: "I am Pebbles",
    },
  ]);

  const [description, setDescription] = useState(chars[0].desc);
  function getDesc(e) {
    console.log(e.currentTarget.id);
    setDescription(chars[e.currentTarget.id].desc);
  }
  return (
    <div className=" relative white ">
      <h2 className="ma0 f1 mb4 ph4 pv2 bl b--white">|Features</h2>
      <div className="container relative ">
        <div className="o-30">
          <Image
            src={bg}
            alt="5 force fighters banner"
            layout="fill"
            objectFit="cover"
            quality={100}
            style={{ imageRendering: "high-quality" }}
          />
        </div>
        <div className="flex flex-wrap items-center relative f4-l f4-m f5 lh-2 ">
          <div className="fl  ph4  black bg-black-40 w-tl  b--white flex w-100 white flex items-center flex-wrap ">
            <div className=" w-50-l w-100 flex items-center">
              <div className="container-1 bg-black w-100 ma0 br4 flex items-center">
                <Image
                  src={
                    "https://www.udrop.com/cache/plugins/filepreviewer/1102122/3cc6065d6da2911eaedbf21e1bd944ec6d909c0870093f0ee7b6dd0184962139/1100x800_cropped.gif"
                  }
                  width={500}
                  height={500}
                  unoptimized={true}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </div>
            <div className="w-50-l w-100 ph4-l ">
              <h4 className="f2-ns f3 ma0 underline">Full Force Links</h4>
              <p className="">
                5 Force Fighters’ “Full Force Links” system ties all its
                mechanics seamlessly. The ability to increase your character’s
                damage output with Focus, increasing their defense as their
                Force rises, and to truly become free with the flexible Freedom
                Force skills. Tying these main mechanics together has formed a
                gameplay loop of combo expression and player freedom never
                before seen in a fighting game!{" "}
              </p>
            </div>
          </div>
          <div className="fl ph4 black w-50 tl  b--white flex w-100 flex items-center flex-wrap-reverse white bg-black-40">
            <div className="w-100 w-50-l w-100 ph4-l ">
              <h4 className="f2-ns f3 ma0 underline">Rollback netcode</h4>
              <p className=" white  ">
                Throw hands near or far With the capabilities of rollback
                netcode you will be able to play 5 Force Fighters against your
                fighting game rival down the street from your crib, to across
                the atlantic ocean and beyond. We know the core experience of
                fighting games is built behind the accessibility to go head to
                head without a connectional hitch.
              </p>
            </div>

            <div className="container-3 bg-black w-50-l w-100 mt0-l mt4 flex items-center">
              <Image
                src={
                  "https://www.udrop.com/cache/plugins/filepreviewer/1061048/53b647f2c962d1b76743748fac758a72cf4efc5fd89fc7bd6ef6efe27ce88a35/1100x800_cropped.gif"
                }
                width={500}
                height={500}
                unoptimized={true}
                alt=""
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="fl bg-black-40  ph4 black  tl  b--white flex white flex items-center flex-wrap ">
            <div className="container-2 bg-black w-50-l w-100 flex items-center overflow-hidden">
              <Image
                src={
                  "https://www.udrop.com/cache/plugins/filepreviewer/1061044/dbc286b76f962ce140736cdf5096d3c740e702213acae64712bcd23fccdf21eb/1100x800_cropped.gif"
                }
                width={500}
                height={500}
                unoptimized={true}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  transform: "scale(1.05)",
                }}
              />
            </div>
            <div className="w-50-l w-100 ph4-l ">
              <h4 className="f2-l f3 ma0 underline">A compeling story</h4>
              <p className="">
                A compelling story Gifted or cursed with pain and new powers, 5
                teens find their paths converging — propelled by trauma,
                revenge, and guided by a mysterious figure; Cocoa, Pebbles,
                Pomme, StraleChi, and Blaine rush toward the city of Corvegas.
                There, they will find the source of their powers, and the forces
                that distorted their futures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
