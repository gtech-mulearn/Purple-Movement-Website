
type TimerProps = {
    label: string;
    value: number;
};

const Timer = ({ value, label }: TimerProps) => {
    return (
        <div>
            <div>
                <div className="bg-[url('../src/assets/images/neon.png')] bg-contain bg-no-repeat   z-30 backdrop-blur-md rounded-lg size-[70px] md:size-[120px] flex flex-col items-center justify-center text-[25px] shadow-lg  md:text-[3rem] font-bold text-white">
                    {value < 10 ? `0${value}` : value}
                </div>
            </div>
            <div className="text-[8px] md:text-sm tracking-wides text-center text-purple-200 ">
                {label}
            </div>
        </div>
    );
}

export default Timer