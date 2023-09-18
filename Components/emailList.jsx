import React from "react";
import { Check } from "./firebaseConfig";
import bg from "./assets/bg-3.gif";
import twitter_icon from "./assets/twitter-icon.gif";
import instagram_icon from "./assets/instagram-icon.gif";
import tiktok_icon from "./assets/tiktok-icon.gif";
import youtube_icon from "./assets/youtube-icon.gif";
import facebook_icon from "./assets/facebook-icon.gif";
import discord_icon from "./assets/discord-icon.gif";
import cocoapebbles from "./assets/cocoapebbles.gif";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

const emailRef = React.createRef();

export default function EmailList() {
  return (
    <div className=" bg-blue ma0  relative emailBg pv6-ns pv4 ">
      <div className="subscribe_container   flex justify-around items-center flex-wrap   w-100  top-0 ">
        <div className="subscribe_content   tc  relative b ">
          <Image
            src={cocoapebbles}
            alt="cocoa and pebbles"
            className="emailCocoaButter"
          />
        </div>
        <div className="flex justify-center flex-wrap items-center tc  w-100 mw7-l mw7 ph1-l ph3 mt6-l   shadow-text ">
          <div className="subscribe_input w-80-l  center w-90  email-box ">
            <form className="tc pv4-l w-100 ">
              <h2 className="f1-ns f2 w-100  ma0 tc ">STAY UPDATED</h2>
              <p>Join the mailing list</p>
              <input
                type="email"
                placeholder="Your email address"
                className="pa3-ns pa2 w-100 mw7  bg-white-90 color black-80 f4  "
                required
                style={{ outline: "none" }}
                ref={emailRef}
              />
              <button
                type="submit"
                className="w-100 mw7  pa3 bg-purple pointer hover-bg-light-purple white"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing. You have joined the mailing list!")
                  Check(emailRef.current.value)
                  emailRef.current.value = " "
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex  flex-wrap justify-center items-center w-70-ns  ">
            <div className=" w-100">
              <h3 className="f1-ns f2 w-100 ma0 mt3-l mt4-m mt3">FOLLOW US</h3>
            </div>
            <div className=" w-100  ma0 mt2" style={{ width: "320px" }}>
              <div className="social flex  justify-around items-center w-100 ma0 mt3 ">
                <div className="twitter img-shadow ">
                  <Link
                    href="https://twitter.com/KaizenCreed"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={twitter_icon}
                      alt="cocoa and pebbles"
                      width={40}
                      height={40}
                      quality={100}
                      className=""
                    />
                  </Link>
                </div>
                <div className="istagram ml2">
                  <Link
                    href="https://instagram.com/kaizencreed/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={instagram_icon}
                      alt="cocoa and pebbles"
                      width={40}
                      height={40}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="tiktok ml2">
                  <Link
                    href="https://www.tiktok.com/@kaizencreed"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={tiktok_icon}
                      alt="cocoa and pebbles"
                      width={40}
                      height={40}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="youtube ml2">
                  <Link
                    href="https://youtube.com/c/KaizenCreed"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={youtube_icon}
                      alt="cocoa and pebbles"
                      width={40}
                      height={42}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="facebook ml2">
                  <Link
                    href="https://www.facebook.com/watch/Keena.lafa"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={facebook_icon}
                      alt="cocoa and pebbles"
                      width={40}
                      height={40}
                      quality={100}
                    />
                  </Link>
                </div>
                <div className="discord ml2">
                  <Link
                    href="https://discord.gg/BWHxmCYkNM"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Image
                      src={discord_icon}
                      alt="cocoa and pebbles"
                      width={40}
                      height={40}
                      quality={100}
                    />
                  </Link>
                </div>
              </div>
              <p className="f4  w-100 ma0 mb2">and join the 5FF community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
