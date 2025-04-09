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

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className={styles.flipCardWrapper}>
            <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ''}`}>
                {/* FRONT SIDE */}
                <div className={`${styles.flipCard} ${styles.front}`}>
                    <h2 className="text-2xl md:text-3xl text-center font-semibold tracking-wider py-5">
                        TIME UNTIL LAUNCH
                    </h2>

                    <div className="flex gap-2 md:gap-6 overflow-x-hidden no-scrollbar px-4 max-w-full ">
                        {[
                            { value: timeLeft.days, label: 'DAYS' },
                            { value: timeLeft.hours, label: 'HOURS' },
                            { value: timeLeft.minutes, label: 'MINUTES' },
                            { value: timeLeft.seconds, label: 'SECONDS' },
                        ].map((item) => (
                            <Timer key={item.label} value={item.value} label={item.label} />
                        ))}
                    </div>

                    <div className="pt-10">
                        <button
                            className="bg-purple-600 hover:bg-purple-700 transition duration-300 ease-in-out px-8 py-2 rounded-full text-lg font-semibold text-white shadow-lg shadow-purple-600/80 hover:shadow-purple-700/180"
                            onClick={() => setIsFlipped(true)}
                        >
                            Join the Movement →
                        </button>
                    </div>
                </div>

                {/* BACK SIDE - REGISTER FORM */}
                <div className={`${styles.flipCard} ${styles.back}`}>
                    <h2 className="text-xl font-semibold mb-4">Register Now </h2>
                    <form className="flex flex-col gap-4 w-full max-w-md">
                        <input type="text" placeholder="Name" className="p-2 rounded bg-white/10 text-white placeholder-white/70" />
                        <input type="number" placeholder="Phone" className="p-2 rounded bg-white/10 text-white placeholder-white/70" />
                        <input type="text" placeholder="Collage" className="p-2 rounded bg-white/10 text-white placeholder-white/70" />
                        <input type="text" placeholder="Contribution" className="p-2 rounded bg-white/10 text-white placeholder-white/70" />
                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-700 transition px-8 py-2 rounded-full text-lg font-semibold text-white"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            className="text-sm text-purple-400 mt-2 hover:underline"
                            onClick={() => setIsFlipped(false)}
                        >
                            ← Back to Countdown
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
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
