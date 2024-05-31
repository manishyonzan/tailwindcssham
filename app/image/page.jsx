"use client"

import Image from "next/image";
import { useState } from "react"


const page = () => {
    const [display,setDisplay] = useState(1);
    const cliked = ()=>{
        if (display>4) {
            setDisplay(1);
            return
            
        }
        setDisplay(display+1);
    }
    return (
        <>
            <div className="container" id="container">
                <div className="item" id="item1">
                <Image src="/slideshow1.jpg" alt="Image " width={2000} height={1000} />
                </div>
                <div className="item" id="item2">
                <Image src="/slideshow2.jpg" alt="Image " width={2000} height={1000} />
                </div>
                <div className="item" id="item3">
                <Image src="/slideshow3.jpg" alt="Image " width={2000} height={1000} />
                </div>
                <div className="item" id="item4">
                <Image src="/slideshow4.jpg" alt="Image " width={2000} height={1000} />
                </div>
                <div className="item" id="item5">
                <Image src="/slideshow5.jpg" alt="Image " width={2000} height={1000} />
                </div>
            </div>
            <a href={`#item${display}`} onClick={cliked} className="slideshow-btn">update</a>
            {display}
        </>

    )
}

export default page