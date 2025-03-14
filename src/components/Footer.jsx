import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/FooterLogo.png'
import MarqueeBottom from './MarqueeBottom';
import MarqueeTop from './MarqueeTop';
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/telegram.svg'
// import socialIcon3 from '../assets/img/socialIcon3.png'
// import socialIcon5 from '../assets/img/socialIcon5.png'
// import socialIcon6 from '../assets/img/socialIcon6.png'
// import socialIcon4 from '../assets/img/socialIcon4.svg'

export default function Footer() {
    const socials = [
        {
            icon: <img src={twitter} alt="Social Icon" />,
            url: "https://x.com/pizpepe",
        },
        {
            icon: <img src={telegram} alt="Social Icon" />,
            url: "https://t.me/pepepizzeria",
        },
        // {
        //   icon:<img src={socialIcon3} alt="Social Icon" />,
        //   url: "https://raydium.io/swap/?inputMint=sol&outputMint=4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY",
        // },
        // {
        //   icon:<img src={socialIcon4} alt="Social Icon" />,
        //   url: "https://dexscreener.com/solana/h2ncmtgzebhgjvzcnuxmxpncdxt64qp3mxlygaztcl3j",
        // },
        // {
        //   icon:<img src={socialIcon5} alt="Social Icon" />,
        //   url: "https://jup.ag/swap/4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY-SOL",
        // },
        // {
        //   icon:<img src={socialIcon6} alt="Social Icon" />,
        //   url: "https://www.dextools.io/app/en/solana/pair-explorer/H2NCMtgzeBhGjvZCnuXmxpncDxT64qP3MXLygaZtCL3j?t=1717760125430",
        // },
    ];
    return (
        <footer className="footer">
            <MarqueeTop />
            <Container>
                <Row>
                    <Col>
                        <div className="footer-content text-center">
                            <a href="/" className='footer-logo'>
                                <img src={FooterLogo} className='mx-auto' alt="" />
                            </a>
                            <h3>pepe pizzeria </h3>
                            <div className='social-logos mb-3 mt-3'>
                                <h4 className='pb-2'>Follow us</h4>
                                <ul className="socials d-inline-flex flex-wrap justify-content-center gap-3 align-items-center">
                                    {socials.map((item, index) => (
                                        <li key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
                                    ))}
                                </ul>
                            </div>
                            {/* <p className='copyright'>Copyright: © {currentYear} Pizzeria. All Rights Reserved.</p> */}
                            <span>Pepe Pizzeria</span>
                            <p>Always conduct your own research when evaluating the best cryptocurrencies to buy, upcoming ICOs, or new tokens. This is not financial advice. This meme coin, powered by Pepe Pizzeria and built on the Solana blockchain, offers the potential for high rewards. However, it's important to understand that such investments are highly speculative and can lead to total loss. Embrace the future of crypto with caution, but with the right research, the opportunities are endles</p>

                            <div className="gtranslate_wrapper  gtranslate_wrapper_modile"></div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <MarqueeBottom />
        </footer>
    )
}