import { useEffect, useState } from 'react';
import TimeUnitCard from './TimeUnitCard';
import { Timer } from 'lucide-react';
import './countdown.css';

interface TimeUnit {
    value: number;
    label: string;
    max: number;
}

type CountdownTimerProps = {
    endTime: Date;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const end = endTime.getTime();
        const totalSeconds = Math.max(Math.floor((end - now) / 1000), 0);

        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endTime]);

    const timeUnits: TimeUnit[] = [
        { value: timeLeft.days, label: 'Days', max: 365 },
        { value: timeLeft.hours, label: 'Hours', max: 24 },
        { value: timeLeft.minutes, label: 'Minutes', max: 60 },
        { value: timeLeft.seconds, label: 'Seconds', max: 60 }
    ];

    return (
        <div className="countdown-container">
            <div className="countdown-header">
                <Timer size={40} className="timer-icon" />
                <h2 className="countdown-title">Countdown</h2>
            </div>
            <div className="countdown-grid">
                {timeUnits.map((unit, index) => (
                    <TimeUnitCard
                        key={unit.label}
                        value={unit.value}
                        label={unit.label}
                        max={unit.max}
                        style={{
                            animationDelay: `${index * 0.2}s`,
                            transform: `translateY(${Math.sin(index * Math.PI / 2) * 10}px)`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
