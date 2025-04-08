import { useEffect, useState } from "react";
import styles from './style.module.css'
const CountDownTimer = ({ endDate }: { endDate: Date }) => {
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

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <div className="space-y-8 flex flex-col min-h-[25vh] justify-center items-center">
            <h2 className="text-2xl md:text-3xl text-center font-semibold tracking-wider py-5">
                TIME UNTIL LAUNCH
            </h2>

            <div className="flex  gap-2 md:gap-6 overflow-x-hidden no-scrollbar px-4 max-w-full ">
                {[
                    { value: timeLeft.days, label: 'DAYS' },
                    { value: timeLeft.hours, label: 'HOURS' },
                    { value: timeLeft.minutes, label: 'MINUTES' },
                    { value: timeLeft.seconds, label: 'SECONDS' },

                ].map((item) => (
                    <Timer key={item.label} value={item.value} label={item.label} />
                ))}
            </div>
            <div className="pt-10"> <button className="bg-purple-600 hover:bg-purple-700 transition  duration-300 ease-in-out  px-8 py-2 rounded-full text-lg font-semibold text-white shadow-lg shadow-purple-600/80 hover:shadow-purple-700/180">
                    Join the Movement →
                </button></div>
           
        </div>

    );
};

export default CountDownTimer;


type TimerProps = {
    label: string,
    value: number
}
const Timer = ({ value, label }: TimerProps) => {
    return (
        <div key={label} className={styles.glassCard}>
            <div className={`${styles.dropAnimation}`}></div>
            <div className=" lg:text-6xl font-extrabold text-white">
                {value}
            </div>
            <div className="text-[.4rem]   tracking-widest text-purple-200 font-medium">
                {label}
            </div>
        </div>
    )
}
