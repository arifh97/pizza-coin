import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import aboutBg from '../assets/img/aboutBg.jpg'
import aboutTopShap from '../assets/img/aboutTopShap.png'
import aboutBottomShap from '../assets/img/aboutBottomShap.png'
export default function About(){
    return(
        <div className="about">
            <figure className='aboutTopShap'>
                <img src={aboutTopShap} alt="" />
            </figure>
            <figure className='aboutBg'>
                <img src={aboutBg} alt="" />
            </figure>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={8}>
                        <div className="about-content">
                           <h3>About Pepe Pizzeria</h3>
                           <p><strong>"Pepe Pizzeria</strong> is the social layer and community meme coin of Solana. <strong> Everyone knows that Pepe's famous pizza</strong> with lots of cheese is a real success. Pepe, the pizzeria, is expanding worldwide, and everyone knows Pepe. That's why these pizzas will soon be on every table. <strong> Be part of it early and benefit from this expansion.</strong>"</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <figure className='aboutBottomShap'>
                <img src={aboutBottomShap} alt="" />
            </figure>
        </div>
    )
}
