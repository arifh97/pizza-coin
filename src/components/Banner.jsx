
import React, { useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import heroBg from '../assets/img/heroBG.jpg'
import socialIcon3 from '../assets/img/socialIcon3.png'
import socialIcon4 from '../assets/img/socialIcon4.svg'
import Social from './Social';
import twitter from '../assets/img/twitter.svg'
import telegram from '../assets/img/telegram.svg'

import TimeLimit from './TimeLimit'
import solana from '../assets/img/solona.png'
import usdc from '../assets/img/usdc.png'
import pizzaIcon from '../assets/img/Pizza-icon.png'

export default function Banner() {
    const socials = [
        // {
        //   icon:<img src={twitter} alt="Social Icon" />,
        //   url: "https://x.com/pizpepe",
        // },
        // {
        //   icon:<img src={telegram} alt="Social Icon" />,
        //   url: "https://t.me/+-uqniTrsSvc5ODZh",
        // },
        {
            icon: <img src={socialIcon3} alt="Social Icon" />,
            url: "https://www.dextools.io/app/en/solana/pair-explorer/H2NCMtgzeBhGjvZCnuXmxpncDxT64qP3MXLygaZtCL3j?t=1717760125430",
        },
        {
            icon: <img src={socialIcon4} alt="Social Icon" />,
            url: "https://dexscreener.com/solana/h2ncmtgzebhgjvzcnuxmxpncdxt64qp3mxlygaztcl3j",
        },
    ];
    const socialsbanner = [
        {
            icon: <img src={twitter} alt="Social Icon" />,
            url: "https://x.com/pizpepe",
        },
        {
            icon: <img src={telegram} alt="Social Icon" />,
            url: "https://t.me/+-uqniTrsSvc5ODZh",
        },
    ];

    const btns = [
        {
            logo: solana,
            name: 'solana',
            des: 'Chain SOL',
            value: 0.166
        },
        {
            logo: usdc,
            name: 'usdc',
            des: 'Chain SOL',
            value: 0.000000092
        },
    ]
    const [selectBtn, setSelectBtn] = useState(btns[1]);
    const tokenHandle = (e) => {
        setSelectBtn(e)
        setToken(0);
    }
    const [token, setToken] = useState(0)

    return (
        <div className="banner">
            <div className="banner-social position-absolute d-flex align-items-end justify-content-center"><Social /></div>
            <figure className='heroBg'>
                <img src="" alt="" />
                <img src={heroBg} alt="" />
            </figure>
            <Container>
                <Row className='justify-content-center justify-content-lg-start'>
                    <Col lg={8} md={10}>
                        <div className="banner-content text-center text-lg-start">
                            <h1> <span>Pepe</span> Pizzeria</h1>
                            <p className='des'>Join us and become a part of Pepe Restaurante.</p>

                            <div className="banner-card text-black font-Helvetica max-w-[513px] text-center py-7 px-8 rounded-[32px] border-[1.5px] border-black bg-[#FFD331] backdrop-blur-[8px]">
                                <p className='text-white text-center text-[32px] font-black tracking-[0.64px] text-stroke'>PEPIZ Presale is live</p>
                                <TimeLimit />
                                <p className='text-sm font-Helvetica text-black my-4 font-normal'>$PEPIZ Raised: <span className='text-lg font-black'>$1,474,661</span></p>
                                <div className="line relative z-[1] w-full h-6 rounded-3xl overflow-hidden bg-black">
                                    <div className="absolute top-1/2 left-1 -translate-y-1/2 w-[50%] h-4 rounded-3xl z-[1] bg-[#CECC26]" ></div>
                                </div>
                                <div className="flex items-center mt-4 xl:mt-5 justify-center gap-2 xl:gap-[10px] ">
                                    <p className='text-sm uppercase text-black font-Helvetica'>Your purchased $pepiz</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_7600_9435)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499512 8.27385C0.499512 4.03967 3.932 0.607178 8.16618 0.607178C12.4003 0.607178 15.8328 4.03967 15.8328 8.27385C15.8328 12.508 12.4003 15.9405 8.16618 15.9405C3.932 15.9405 0.499512 12.508 0.499512 8.27385ZM8.16618 2.60718C5.03657 2.60718 2.49952 5.14424 2.49952 8.27385C2.49952 11.4034 5.03657 13.9405 8.16618 13.9405C11.2958 13.9405 13.8328 11.4034 13.8328 8.27385C13.8328 5.14424 11.2958 2.60718 8.16618 2.60718ZM8.16618 7.27385C8.71847 7.27385 9.16618 7.72156 9.16618 8.27385V10.9405C9.16618 11.4928 8.71847 11.9405 8.16618 11.9405C7.6139 11.9405 7.16618 11.4928 7.16618 10.9405V8.27385C7.16618 7.72156 7.6139 7.27385 8.16618 7.27385ZM8.16618 6.27385C8.53437 6.27385 8.83285 5.97537 8.83285 5.60718C8.83285 5.23899 8.53437 4.94051 8.16618 4.94051C7.79799 4.94051 7.49951 5.23899 7.49951 5.60718C7.49951 5.97537 7.79799 6.27385 8.16618 6.27385Z" fill="#6F5F24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7600_9435">
                                                <rect width="16" height="16" fill="white" transform="translate(0.166016 0.27124)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="flex items-center mt-4 xl:mt-5 justify-center gap-2 xl:gap-[10px] ">
                                    <p className='text-sm uppercase  text-black font-Helvetica'>your stakeable $pepiz</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                        <g clip-path="url(#clip0_7600_9435)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.499512 8.27385C0.499512 4.03967 3.932 0.607178 8.16618 0.607178C12.4003 0.607178 15.8328 4.03967 15.8328 8.27385C15.8328 12.508 12.4003 15.9405 8.16618 15.9405C3.932 15.9405 0.499512 12.508 0.499512 8.27385ZM8.16618 2.60718C5.03657 2.60718 2.49952 5.14424 2.49952 8.27385C2.49952 11.4034 5.03657 13.9405 8.16618 13.9405C11.2958 13.9405 13.8328 11.4034 13.8328 8.27385C13.8328 5.14424 11.2958 2.60718 8.16618 2.60718ZM8.16618 7.27385C8.71847 7.27385 9.16618 7.72156 9.16618 8.27385V10.9405C9.16618 11.4928 8.71847 11.9405 8.16618 11.9405C7.6139 11.9405 7.16618 11.4928 7.16618 10.9405V8.27385C7.16618 7.72156 7.6139 7.27385 8.16618 7.27385ZM8.16618 6.27385C8.53437 6.27385 8.83285 5.97537 8.83285 5.60718C8.83285 5.23899 8.53437 4.94051 8.16618 4.94051C7.79799 4.94051 7.49951 5.23899 7.49951 5.60718C7.49951 5.97537 7.79799 6.27385 8.16618 6.27385Z" fill="#6F5F24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_7600_9435">
                                                <rect width="16" height="16" fill="white" transform="translate(0.166016 0.27124)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="my-6 max-w-max flex justify-between  mx-auto relative z-[1]">
                                    <div className="absolute top-1/2 -translate-y-1/2 left-full ml-2 w-[50px] md:w-[142px] h-[1px] bg-[#AC9334]"></div>
                                    <div className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-[50px] md:w-[142px] h-[1px] bg-[#AC9334]"></div>
                                    <p className='text-base lg:text-lg text-center font-medium !leading-[150%]  font-Helvetica inline-block'>1$PEPIZ = $0.369258</p>
                                </div>
                                <div className="grid grid-cols-2 w-full gap-[10px]">
                                    {btns.map((item, index) => (
                                        <button onClick={() => tokenHandle(item)} className={`banner-btn h-[49px] !py-2 text-start gap-2 ${item.name === selectBtn.name ? '!shadow-none' : ''}`} key={index}>
                                            <img src={item.logo} className='size-7' alt="" />
                                            <div className="text-base text-[#151515]">
                                                <span className='uppercase block !leading-normal -mb-2'>{item.name}</span>
                                                <span className='text-xs'>{item.des}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="grid grid-cols-2 gap-3 md:gap-[35px] mt-6 md:mt-[35px]">
                                    <div className="single">
                                        <div className="flex justify-between mb-4">
                                            <p className='text-sm lg:text-base font-medium !leading-normal -mb-4'>Pay with {selectBtn.name}</p>
                                        </div>
                                        <div className="banner-btn h-[53px] !flex items-center justify-between !pr-3">
                                            <input type='number' onFocus={() => setToken('')} onChange={(e) => setToken(e.target.value)} className='text-base text-black placeholder:text-black w-20 !p-0 bg-transparent' placeholder='0' value={token} />
                                            <img src={selectBtn.logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="single">
                                        <div className="flex justify-between mb-4">
                                            <p className='text-sm lg:text-base font-medium !leading-normal -mb-4'>Receive $PEPIZ</p>
                                        </div>
                                        <div className="banner-btn h-[53px] !flex items-center justify-between !py-1">
                                            <div className="">
                                                <img src={pizzaIcon} alt="" />
                                            </div>
                                            <span className='text-base text-black'>
                                                {(selectBtn.value * token).toFixed(0)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <button className="btn text-center h-full !text-base !py-4 !bg-white text-black w-full">
                                    Connect Wallet
                                </button>
                                <p className='text-base lg:text-lg font-medium !leading-[150%] text-white max-w-[294px] mx-auto mt-4'>You do not have enough SOL to pay for this transaction.</p>
                            </div>

                            {/* <div className='d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap gap-4'>
                                <div className='d-flex justify-content-center justify-content-lg-start align-items-center flex-wrap gap-3 w-100 w-md-none'>
                                    <a href="https://raydium.io/swap/?inputMint=sol&outputMint=4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY" target='_blank' className="btn bg-gradient d-inline-flex align-items-center gap-2">
                                        <img src={raydium} alt="" /> <span>Buy now</span>
                                    </a>
                                    <a href="https://jup.ag/swap/4kLRpxuNPzViyhW3cKm5D9c4g2AKzVe2dtLi5cfUPvrY-SOL" target='_blank' className="btn d-inline-flex align-items-center gap-2">
                                        <img src={jup} alt="" /> <span>Buy now</span>
                                    </a>
                                </div>

                                <ul className="socials d-flex align-items-center p-0 border-0 mb-5 mb-md-0">
                                    {socials.map((item, index) => (
                                        <li key={index}> <a href={item.url} target='_blank' className='d-flex align-items-center justify-content-center'>{item.icon}</a></li>
                                    ))}
                                    <div className='responsiveSocial'>
                                        <ul className="socials d-flex align-items-center flex-wrap">
                                            {socialsbanner.map((item, index) => (
                                                <li key={index}> <a href={item.url} target='_blank'>{item.icon}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                </ul>
                            </div> */}
                            {/* <CopyToClipboard /> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
