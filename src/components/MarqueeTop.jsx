import React from 'react'
import marqueeTopImg from '../assets/img/marqueeTopImg.png';
import Marquee from "react-fast-marquee";
export default function MarqueeTop() {
    const marqueeImgs = Array(30).fill({ image: marqueeTopImg });
    return (
        <section className="hidden md:block custom-marquee top">
            <Marquee direction="left" speed={50} autoFill={true}>
                {marqueeImgs.map((marqueeImg, index) => (
                    <img key={index} src={marqueeImg.image} alt="" />
                ))}
            </Marquee>
        </section>
    )
}