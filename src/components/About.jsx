import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function About(){
    return(
        <div className="about">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={5}>
                        <div className="about-content">
                           <h3>About Pepe Pizzeria</h3>
                           <p><strong>"Pepe Pizzeria</strong> is the social layer and community meme coin of Solana. Everyone knows that Pepe's famous pizza with lots of cheese is a real success. Pepe, the pizzeria, is expanding worldwide, and everyone knows Pepe. That's why these pizzas will soon be on every table. Be part of it early and benefit from this expansion."</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
