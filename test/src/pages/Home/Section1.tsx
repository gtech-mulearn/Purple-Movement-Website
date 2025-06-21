import { useEffect, useState } from 'react';
import logo from "../../assets/images/logo_pm.png";
import Counter from '../../components/Counter';
import Timer from '../../components/Timer';

export const Section1 = ({ endDate }: { endDate: Date }) => {
    const calculateTimeLeft = () => {
        const difference = endDate.getTime() - new Date().getTime();
        let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

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
    // const [isFlipped, setIsFlipped] = useState(false);
    // const [isMarginIncreased, setIsMarginIncreased] = useState(false); // State for margin toggle

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, [endDate]);
    return (
        <div className="flex flex-col  my-16 justify-center  items-center px-4  w-full ">
            <img
                src={logo}
                alt="Purple Movement Logo"
                className=" drop-shadow-[5px_5px_25px_rgb(119,14,189)] h-12 md:h-20 object-contain"
            />
            <h2 className="font-Monteserrat md:mb-15 mb-16 text-[20px] md:text-[40px] text-center font-normal ">
                Time Until Launch
            </h2>
            <div className={`flex justify-center items-center  `}>
                <div className={`flex flex-col`}>
                    <div className="flex gap-1 md:gap-[50px] flex-wrap ">
                        {[
                            { value: timeLeft.days, label: "DAYS" },
                            { value: timeLeft.hours, label: "HOURS" },
                            { value: timeLeft.minutes, label: "MINUTES" },
                            { value: timeLeft.seconds, label: "SECONDS" },
                        ].map((item) => (
                            <Timer key={item.label} value={item.value} label={item.label} />
                        ))}
                    </div>

                    <div className="text-center"></div>
                </div>
            </div>

            {/* Counter */}
            <div className={`flex  justify-center mt-12 w-fit px-4 py-2  `}>
                <Counter />
            </div>
        </div>
    )
}
