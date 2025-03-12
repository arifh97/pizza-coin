import { useEffect, useState } from 'react';
import e_img_2 from '../assets/img/exchange-pepeto.png';
// import Ellipse from '../assets/img/Ellipse 209.png'

import coin from '../assets/img/piz-coin.png'

export default function bannerCard2({ className }) {
    const endDate = "2025-4-2 23:59:59";
    const calculateTimeLeft = () => {
        const difference = +new Date(endDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    // sol
    const [solAmount, setSolAmount] = useState(0.00);
    const [pepetoAmount, setPepetoAmount] = useState(0.00);
    const conversionRate = 67500; // 1 SOL = 1500000 PEPETO



    const handleSolChangeTwo = (e) => {
        const inputValue = e.target.value;

        if (inputValue == "") {
            e.target.type = "text"
            setSolAmountTwo("");
            setPepetoAmountTwo("")
            return;
        } else {
            e.target.type = "number"
        }
        let solTwo = parseFloat(e.target.value);
        if (isNaN(solTwo)) {
            solTwo = 0;
        } else {
            solTwo = parseFloat(solTwo.toFixed(2));
        }
        setSolAmountTwo(solTwo);
        setPepetoAmountTwo((solTwo * conversionRateTwo).toFixed(0));
    }
    const handlePepetoChangeTwo = (e) => {
        const pepetoTwo = parseFloat(e.target.value) || 0;
        setPepetoAmountTwo(pepetoTwo);
        setSolAmountTwo(pepetoTwo / conversionRateTwo);
    }


    const handleSolChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue == "") {
            e.target.type = "text"
            setSolAmount("");
            setPepetoAmount("")
            return;

        } else {
            e.target.type = "number"
        }
        let sol = parseFloat(inputValue);
        if (isNaN(sol)) {

            sol = 0;
        } else {
            sol = parseFloat(sol.toFixed(2));
        }
        setSolAmount(sol);
        setPepetoAmount((sol * conversionRate).toFixed(0));
    };

    const handlePepetoChange = (e) => {

        const inputValue = e.target.value;
        let pepeto = parseFloat(inputValue);
        if (inputValue == "") {
            e.target.type = "text"
            setSolAmount("");
            setPepetoAmount("")
            return;

        } else {
            e.target.type = "number"
        }
        if (isNaN(pepeto)) {
            pepeto = 0;
        } else {

            pepeto = parseFloat(pepeto.toFixed(0));
        }
        setPepetoAmount(pepeto);
        setSolAmount((pepeto / conversionRate).toFixed(2));
    };

    // usdt
    const [solAmountTwo, setSolAmountTwo] = useState(null);
    const [pepetoAmountTwo, setPepetoAmountTwo] = useState(null);
    const conversionRateTwo = 500; // 1 SOL = 10000 PEPETO
    const [isBuy, setIsBuy] = useState(false);
    const [tokenAddress, setTokenAddress] = useState('GVUE6se8FUnhcyF1Sg9mdKeTLeHBc18MEAKgHKw4Ucr9')
    const [copied, setCopied] = useState(false);
    const copyHandle = () => {
        navigator.clipboard.writeText(tokenAddress);
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

    const [isSol, setIsSol] = useState(true);
    const tabHandleChange = (e) => {
        setIsSol(!isSol);
        setSolAmount(0)
        setSolAmountTwo(0)
        setPepetoAmount(0)
        setPepetoAmountTwo(0)
        setTokenAddress(e);
    }

    const data = [
        {
            title: "Currently Staked",
            value: '$0 PEPIZ',
        },
        {
            title: "Average APY",
            value: '365 %',
        },
        {
            title: "Daily Rewards",
            value: '0 $PEPIZ',
        },
    ]

    return (
        <div className={`banner-card font-Helvetica flex-[0_0_auto] text-black w-full max-w-[513px] text-center py-4 md:py-7 px-4 md:px-8 rounded-3xl md:rounded-[32px] border-[1.5px] border-black bg-[#FFD331] backdrop-blur-[8px] ${className}`} data-aos="fade-left" data-aos-offset="" data-aos-delay="">
            <div className="banner-wrap text-black">
                <div>
                    <div className="grid grid-cols-3 gap-1 md:gap-3">
                        {data.map((item, index) => (
                            <div className="single text-center rounded-[12px] !border !border-black bg-[#FFD746] p-[8px_4px]" key={index}>
                                <p className='text-[#151513] text-xs md:text-sm !leading-[160%] tracking-[.56px] '>{item.title} </p>
                                <span className='text-base md:text-xl !leading-[1.4] tracking-[.4px]'>{item.value} </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full my-[20px] md:my-[16px] text-center p-[20px] md:p-[20px_24px] rounded-[24px] !border !border-[#D8B746] bg-[#FFD746] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]">
                        <h4 className='text-black text-lg font-Helvetica font-medium mb-0'>Total Rewards</h4>
                        <p className='text-[#353131] text-sm !leading-[160%] tracking-[.56px] mb-2 font-Helvetica'>(Available after launch)</p>
                        <img src={coin} className='mx-auto' alt="" />
                        <h4 className='text-black text-lg md:text-[22px] mt-[16px] mb-1 font-Helvetica font-medium'>0 $PEPIZ</h4>
                        <button className='btn !border-black !rounded-lg text-center !font-Helvetica !font-normal h-full !text-base !py-[12px] !bg-white text-black !w-full uppercase'>Claim</button>
                    </div>
                    <div className="">
                        <div className="exchange-wrap">
                            <div className="exchange-item ">
                                <h4 className='text-black text-lg font-medium font-Helvetica mb-3 text-center'>My Staking</h4>
                                <div className="banner-btn max-h-12 shadow-[0px_4px_8px_0px_#C6A52C] w-full flex flex-row-reverse justify-between">
                                    <div className="icon"><img src={e_img_2} alt="" /></div>
                                    <input onFocus={e => {

                                        if (e.target.value == "0") {
                                            e.target.type = "text"
                                            setPepetoAmount("")
                                        }
                                    }} onChange={handlePepetoChange} type="number" min="0.1" step="0.1" className='bg-transparent border-0 p-0' value={pepetoAmount} />
                                </div>
                                <div className="grid grid-cols-2 gap-[12px] my-[16px]">
                                    <div className="single">
                                        <button className='flex max-h-8 justify-between items-center w-full text-sm px-[13px] py-[11px] rounded-lg !border !border-[#AC9334] bg-[rgba(255,255,255,0.10)]'><span>Max can stake</span> <span>0</span></button>
                                    </div>
                                    <div className="single">
                                        <button className='flex max-h-8 justify-between items-center w-full text-sm px-[13px] py-[11px] rounded-lg !border !border-[#AC9334] bg-[rgba(255,255,255,0.10)]'><span>Max can stake</span> <span>0</span></button>
                                    </div>
                                </div>
                            </div>
                            <button className="btn !border-black !rounded-lg text-center my-3 md:my-3 mb-3 !font-Helvetica !font-normal h-full !text-base !py-3 md:!py-4 !bg-white text-black !w-full !capitalize">
                                Connect Wallet
                            </button>
                            <a href="https://phantom.com/" target="_blank" rel="noopener noreferrer" className='text-[#010000] text-lg font-medium !underline'>Don’t have a wallet ?</a>
                            <p className='font-medium !leading-[150%] mx-auto mt-1 flex items-center justify-center gap-1 text-black'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
