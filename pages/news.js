import Head from "next/head";
import Image from "next/image";
import Footer from "../Components/footer";
import style from "../styles/Home.module.css";
import Link from "next/link";
import NewsFetch from "../Components/newsFetch";
import tachyons from 'tachyons/css/tachyons.css'

export default function Home({ data }) {
  return (
    <div className="">
      <Head className="ma0 pa0 mb0">
        <title>5 FORCE FIGHTERS</title>
        <meta name="description" content="5 FORCE FIGHTERS NEWS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="ma0 pa0 fixed top-0 z-2 ">
        <nav
          className={`nav_gradient fixed w-100  ph3 ma0 h2 top-0 flex items-center justify-between pv4 ${style.border_5ff} `}
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
      <main className="ma0 pa0"></main>
      {/*news component*/}
      <NewsFetch />

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
