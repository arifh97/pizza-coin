import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import tokenomicsBG from '../assets/img/tokenomicsBG.png'
export default function Tokenomics() {
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
                    <h4>Total Supply <strong>100.000.000</strong></h4>
                    <div className="token-inner">
                        <div className="single-item">

                        </div>
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
