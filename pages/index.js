import Head from "next/head";
import Link from "next/link";
import style from "../styles/Home.module.css";
import tachyons from "tachyons/css/tachyons.css";
import MainTop from "../Components/mainTop";
import PressKit from "../Components/pressKit";
import Characters from "../Components/characters";
import Features from "../Components/features";
import EmailList from "../Components/emailList";
import Footer from "../Components/footer";
import React from "react";

const menu = React.createRef();

export default function Home({ data }) {
  function handleMenu() {
    if (menu.current.classList.contains("close")) {
      menu.current.classList.remove("close");
      menu.current.classList.add("open");
    } else {
      if (menu.current.classList.contains("open")) {
        menu.current.classList.remove("open");
        menu.current.classList.add("close");
      }
    }
  }
  return (
    <div className="">
      <Head className="ma0 pa0 mb0">
        <title>5 FORCE FIGHTERS</title>
        <meta name="description" content="5 Force Fighters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="ma0 pa0 fixed top-0 z-2 w-100">
        <nav
          className={`nav_gradient fixed w-100  ph3 ma0 h2 top-0 flex items-center justify-between pv4 ${style.border_5ff} `}
        >
          <div className="w-60 ">
            <div className="flex ">
              <Link href="/">
                <h1 className="white f3-ns f5 " >5 FORCE FIGHTERS</h1>
              </Link>
            </div>
          </div>
          <div
            className=" flex items-center tc justify-center pointer ml6-m ml4 "
            onClick={handleMenu}
          >
       
       {/*
            <p className="pv1 ph3 tc ba bg-black b--white ba bw1 br3 hideWhenBig ml4 ml2-ns">
              =
            </p>
  */}
          </div>
          <div className=" flex justify-center items-center  ">
            <Link href="./news">
              <p className="white f4-ns f5 pa2 br2 b ">News</p>
            </Link>
            <Link href="https://store.steampowered.com/app/1599170/5_Force_Fighters/">
              {/*steam url*/}
              <p className="white f4-ns f5 pa2 br2 b ">Wishlist</p>
            </Link>
          </div>
        </nav>
        <div
          className="mt5  w-100 bg-black white flex flex-wrap justify-end close overflow-hidden"
          ref={menu}
        >
          <div className="w-100  tc">
            <p className="w-100">MENU</p>
            <p className="w-100 mt5">News</p>
            <p className="w-100">Wishlist</p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="ma0 pa0">
        <MainTop />
        <PressKit />
        <Characters />
        <Features />
        <EmailList />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
