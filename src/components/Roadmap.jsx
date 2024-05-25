import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import roadmaptitleBg from '../assets/img/roadmaptitleBg.png'
import roadmapItemImg1 from '../assets/img/roadmapItemImg1.png'
import roadmapItemImg2 from '../assets/img/roadmapItemImg2.png'
import roadmapItemImg3 from '../assets/img/roadmapItemImg3.png'
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
                  <li>Official token launch and distribution to pizza lovers everywhere.</li>
                  <li>Establishing a vibrant community through social media and meme campaigns.</li>
                  <li>Listing on major exchanges for maximum accessibility.</li>
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
                  <li>Official token launch and distribution to pizza lovers everywhere.</li>
                  <li>Establishing a vibrant community through social media and meme campaigns.</li>
                  <li>Listing on major exchanges for maximum accessibility.</li>
                </ul>
                <figure className='roadmapItemImg'>
                  <img src={roadmapItemImg2} alt="" />
                </figure>
              </div>

              <div className="wrapper-item">
                <div className='title'>
                  <h4>Phase 3</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                <ul className='roadmaplist'>
                  <li>Official token launch and distribution to pizza lovers everywhere.</li>
                  <li>Establishing a vibrant community through social media and meme campaigns.</li>
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
