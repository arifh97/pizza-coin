import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/Pizza.png'
import MarqueeBottom from './MarqueeBottom';
import MarqueeTop from './MarqueeTop';
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/telegram.svg'
import socialIcon3 from '../assets/img/socialIcon3.svg'
import socialIcon4 from '../assets/img/socialIcon4.svg'
export default function Footer(){
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
      const currentYear = new Date().getFullYear(); 
    return(
        <footer className="footer">
            <MarqueeTop />
                <Container>
                    <Row>
                        <Col>
                            <div className="footer-content text-center">
                                <a href="/" className='footer-logo'>
                                    <img src={FooterLogo} alt="" />
                                </a>
                                <h3>pepe pizzeria </h3>
                                <div className='social-logos mb-3 mt-3'>
                                    <h4 className='pb-2'>Follow us</h4>
                                    <ul className="socials d-inline-flex gap-3 align-items-center">
                                        {socials.map((item, index)=>(
                                        <li  key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
                                        ))}
                                    </ul>
                                </div>
                                <p className='copyright'>Copyright: © {currentYear} Pizzeria. All Rights Reserved.</p>
                                
                                <div className="gtranslate_wrapper  gtranslate_wrapper_modile"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            <MarqueeBottom />
        </footer>
    )
}