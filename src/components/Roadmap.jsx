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
                  <h4>Stage 1</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                
                <ul className='roadmaplist'>
                <h4 className='text-xl lg:text-2xl xl:text-[28px] font-bold !leading-normal'>The Journey Begins – Getting Noticed and Starting the Pre-Sale</h4>
                <p className='text-lg text-black font-light !leading-normal'>It’s time to introduce the <span className='font-bold'>PEPIZ</span> Coin to the world! We’re kicking off our pre-sale and focusing on building a passionate community that will support us from day one – together, we’ll make <span className='font-bold'>PEPIZ</span> a true phenomenon!</p>
                  {/* <li>AirDrop of 500.000 $PIZPEPE</li>
                  <li>Official token launch June 05.2024 . <a className='me-1' target='_blank' href="https://raydium.io/swap/?inputMint=sol&outputMint=4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY">Raydium</a> <a target='_blank' href="https://jup.ag/swap/4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY-SOL">Jupiter</a></li> */}
                </ul>
                <figure className='roadmapItemImg'>
                  <img src={roadmapItemImg1} alt="" />
                </figure>
              </div>

              <div className="wrapper-item">
                <div className='title'>
                  <h4>Stage 2</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                <ul className='roadmaplist'>
                  <h4 className='text-xl lg:text-2xl xl:text-[28px] font-bold !leading-normal'>The Hype Rises – Advertising and Listing on Major Platforms</h4>
                  <p className='text-lg text-black font-light !leading-normal'>With a clear goal ahead, we’re setting sail for the next step! We’ll ramp up visibility with targeted ads on major crypto websites and platforms like CoinMarketCap and CoinGecko – <span className='font-bold'>PEPIZ</span> won’t be ignored!</p>
                  {/* <li>Exciting Competitions and Loyalty Rewards for Our Community.</li>
                  <li>Focus on community growth through influencer partnerships.</li> */}
                </ul>
                <div className='roadmapItemImg'>
                  <img className='fireGif' src={tokensiImg2} alt="" />
                  <img  className='roadmapPizzaPhase2' src={roadmapPizzaPhase2} alt="" />
                  <img className='roadmapPizzaPhase2BG' src={roadmapPizzaPhase2BG} alt="" />
                </div>
              </div>

              <div className="wrapper-item">
                <div className='title'>
                  <h4>Stage 3</h4>
                  <figure className='roadmaptitleBg'>
                    <img src={roadmaptitleBg} alt="" />
                  </figure>
                </div>
                <ul className='roadmaplist'>
                  <h4 className='text-xl lg:text-2xl xl:text-[28px] font-bold !leading-normal'>The Big Moment – Completing the Pre-Sale and Going Live on Raydium</h4>
                  <p className='text-lg text-black font-light !leading-normal'>Once the pre-sale ends, we’ll go live on <span className='font-bold'>Raydium</span> – the first step toward a successful future! But the journey doesn’t stop here: more exciting milestones and stages will be revealed once we’re live on <span className='font-bold'>Raydium</span>, taking over the world!</p>
                  {/* <li>Expanding our reach and ensuring accessibility to a global audience by securing listings on major cryptocurrency exchanges across the world, thus providing easy access to our platform for users from diverse regions and backgrounds.</li> */}
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
