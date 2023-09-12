"use client"

import { useState } from "react"

const Navbar = () => {
  const [hamshow,setHamshow] = useState(false);

  const hamshowtoogle = ()=>{
    setHamshow(!hamshow);

  }
  return (
    <>
      <div className="w-full border border-gray-500 flex justify-between p-2 mt-2">
        <div>
          Company name
        </div>
        <div className="w-1/3 flex justify-around invisible sm:visible">
          <div>Home</div>
          <div>about</div>
          <div>contact</div>
        </div>
        <div className="sm:hidden" onClick={hamshowtoogle}>button</div>
      </div>
      {hamshow?<div className="flex flex-col sm:hidden ">
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
    </>
  )
}

export default Navbar