import React from 'react'
import brandLogo1 from '../assets/img/marqueeTopImg.png';
import Marquee from "react-fast-marquee";
import { Container, Row, Col } from 'react-bootstrap';
export default function MarqueeOne() {
    const marqueeImgs = [
        {
            image: brandLogo1,
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