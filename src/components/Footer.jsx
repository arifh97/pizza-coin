import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import FooterLogo from '../assets/img/Logo.svg'
import socialLogo1 from '../assets/img/socialLogo1.svg'
import socialLogo2 from '../assets/img/socialLogo2.svg'
import socialLogo3 from '../assets/img/socialLogo3.svg'
import socialLogo4 from '../assets/img/socialLogo4.svg'
export default function Footer(){
    const socialLogos = [
        {   
            url:"https://google.com",
            logo:socialLogo1,
        },
        {   
            url:"https://google.com",
            logo:socialLogo2,
        },
        {   
            url:"https://google.com",
            logo:socialLogo3,
        },
        {   
            url:"https://google.com",
            logo:socialLogo4,
        },
    ];
    const footerTopMenusOne = [
        {
            menuLink: "https://google.com",
            menuTxt: "Developers",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Games",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Nodes",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Marketplace",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Token",
        },
    ];
    const footerTopMenusTwo = [
        {
            menuLink: "https://google.com",
            menuTxt: "Get Started",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Our Infrastructure",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Developer Grant Program",
        },
    ];
    const footerTopMenusThree = [
        {
            menuLink: "https://google.com",
            menuTxt: "About Us",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Whitepaper",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Careers",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "News",
        },
        {
            menuLink: "https://google.com",
            menuTxt: "Contact Us",
        },
    ];
    return(
        <footer className="footer">
           <Container>
            <Row className='justify-content-center footer-top'>
                <Col xl={5} lg={4} md={4}>
                    <div className="footer-left">
                        <a href="/" className='footer-logo'>
                            <img src={FooterLogo} alt="" />
                        </a>
                        <p>OxHAsh is a gaming ecosystem powered by OxHash Ethereum L2 scaling solution.</p>
                        <div className='social-logos'>
                            <h4>Join the community</h4>
                            <ul>
                                {socialLogos.map((item, index)=>(
                                    <li key={index}><a target='_blank' href={item.url}><img src={item.logo} alt="" /></a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={7} lg={8} md={8}>
                    <div className="footer-menu mt-4 mt-md-0">
                        <Row>
                            <Col xl={5} lg={5} md={4} sm={4}>
                                <div className="footer-menu-single-item">
                                    <h4>Ecosystem</h4>
                                    <ul>
                                        {footerTopMenusOne.map((item,index)=>(
                                            <li key={index}><a target='_blank' href="#">{item.menuTxt}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                            <Col xl={5} lg={5} md={4} sm={5}>
                                <div className="footer-menu-single-item">
                                    <h4>Build with Us</h4>
                                    <ul>
                                        {footerTopMenusTwo.map((item,index)=>(
                                            <li key={index}><a target='_blank' href="#">{item.menuTxt}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                            <Col xl={2} lg={2} md={4} sm={3}>
                                <div className="footer-menu-single-item">
                                    <h4>Menu</h4>
                                    <ul>
                                        {footerTopMenusThree.map((item,index)=>(
                                            <li key={index}><a target='_blank' href="#">{item.menuTxt}</a></li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
           </Container>
           <div className="footer-bottom">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} className='text-md-start text-center'>
                        <p>Copyright © 2023 verus. All rights reserved.</p>
                    </Col>
                    <Col md={6} className='text-center text-md-end mt-3 mt-md-0'>
                        <ul>
                            <li><a href="#">Terms of Services</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
           </div>
        </footer>
    )
}