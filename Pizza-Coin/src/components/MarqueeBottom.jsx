import React from 'react'
import marqueeBottomImg from '../assets/img/marqueeBottomImg.png';
import Marquee from "react-fast-marquee";
export default function MarqueeBottom() {
    const marqueeImgs = Array(500).fill({ image: marqueeBottomImg });
    return (
        <section className="marquee bottom">
            <Marquee direction="right" speed={50} loop={50}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <figure key={index}>
                        <img src={marqueeImg.image} alt="" />
                    </figure>
                ))}
            </Marquee>
        </section>
    )
}