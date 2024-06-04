import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import roadmaptitleBg from '../assets/img/roadmaptitleBg.png'
import roadmapItemImg1 from '../assets/img/roadmapItemImg1.png'
import roadmapItemImg2 from '../assets/img/roadmapItemImg2.png'
import roadmapItemImg3 from '../assets/img/roadmapItemImg3.png'
import roadmapPizzaPhase2 from '../assets/img/roadmapPizzaPhase2.png'
import roadmapPizzaPhase2BG from '../assets/img/roadmapPizzaPhase2BG.png'
import tokensiImg2 from '../assets/img/tokensiImg2.gif'
import MarqueeTop from './MarqueeTop'

export default function Roadmap() {
  return (
    <section className='roadmap'>
      <MarqueeTop />
      <Container>
          <Row>
            <Col>
              <div className="section-title text-center">
                <h2>Pizzeriamap</h2>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="roadmap-wrapper">
              <div className="wrapper-item">
                <div className='title'>
                  <h4>Phase 1</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                <ul className='roadmaplist'>
                  <li>AirDrop of 500.000 $Pizpepe Until June 07.2024</li>
                  <li>Official token launch June 08.2024 1:00pm ( Berlin Time ) and distribution to pizza lovers everywhere</li>
                </ul>
                <figure className='roadmapItemImg'>
                  <img src={roadmapItemImg1} alt="" />
                </figure>
              </div>

              <div className="wrapper-item">
                <div className='title'>
                  <h4>Phase 2</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                <ul className='roadmaplist'>
                  <li>LAUNCH !  On raydium.io $PIZPEPE 05.06.2024 6:00 PM (Berlin) 12:00 PM (New York).</li>
                </ul>
                <div className='roadmapItemImg'>
                  <img className='fireGif' src={tokensiImg2} alt="" />
                  <img  className='roadmapPizzaPhase2' src={roadmapPizzaPhase2} alt="" />
                  <img className='roadmapPizzaPhase2BG' src={roadmapPizzaPhase2BG} alt="" />
                </div>
              </div>

              <div className="wrapper-item">
                <div className='title'>
                  <h4>Phase 3</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                <ul className='roadmaplist'>
                  <li>Listing on major exchanges for maximum accessibility.</li>
                </ul>
                <figure className='roadmapItemImg'>
                  <img src={roadmapItemImg3} alt="" />
                </figure>
              </div>
            </div>
          </Row>
      </Container>
    </section>
  )
}
