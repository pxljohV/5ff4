import React from 'react'
import kaizen from "./assets/kaizencreed.gif"
import big5fflogo from './assets/5ff-big.gif'
import Image from 'next/image'
export default function Footer() {
    return (
        <div className="bg-black relative pv3 flex justify-between items-center ph4-ns flex-wrap-reverse ">
            <div className="center tc">
                <h3>5 FORCE FIGHTERS</h3>
                <p>Genre: Fighting</p>
                <p>Release Date: TBA</p>
                <div className="relative w-100 tc">
                    <Image src={kaizen} alt="kaizen creed logo" width={"auto"} height={200} />
                    <p className="f7">All rights reserved - 2023</p>
                </div>
            </div>


            <div className="tc center overflow-hidden w-50-ns w-100 mw7">
                <Image src={big5fflogo}
                    alt="5 Force Fighters logo"
            
                    layout="responsive"
                />
            </div>
        </div>
    )
}
