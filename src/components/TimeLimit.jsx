import React, { useEffect, useState } from 'react'

export default function TimeLimit() {
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
        <div className='flex items-center scale-[.8] md:scale-100 -ml-2 justify-center w-full  min-h-[73px] rounded-[20px] h-5'>
            {Object.keys(timeLeft).map((interval, index) => (
                <div key={index} className="time-box text-center flex flex-col gap-3">
                    <div className="text-black text-sm font-medium !leading-[0%] capitalize">{interval}</div>
                    <div className="flex items-center text-center gap-[3px]">
                        <span className={`block mx-1 ${index == 0 ? 'opacity-0 invisible' : null}`}>:</span>
                        {timeLeft[interval]?.toString().split("").map((item, i) => (
                            <div key={i} className="text-xl w-[42px] h-11 flex items-center justify-center text-black rounded-[11px] border-[1.066px] border-black bg-[#F3F3F3] shadow-[2px_2px_4px_0px_#B39A3F] !leading-[0%]">{item === "0" ? "0" : item}</div>
                        ))}
                    </div>
                </div>
            ))
            }
        </div>
    )
}
