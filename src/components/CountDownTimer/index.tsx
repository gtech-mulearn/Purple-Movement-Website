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
            <h2 className="text-2xl md:text-3xl text-center font-semibold tracking-wider">
                TIME UNTIL LAUNCH
            </h2>

            <div className="flex gap-2 md:gap-6 overflow-x-auto no-scrollbar px-4 max-w-full ">
                {[
                    { value: timeLeft.days, label: 'DAYS' },
                    { value: timeLeft.hours, label: 'HOURS' },
                    { value: timeLeft.minutes, label: 'MINUTES' },
                    { value: timeLeft.seconds, label: 'SECONDS' },

                ].map((item) => (
                    <Timer key={item.label} value={item.value} label={item.label} />
                ))}
            </div>
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
        <div key={label} className={`${styles.glassCard} relative overflow-visible`}>
            <div className={`${styles.dropAnimation}`}></div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                {value}
            </div>
            <div className="text-xs sm:text-sm md:text-base tracking-widest text-purple-200 font-medium">
                {label}
            </div>
        </div>
    )
}
