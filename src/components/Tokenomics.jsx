import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tokenomicsBG from '../assets/img/tokenomicsBG.jpg'
import tokensiImg11 from '../assets/img/tokensiImg11.gif'
import tokensiImg1 from '../assets/img/tokensiImg1.png'
import tokensiImg2 from '../assets/img/tokensiImg2.gif'
import tokensiImg3 from '../assets/img/tokensiImg3.gif'
import tokensiImg4 from '../assets/img/tokensiImg4.gif'
import tokenPizzaSlize from '../assets/img/pizzaSingle-Item-BG.png'
export default function Tokenomics() {
    const tokenItems =[
        {
            title: "Liquidity",
            value: "85%",
            contentRImg: tokensiImg1,
            tokensiImg: tokensiImg11,
        },
        {
            title: "Liquidity Burned",
            value: "100%",
            contentRImg: tokensiImg2,
        },
        {
            title: "TREASURY",
            value: "10%",
            contentRImg: tokensiImg3,
        },
        {
            title: "CEX WALLET",
            value: "5%",
            contentRImg: tokensiImg4,
        },
    ]
  return (
    <section className='tokenomics'>
      <Container>
        <Row>
            <Col>
                <div className="section-title text-center">
                    <h2>Pizzerianomics</h2>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className="tokenomics-content">
                    <h4 className='text-center'>Total Supply <strong>1.000.000.000</strong></h4>
                    <div className="content-inner d-flex flex-wrap align-items-center justify-content-center">
                        {tokenItems.map((item, index)=>(
                            <div className={`inner-item item-${index + 1}`} key={index}>
                                <div className="info text-center">
                                    <h5>{item.title} <span className='d-block'>{item.value}</span></h5>
                                    <img src={item.contentRImg} alt="" />
                                </div>
                                <img className='pizzaItemBG' src={tokenPizzaSlize} alt="" />
                                {item.tokensiImg?(<img className='tokensiImg' src={item.tokensiImg} alt="" />):''}
                            </div>
                        ))}
                    </div>
                </div>
            </Col>
        </Row>
      </Container>

    <figure className='tokenomicsBG'>
        <img src={tokenomicsBG} alt="" />
    </figure>
    </section>
  )
}
