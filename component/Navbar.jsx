"use client"

import { useState } from "react"
import Movingnav from "./Movingnav";
import Link from "next/link";

const Navbar = () => {
  const [hamshow, setHamshow] = useState(false);

  const hamshowtoogle = () => {
    setHamshow(!hamshow);

  }
  return (

    <>
      <div className="w-full  top-0 border border-gray-500 flex justify-between p-2 mt-2">
        <div>
          {/* <Movingnav/> */}
          Relax Travel
        </div>
        <div className="w-1/3 flex justify-around invisible sm:visible">
          <div className=" hover:text-blue-400 hover:cursor-pointer">Home</div>
          <div className=" hover:text-blue-400 hover:cursor-pointer"><Link href="/images">Pictures</Link></div>
          <div className=" hover:text-blue-400 hover:cursor-pointer"><Link href="/enquirey">Contact us</Link></div>
        </div>
        <div className="sm:hidden" onClick={hamshowtoogle}>{hamshow?"close":"Menu"}</div>
      </div>
      <div className={`flex flex-col sm:hidden ${hamshow ? 'transit' : 'transitz'} `}>
        {hamshow ?
          <div className="transit">
            <div>
              Home
            </div>
            <div>
              about
            </div>
            <div>
              contact
            </div>
          </div>:<div></div>}
      </div>
    </>
  )
}

export default Navbar