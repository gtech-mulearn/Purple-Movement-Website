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
            <div className={styles.title}>Let the countdown begin</div>
            <div className={styles.timerBoxes}>
                <div className={styles.timeBox}>
                    <div className={styles.timeValue}>{timeLeft.days}</div>
                    <div className={styles.timeLabel}>Days</div>
                </div>
                <div className={styles.timeBox}>
                    <div className={styles.timeValue}>{timeLeft.hours}</div>
                    <div className={styles.timeLabel}>Hours</div>
                </div>
                <div className={styles.timeBox}>
                    <div className={styles.timeValue}>{timeLeft.minutes}</div>
                    <div className={styles.timeLabel}>Minutes</div>
                </div>
                <div className={styles.timeBox}>
                    <div className={styles.timeValue}>{timeLeft.seconds}</div>
                    <div className={styles.timeLabel}>Seconds</div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
