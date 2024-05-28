import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroBg from '../assets/img/heroBG.jpg'
import socialIcon3 from '../assets/img/socialIcon3.svg'
import socialIcon4 from '../assets/img/socialIcon4.svg'
import { FaPaperPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CopyToClipboard from './CopyToClipboard';
export default function Banner(){
    const socials = [
        {
          icon:<FaXTwitter />,
          url: "https://x.com/pegeonsol",
        },
        {
          icon:<FaPaperPlane />,
          url: "https://t.me/pegeonsol",
        },
        {
          icon:<img src={socialIcon3} alt="Social Icon" />,
          url: "https://www.google.com",
        },
        {
          icon:<img src={socialIcon4} alt="Social Icon" />,
          url: "https://www.google.com",
        },
      ];
    return(
        <div className="banner">
            <figure className='heroBg'>
                <img src={heroBg} alt="" />
            </figure>
            <Container>
                <Row className='justify-content-center justify-content-lg-start'>
                    <Col lg={8} md={10}>
                        <div className="banner-content text-center text-lg-start">
                            <h1> <span>Pepe</span> Pizzeria</h1>
                            <p>Join us and become a part of Pepe Restaurante.</p>
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
