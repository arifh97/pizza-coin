import React from 'react'
import marqueeBottomImg from '../assets/img/marqueeBottomImg.png';
import Marquee from "react-fast-marquee";
export default function MarqueeBottom() {
    const marqueeImgs = Array(500).fill({ image: marqueeBottomImg });
    return (
        <section className="hidden md:block custom-marquee bottom">
            <Marquee direction="right" speed={50} autoFill={true}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <img key={index} src={marqueeImg.image} alt="" />
                ))}
            </Marquee>
        </section>
    )
}