import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import serviceIcon1 from '../assets/img/services-icons/serviceIcon1.svg'
import serviceIcon2 from '../assets/img/services-icons/serviceIcon2.svg'
import serviceIcon3 from '../assets/img/services-icons/serviceIcon3.svg'
import serviceIcon4 from '../assets/img/services-icons/serviceIcon4.svg'
import serviceIcon5 from '../assets/img/services-icons/serviceIcon5.svg'
import serviceIcon6 from '../assets/img/services-icons/serviceIcon6.svg'
import iconShap from '../assets/img/services-icons/iconShap.png'
import serviceItemBG from '../assets/img/services-icons/serviceItemBG.png'
export default function Services(){
    const servicesContent = [
        {
            serviceIcon: serviceIcon1,
            title: "Low Fees, Scalability",
            desc: "OxHash offers low fees and high scalability as an EVM-compatible chain, ensuring swift transaction processing..."
        },
        {
            serviceIcon: serviceIcon2,
            title: "Interoperability",
            desc: "OxHash consensus-free interoperability takes blockchain interoperability to the next level, ensuring consistency"
        },
        {
            serviceIcon: serviceIcon3,
            title: "Blockchain Routing",
            desc: "Our routing system helps future-proof dApps by monitoring the conditions of the underlying chain."
        },
        {
            serviceIcon: serviceIcon4,
            title: "Smart Contracts",
            desc: "Our Reactive Smart Contracts have self-paying wallets, which can monitor, move, process, and sync data between blockchains without external payments."
        },
        {
            serviceIcon: serviceIcon5,
            title: "Unified Development",
            desc: "Using WASM, we allow developers to create dApps using familiar languages like JavaScript, Python, Rust"
        },
        {
            serviceIcon: serviceIcon6,
            title: "Gas Fee Abstraction",
            desc: "Gas Fee Abstraction removes the complexity of paying fees across multiple chains. No need for users to hold L1 or L2 native tokens to use the dApp."
        },
    ];
    const arrowR = <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
    <path d="M6.29834 16.1667L14.6317 7.83334" stroke="#F8F6FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M6.29834 7.83334H14.6317V16.1667" stroke="#F8F6FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>;
    return(
        <div className="services">
            <Container>
                <Row className='justify-content-center'>
                    <Col lg={7}>
                        <div className="section-title text-center">
                            <h2>Core <span>Features</span></h2>
                            <p>At Layer 2b, we pride ourselves on offering a suite of core features designed to elevate your experience in the decentralized landscape.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='services-wrapper'>
                    {servicesContent.map((item, index)=>(
                    <Col lg={4} md={6} className='services-single-item' key={index}>
                        <div className="single-item text-center">
                            <img className='serviceItemBG' src={serviceItemBG} alt="" />
                            <figure className='icon'>
                                <img className='iconShap' src={iconShap} alt="" />
                                <img src={item.serviceIcon} alt="" />
                            </figure>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </Col>

                    ))}
                </Row>
                <Row>
                    <Col>
                        <div className="read-more text-center">
                            <a href="#" className='boxed-btn'>Read more {arrowR}</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
