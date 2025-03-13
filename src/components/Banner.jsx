import React, { useState } from 'react'

import { Col, Container, Row } from 'react-bootstrap'
import heroBg from '../assets/img/heroBG.jpg'
import BannerCard2 from './bannerCard2'

import TimeLimit from './TimeLimit'
import solana from '../assets/img/solona.png'
import usdc from '../assets/img/usdc.png'
import pizzaIcon from '../assets/img/Pizza-icon.png'

export default function Banner() {
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
            value: 0.05
        },
    ]
    const [selectBtn, setSelectBtn] = useState(btns[0]);
    const tokenHandle = (e) => {
        setSelectBtn(e)
    }
    const [token, setToken] = useState(0);
    const tabBtn = [
        {
            name: 'buy',
            value: '',
        },
        {
            name: 'stake',
            value: '',
        },
    ]
    const [d_tab_btn, set_d_tab_btn] = useState(tabBtn[0]);


    return (
        <div className="banner">
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
                            <div className="flex flex-col lg:flex-row items-center gap-6">
                                {d_tab_btn.name === 'buy' &&
                                    <div  data-aos="fade-left" data-aos-offset="" data-aos-delay="" className="banner-card flex-[0_0_auto] text-black font-Helvetica w-full max-w-[513px] text-center py-4 md:py-7 px-4 md:px-8 rounded-3xl md:rounded-[32px] border-[1.5px] border-black bg-[#FFD331] backdrop-blur-[8px]">
                                        <p className='text-white text-center text-2xl md:text-3xl xl:text-[32px] font-black tracking-[0.64px] text-stroke mb-2 md:mb-4'>PEPIZ Presale is live</p>
                                        <TimeLimit />
                                        <p className='text-sm font-Helvetica text-black my-2 md:my-4 mt-1 md:mt-3 font-normal'>$PEPIZ Raised: <span className='text-lg font-black'>$1,474,661</span></p>
                                        <div className="line relative z-[1] w-full h-6 rounded-3xl overflow-hidden bg-black">
                                            <div className="absolute top-1/2 left-1 -translate-y-1/2 w-[50%] h-4 rounded-3xl z-[1] bg-[#CECC26]" ></div>
                                        </div>
                                        <div className="my-3 md:my-4">
                                            <div className="flex items-center justify-center gap-2 xl:gap-[10px] ">
                                                <p className='text-sm uppercase text-black font-Helvetica'>Your purchased $pepiz</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <g clipPath="url(#clip0_7600_9435)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.499512 8.27385C0.499512 4.03967 3.932 0.607178 8.16618 0.607178C12.4003 0.607178 15.8328 4.03967 15.8328 8.27385C15.8328 12.508 12.4003 15.9405 8.16618 15.9405C3.932 15.9405 0.499512 12.508 0.499512 8.27385ZM8.16618 2.60718C5.03657 2.60718 2.49952 5.14424 2.49952 8.27385C2.49952 11.4034 5.03657 13.9405 8.16618 13.9405C11.2958 13.9405 13.8328 11.4034 13.8328 8.27385C13.8328 5.14424 11.2958 2.60718 8.16618 2.60718ZM8.16618 7.27385C8.71847 7.27385 9.16618 7.72156 9.16618 8.27385V10.9405C9.16618 11.4928 8.71847 11.9405 8.16618 11.9405C7.6139 11.9405 7.16618 11.4928 7.16618 10.9405V8.27385C7.16618 7.72156 7.6139 7.27385 8.16618 7.27385ZM8.16618 6.27385C8.53437 6.27385 8.83285 5.97537 8.83285 5.60718C8.83285 5.23899 8.53437 4.94051 8.16618 4.94051C7.79799 4.94051 7.49951 5.23899 7.49951 5.60718C7.49951 5.97537 7.79799 6.27385 8.16618 6.27385Z" fill="#6F5F24" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_7600_9435">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.166016 0.27124)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <div className="flex items-center mt-2 md:mt-3 justify-center gap-2 xl:gap-[10px] ">
                                                <p className='text-sm uppercase  text-black font-Helvetica'>your stakeable $pepiz</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <g clipPath="url(#clip0_7600_9435)">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.499512 8.27385C0.499512 4.03967 3.932 0.607178 8.16618 0.607178C12.4003 0.607178 15.8328 4.03967 15.8328 8.27385C15.8328 12.508 12.4003 15.9405 8.16618 15.9405C3.932 15.9405 0.499512 12.508 0.499512 8.27385ZM8.16618 2.60718C5.03657 2.60718 2.49952 5.14424 2.49952 8.27385C2.49952 11.4034 5.03657 13.9405 8.16618 13.9405C11.2958 13.9405 13.8328 11.4034 13.8328 8.27385C13.8328 5.14424 11.2958 2.60718 8.16618 2.60718ZM8.16618 7.27385C8.71847 7.27385 9.16618 7.72156 9.16618 8.27385V10.9405C9.16618 11.4928 8.71847 11.9405 8.16618 11.9405C7.6139 11.9405 7.16618 11.4928 7.16618 10.9405V8.27385C7.16618 7.72156 7.6139 7.27385 8.16618 7.27385ZM8.16618 6.27385C8.53437 6.27385 8.83285 5.97537 8.83285 5.60718C8.83285 5.23899 8.53437 4.94051 8.16618 4.94051C7.79799 4.94051 7.49951 5.23899 7.49951 5.60718C7.49951 5.97537 7.79799 6.27385 8.16618 6.27385Z" fill="#6F5F24" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_7600_9435">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.166016 0.27124)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 w-full gap-[10px]">
                                            {btns.map((item, index) => (
                                                <button onClick={() => tokenHandle(item)} className={`banner-btn h-[49px] !py-2 text-start gap-2 ${item.name === selectBtn.name ? 'shadow-[0px_4px_8px_0px_#C6A52C;]' : ''}`} key={index}>
                                                    <img src={item.logo} className='size-7' alt="" />
                                                    <div className="text-base text-[#151515]">
                                                        <span className='uppercase block !leading-normal -mb-2'>{item.name}</span>
                                                        <span className='text-xs'>{item.des}</span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="max-w-max flex justify-between mt-3 md:mt-[14px] mb-2 md:mb-3 mx-auto relative z-[1]">
                                            <div className="absolute top-1/2 -translate-y-1/2 left-full ml-2 w-[50px] md:w-[142px] h-[1px] bg-[#AC9334]"></div>
                                            <div className="absolute top-1/2 -translate-y-1/2 right-full mr-2 w-[50px] md:w-[142px] h-[1px] bg-[#AC9334]"></div>
                                            <p className='text-sm text-center font-medium !leading-[150%]  font-Helvetica inline-block'>1$PEPIZ = $0.369258</p>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2 md:gap-[10px]">
                                            <div className="single">
                                                <div className="flex justify-between mb-4">
                                                    <p className='text-sm lg:text-base font-normal !leading-normal -mb-4'>Pay with <span className='uppercase'>{selectBtn.name}</span></p>
                                                </div>
                                                <div className="banner-btn !pl-[13px] h-[53px] !flex items-center justify-between !pr-3">
                                                    <input type='number' onFocus={() => setToken('')} onChange={(e) => setToken(e.target.value)} className='text-base text-black placeholder:text-black w-20 !p-0 bg-transparent' placeholder='0' value={token} />
                                                    <img src={selectBtn.logo} alt="" />
                                                </div>
                                            </div>
                                            <div className="single">
                                                <div className="flex justify-between mb-4">
                                                    <p className='text-sm lg:text-base font-normal !leading-normal -mb-4'>Receive $PEPIZ</p>
                                                </div>
                                                <div className="banner-btn !pl-[13px] h-[53px] !flex items-center justify-between !py-1">
                                                    <div className="">
                                                        <img src={pizzaIcon} alt="" />
                                                    </div>
                                                    <span className='text-base text-black'>
                                                        {(selectBtn.value * token).toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn !border-black !rounded-lg text-center my-3 md:my-4 mb-3 !font-Helvetica !font-normal h-full !text-base !py-3 md:!py-4 !bg-white text-black !w-full !capitalize">
                                            Connect Wallet
                                        </button>
                                        <a href="https://phantom.com/" target="_blank" rel="noopener noreferrer" className='text-[#010000] text-lg font-medium !underline'>Don’t have a wallet ?</a>
                                        <p className='text- font-medium !leading-[150%] mx-auto mt-1 flex items-center justify-center gap-1 text-black'>
                                            <span>Powered by</span>
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                    <g clipPath="url(#clip0_7600_9492)">
                                                        <circle cx="8.16602" cy="8.27124" r="8" fill="#A7A7F0" />
                                                        <g filter="url(#filter0_d_7600_9492)">
                                                            <path d="M10.9361 5.19667C10.5987 5.13786 10.2613 5.06047 9.93316 4.96451C9.41932 4.81284 8.91787 4.61163 8.44122 4.3671C8.35145 4.32067 8.24621 4.32067 8.15644 4.3671C7.67975 4.61164 7.17829 4.81284 6.6645 4.96451C6.33639 5.06047 5.99898 5.13785 5.66158 5.19667C5.21584 5.27096 4.89392 5.65479 4.89392 6.10982V9.11233C4.89392 9.89857 5.23132 10.6538 5.81636 11.1831L7.67668 12.8577C7.85621 13.0156 8.07598 13.0961 8.29885 13.0961C8.52172 13.0961 8.7415 13.0156 8.92103 12.8577L10.7813 11.1831C11.3664 10.6538 11.7038 9.89852 11.7038 9.11233V6.10982C11.7038 5.65479 11.3818 5.27096 10.9361 5.19667ZM10.0663 7.64824L8.20902 9.50549C8.14711 9.56431 8.06973 9.59526 7.98924 9.59526C7.90875 9.59526 7.83137 9.56431 7.76946 9.50549L6.84084 8.57687C6.72011 8.45614 6.72011 8.25804 6.84084 8.13732C6.96156 8.0166 7.15967 8.01659 7.28039 8.13732L7.98923 8.84927L9.62668 7.20874C9.74741 7.08802 9.94552 7.08802 10.0662 7.20874C10.1869 7.32947 10.187 7.52753 10.0663 7.64824Z" fill="#C7F8FE" />
                                                        </g>
                                                        <circle cx="8.50945" cy="8.6419" r="2.42681" fill="#C7F8FE" />
                                                        <path d="M9.25721 4.16358C9.32519 4.70901 9.28176 5.26256 9.12953 5.7907C8.9773 6.31884 8.71945 6.81059 8.3716 7.23615C8.02374 7.66172 7.59312 8.01224 7.10581 8.26649C6.61851 8.52075 6.08467 8.67344 5.53662 8.71531L5.44074 7.46049C5.81896 7.43159 6.18737 7.32622 6.52367 7.15075C6.85997 6.97529 7.15715 6.73338 7.39721 6.43969C7.63728 6.146 7.81523 5.80664 7.92028 5.44216C8.02534 5.07767 8.05531 4.69566 8.00839 4.31925L9.25721 4.16358Z" fill="#A3A6EF" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_d_7600_9492" x="2.22725" y="2.99894" width="12.1431" height="14.0972" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                            <feOffset dy="1.33333" />
                                                            <feGaussianBlur stdDeviation="1.33333" />
                                                            <feComposite in2="hardAlpha" operator="out" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.482353 0 0 0 0 0.843137 0 0 0 0.7 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7600_9492" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7600_9492" result="shape" />
                                                        </filter>
                                                        <clipPath id="clip0_7600_9492">
                                                            <rect width="16" height="16" fill="white" transform="translate(0.166016 0.27124)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <span>Presaleshild </span>
                                        </p>
                                    </div>
                                }
                                {d_tab_btn.name === 'stake' &&
                                    <BannerCard2 className="" />
                                }
                                <div className="flex flex-col w-full items-center lg:items-start gap-3 md:gap-[17px]">
                                    {tabBtn.map((item, index) => (
                                        <button onClick={() => { set_d_tab_btn(item) }} key={index} className={`btn !w-full md:!w-[162px] !border-black !rounded-lg text-center !font-Helvetica !font-normal h-full !text-base !py-3 md:!py-4 !bg-white text-black !uppercase ${item.name === d_tab_btn.name ? 'shadow-none' : ''}`}>{item.name}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
