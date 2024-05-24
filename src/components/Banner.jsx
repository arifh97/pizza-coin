import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import heroBg from '../assets/img/heroBG.jpg'
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
      ];
    return(
        <div className="banner">
            <figure className='heroBg'>
                <img src={heroBg} alt="" />
            </figure>
            <Container>
                <Row>
                    <Col lg={8} md={10}>
                        <div className="banner-content text-center text-lg-start">
                            <h1> <span>Pepe</span> Pizzeria</h1>
                            <p>Join us and become a part of Pepe Restaurante.</p>
                            <div className='d-flex align-items-center flex-wrap gap-4'>
                                <ul className="socials d-flex align-items-center">
                                    {socials.map((item, index)=>(
                                    <li  key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
                                    ))}
                                </ul>
                                <a href="#" className="boxed-btn transparent">Ticker : $pizpep </a>
                            </div>
                            <CopyToClipboard />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
