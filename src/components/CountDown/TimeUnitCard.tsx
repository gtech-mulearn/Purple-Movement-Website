import React from 'react';

interface TimeUnitCardProps {
    value: number;
    label: string;
    max: number;
    style?: React.CSSProperties;
}

const TimeUnitCard = ({ value, label, max, style }: TimeUnitCardProps) => {
    const heightPercent = (value / max) * 100;

    return (
        <div className="time-unit-card" style={style}>
            <div className="time-unit-value">
                <div className="time-unit-number">{value.toString().padStart(2, '0')}</div>
                <div className="time-unit-label">{label}</div>
            </div>
            <div className="time-unit-progress">
                <div 
                    className="time-unit-progress-bar"
                    style={{
                        height: `${heightPercent}%`,
                        background: `
                            linear-gradient(180deg, 
                            rgba(147, 51, 234, 0.9) 0%,
                            rgba(168, 85, 247, 0.8) 50%,
                            rgba(147, 51, 234, 0.7) 100%)
                        `,
                    }}
                />
            </div>
        </div>
    );
};

export default TimeUnitCard;
