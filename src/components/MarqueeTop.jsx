import React from 'react'
import brandLogo1 from '../assets/img/brand-logo/brandLogo1.png';
import brandLogo2 from '../assets/img/brand-logo/brandLogo2.png';
import brandLogo3 from '../assets/img/brand-logo/brandLogo3.png';
import brandLogo4 from '../assets/img/brand-logo/brandLogo4.png';
import brandLogo5 from '../assets/img/brand-logo/brandLogo5.png';
import brandLogo6 from '../assets/img/brand-logo/brandLogo6.png';
import Marquee from "react-fast-marquee";
import { Container, Row, Col } from 'react-bootstrap';
export default function MarqueeOne() {
    const marqueeImgs = [
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
        {
            image: brandLogo1,
        },
        {
            image: brandLogo2,
        },
        {
            image: brandLogo3,
        },
        {
            image: brandLogo4,
        },
        {
            image: brandLogo5,
        },
        {
            image: brandLogo6,
        },
    ];
    return (
        <section className="marquee">
            <Container>
                <Row>
                    <Col>
                        <Marquee direction="left" speed={100} loop={50}>
                            {marqueeImgs.map((marqueeImg, index) => (
                                <figure key={index}>
                                    <img src={marqueeImg.image} alt="" />
                                </figure>
                            ))}
                        </Marquee>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}