import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footer-logo.png'
import MarqueeBottom from './MarqueeBottom';
import MarqueeTop from './MarqueeTop';
import { FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer(){
    const socials = [
        {
          icon:<FaXTwitter />,
          url: "https://x.com/pegeonsol",
        },
        {
          icon:<FaPaperPlane />,
          url: "https://t.me/pegeonsol",
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
                            </div>
                        </Col>
                    </Row>
                </Container>
            <MarqueeBottom />
        </footer>
    )
}