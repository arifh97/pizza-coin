import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroBg from '../assets/img/heroBG.jpg'
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/telegram.svg'
import socialIcon3 from '../assets/img/socialIcon3.svg'
import socialIcon4 from '../assets/img/socialIcon4.svg'
import CopyToClipboard from './CopyToClipboard';
export default function Banner(){
    const socials = [
        {
          icon:<img src={twitter} alt="Social Icon" />,
          url: "https://x.com/pizpepe",
        },
        {
          icon:<img src={telegram} alt="Social Icon" />,
          url: "https://t.me/+-uqniTrsSvc5ODZh",
        },
        {
          icon:<img src={socialIcon3} alt="Social Icon" />,
          url: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=EiHvfN6HKvY6v6vjaoL1hpCAAxK5QMswDK7SRDM3u5kd&outputSymbol=RASTAMOU&fixed=in&inputMint=sol&outputMint=4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R",
        },
        {
          icon:<img src={socialIcon4} alt="Social Icon" />,
          url: "https://dexscreener.com/?__cf_chl_tk=6UxNBnayvW7qzQDE_iKEFbhF1nlxT5p8d_LpGuHs4Os-1716965713-0.0.1.1-1557",
        },
      ];
    return(
        <div className="banner">
            <figure className='heroBg'>
                <img src="" alt="" />
                <img src={heroBg} alt="" />
            </figure>
            <Container>
                <Row className='justify-content-center justify-content-lg-start'>
                    <Col lg={8} md={10}>
                        <div className="banner-content text-center text-lg-start">
                            <h1> <span>Pepe</span> Pizzeria</h1>
                            <p>Join us and become part of the First Pepe Pizzeria</p>
                            <div className='d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap gap-4'>
                                <ul className="socials d-flex align-items-center">
                                    {socials.map((item, index)=>(
                                    <li  key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
                                    ))}
                                </ul>
                                <a href="#" className="boxed-btn transparent">Ticker : $PIZPEPE</a>
                            </div>
                            <CopyToClipboard />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
