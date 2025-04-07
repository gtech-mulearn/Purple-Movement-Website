import React, { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

type CountdownTimerProps = {
    endTime: Date;
    onComplete?: () => void;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime, onComplete }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const end = endTime.getTime();
        const totalSeconds = Math.max(Math.floor((end - now) / 1000), 0);

        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { totalSeconds, days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        if (timeLeft.totalSeconds <= 0) {
            onComplete?.();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft.totalSeconds, endTime, onComplete]);

    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.value}>{timeLeft.days}</div>
                    <div className={styles.label}>Days</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>{timeLeft.hours}</div>
                    <div className={styles.label}>Hours</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>{timeLeft.minutes}</div>
                    <div className={styles.label}>Minutes</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.value}>{timeLeft.seconds}</div>
                    <div className={styles.label}>Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
