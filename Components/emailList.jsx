import React from "react";
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
export default function EmailList() {
  return (
    <div className=" bg-blue ma0  relative emailBg pv6-ns pv4 ">
      <div className="subscribe_container   flex justify-center items-center flex-wrap   w-100  top-0 ">
        <div className="subscribe_content  tc  relative ">
          <Image
            src={cocoapebbles}
            alt="cocoa and pebbles"
            className="emailCocoaButter"
          />
        </div>
        <div className="flex justify-center flex-wrap items-center tc  w-100 mw7 ph3">
          <div className="subscribe_input w-70-l   ">
            <form className="tc">
              <h2 className="f1-ns f2 w-100  ma0 tc ">STAY UPDATED</h2>
              <p>Join the mailing list</p>
              <input
                type="email"
                placeholder="Your email address"
                className="pa3 w-100 mw6 bg-white-90 color black-80 "
                required
              />
              <button
                type="submit"
                className="w-100 mw6 pa3 bg-purple pointer hover-bg-light-purple "
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="flex  flex-wrap justify-center items-center w-50-ns mt4-ns ">
            <div className="">
              <h3 className="f3 mb2">Follow Us</h3>
        
            </div>
            <div className=" w-100 mw6 ma0">
              <div className="social flex  justify-center items-center w-100 ma0 ">
                <div className="twitter">
                  <Image
                    src={twitter_icon}
                    alt="cocoa and pebbles"
                    width={40}
                    height={40}
                    quality={100}
                  />
                </div>
                <div className="istagram ml2">
                  <Image
                    src={instagram_icon}
                    alt="cocoa and pebbles"
                    width={40}
                    height={40}
                    quality={100}
                  />
                </div>
                <div className="tiktok ml2">
                  <Image
                    src={tiktok_icon}
                    alt="cocoa and pebbles"
                    width={40}
                    height={40}
                    quality={100}
                  />
                </div>
                <div className="youtube ml2">
                  <Image
                    src={youtube_icon}
                    alt="cocoa and pebbles"
                    width={40}
                    height={42}
                    quality={100}
                  />
                </div>
                <div className="facebook ml2">
                  <Image
                    src={facebook_icon}
                    alt="cocoa and pebbles"
                    width={40}
                    height={40}
                    quality={100}
                  />
                </div>
                <div className="discord ml2">
                  <Image
                    src={discord_icon}
                    alt="cocoa and pebbles"
                    width={40}
                    height={40}
                    quality={100}
                  />
                </div>
                
              </div>
              <p className="f3 w-100 ma0 mb2">and join the 5FF community</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
