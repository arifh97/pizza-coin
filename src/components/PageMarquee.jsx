import React from 'react'
import Marquee from "react-fast-marquee"

export default function PageMarquee() {
  return (
    <div className="common-marquee ">
        <Marquee autoFill={true} speed={60} direction='left'>
            {/* image loop */}
        </Marquee>
    </div>
  )
}
