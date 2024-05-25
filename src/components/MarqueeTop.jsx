import React from 'react'
import marqueeTopImg from '../assets/img/marqueeTopImg.png';
import Marquee from "react-fast-marquee";
export default function MarqueeTop() {
    const marqueeImgs = Array(500).fill({ image: marqueeTopImg });
    return (
        <section className="marquee top">
            <Marquee direction="left" speed={100} loop={50}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <figure key={index}>
                        <img src={marqueeImg.image} alt="" />
                    </figure>
                ))}
            </Marquee>
        </section>
    )
}