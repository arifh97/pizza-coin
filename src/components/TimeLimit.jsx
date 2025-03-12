

import { useEffect, useState } from 'react'

export default function TimeLimit({ className = "", date = "2024-12-29T23:59:59" }) {
    const endDate = new Date("2025-03-13T23:59:59");

    const calculateTimeLeft = () => {
        const difference = endDate - new Date();
        if (difference > 0) {
            return {
                days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
                hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
                minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
                seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
            };
        } else {
            return null; // Time has ended
        }
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            const updatedTimeLeft = calculateTimeLeft();
            setTimeLeft(updatedTimeLeft);
            if (!updatedTimeLeft) clearInterval(timer); // Stop the timer if time is up
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        return <div className="text-white text-center">Offer time ended</div>;
    }


    return (
        <div className={`${className} flex items-center justify-between w-full px-[30px] py-5 min-h-[100px] md:min-h-[138px] rounded-[20px] h-5 bg-[linear-gradient(92deg,#AE194E_1.67%,#5938C7_104.12%)] shadow-[3px_3px_0px_0px_#FFF]`}>
            {Object.entries(timeLeft).map(([unit, value], index) => (
                <div key={index} className='flex flex-col gap-9 md:gap-12'>
                    <p className='text-white text-lg !leading-[0%] capitalize'>{unit}</p>
                    <span className='text-[40px] md:text-[44px] text-white !leading-[0%]'>{value}</span>
                </div>
            ))}
        </div>
    )
}
