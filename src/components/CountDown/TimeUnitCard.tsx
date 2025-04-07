interface TimeUnitCardProps {
    value: number;
    label: string;
    max: number;
}

const TimeUnitCard = ({ value, label, max }: TimeUnitCardProps) => {
    const heightPercent = (value / max) * 100;

    return (
        <div className="flex flex-col items-center">
            <div className="text-lg text-white mb-2">{label}</div>
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 rounded-full border-4 border-purple-100 overflow-hidden">
                    <div
                        className="absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-1000 ease-in-out"
                        style={{
                            height: `${heightPercent}%`,
                            background: `
                                linear-gradient(180deg, 
                                rgba(147, 51, 234, 0.9) 0%,
                                rgba(168, 85, 247, 0.8) 50%,
                                rgba(147, 51, 234, 0.7) 100%)
                            `,
                            boxShadow: '0 -4px 8px rgba(147, 51, 234, 0.3)',
                        }}
                    />
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)'
                        }}
                    >
                        <span className="text-3xl font-bold text-white drop-shadow-lg">
                            {value.toString().padStart(2, '0')}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeUnitCard;
