import React from 'react'

import img1 from '../assets/img/marquee/1.png'
import img2 from '../assets/img/marquee/2.png'
import img3 from '../assets/img/marquee/3.png'
import img4 from '../assets/img/marquee/4.png'
import img5 from '../assets/img/marquee/5.png'
import img6 from '../assets/img/marquee/6.png'
import img7 from '../assets/img/marquee/7.png'
import img8 from '../assets/img/marquee/8.png'
import img9 from '../assets/img/marquee/9.png'
import img10 from '../assets/img/marquee/10.png'
import img11 from '../assets/img/marquee/11.png'
import img12 from '../assets/img/marquee/12.png'
import img13 from '../assets/img/marquee/13.png'
import img14 from '../assets/img/marquee/14.png'
import img15 from '../assets/img/marquee/15.png'
import img16 from '../assets/img/marquee/16.png'
import img17 from '../assets/img/marquee/17.png'
import img18 from '../assets/img/marquee/18.png'
import img19 from '../assets/img/marquee/19.png'
import img20 from '../assets/img/marquee/20.png'
import Marquee from "react-fast-marquee";

export default function PageMarquee() {
    const marqueeImgs = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20
    ]
    return (
        <div className="hidden md:block custom-marquee top border-y-[4px] border-solid border-black bg-white py-[12px] md:py-[16px] lg:py-[20px] xl:py-[28px]">
            <Marquee direction='left' speed={60} autoFill={true}>
                {marqueeImgs.map((item, index) => (
                    <img key={index} src={item} className='mr-10' alt="" />
                ))}
            </Marquee>
        </div>
    )
}