
import React from 'react'
import Script from 'next/script'
import Image from 'next/image'
const page = () => {
  return (
    <>
      <Script src="./script.js" />
      <section aria-label="Newest Photos">
        <div className="carousel" data-carousel>
          <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
          <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
          <ul data-slides>
            <li className="slide" data-active>
              {/* <img src="/slideshow1.jpg" alt="Nature Image #1" /> */}
              <Image src="/slideshow1.jpg"  
                alt="Women Image"
                width={2000}
                height={1000}
              />
            </li>
            <li className="slide">
            <Image src="/slideshow2.jpg" alt="Image " width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow3.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow4.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow5.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow6.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow7.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow8.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow9.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
            <li className="slide">
            <Image src="/slideshow10.jpg" alt="Women Image" width={2000} height={1000} />
            </li>
           
          </ul>
        </div>
      </section>
    </>
  )
}

export default page