import { useEffect, useState } from 'react';
import e_img_2 from '../assets/img/exchange-pepeto.png';
import Ellipse from '../assets/img/Ellipse 209.png'

import rusboy from '../assets/img/rusboy.png'

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
            value: '0 $RUSBOY',
        },
        {
            title: "Average APY",
            value: '380%',
        },
        {
            title: "Daily Rewards",
            value: '0 $RUSBOY',
        },
    ]

    return (
        <div className={`presale-box  max-w-[519px] w-full ${className}`} data-aos="fade-left" data-aos-offset="" data-aos-delay="">
            <div className="banner-wrap text-[#0C0B0B]">
                <div>
                    <div className="grid grid-cols-3 gap-1 md:gap-3">
                        {data.map((item, index) => (
                            <div className="single text-center rounded-[12px] border border-[#9A9A9A] bg-white p-[16px_0px] md:p-[20px_4px]" key={index}>
                                <p className='text-[#726D6D] text-xs md:text-sm !leading-[160%] tracking-[.56px] mb-2'>{item.title} </p>
                                <span className='text-base md:text-xl !leading-[1.4] tracking-[.4px]'>{item.value} </span>
                            </div>
                        ))}
                    </div>
                    <div className="w-full my-[20px] md:my-[24px] text-center p-[20px] md:p-6 rounded-[24px] bg-white shadow-[0px_4px_24px_0px_rgba(0,0,0,0.08)]">
                        <h4 className='text-[#0C0B0B] text-xl md:text-2xl'>Total Rewards</h4>
                        <p className='text-[#726D6D] text-sm !leading-[160%] tracking-[.56px] mb-2'>Available after launch</p>
                        <img src={rusboy} className='mx-auto' alt="" />
                        <h4 className='text-[#0C0B0B] text-xl md:text-2xl mt-[16px]'>0 $RUSBOY</h4>
                        <button className='btn w-full !bg-white uppercase mt-4'>Claim</button>
                    </div>
                    <div className="">
                        <div className="exchange-wrap">
                            <div className="exchange-item mb-[12px]">
                                <h4 className='text-[#0C0B0B] text-xl md:text-2xl mb-4 text-center'>My Staking</h4>
                                <div className="exchange-input border rounded-pill d-flex align-items-center justify-content-between">
                                    <div className="icon"><img src={e_img_2} alt="" /></div>
                                    <input onFocus={e => {

                                        if (e.target.value == "0") {
                                            e.target.type = "text"
                                            setPepetoAmount("")
                                        }
                                    }} onChange={handlePepetoChange} type="number" min="0.1" step="0.1" className='bg-transparent border-0 p-0 text-end' value={pepetoAmount} />
                                </div>
                                <div className="grid grid-cols-2 gap-[12px] my-[24px]">
                                    <div className="single">
                                        <button className='btn flex justify-between items-center w-full !bg-white box-shadow-none !text-sm !text-[#726D6D] !py-2'><span>Max can stake</span> <span>0</span></button>
                                    </div>
                                    <div className="single">
                                        <button className='btn flex justify-between items-center w-full !bg-white box-shadow-none !text-sm !text-[#726D6D] !py-2'><span>Max can stake</span> <span>0</span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <button className="btn w-100 border border-black">Connect Wallet</button>
                            </div>
                            <div className="mt-4 text-sm flex justify-between items-center gap-1 w-full">
                                <a href="#" target="_blank" className='!underline' rel="noopener noreferrer">Don’t have a Wallet?</a>
                                <div className="flex text-xs items-center gap-1">
                                    <p className=''>Powered by</p>
                                    <img src={Ellipse} alt="" />
                                    <p className=''>Presaleshild</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
