
type TimerProps = {
    label: string;
    value: number;
};

const Timer = ({ value, label }: TimerProps) => {
    return (
        <div className=" flex flex-col items-center justify-center gap-1 sm:gap-3">
            <div className="
                bg-[url('../src/assets/images/neon.png')] bg-contain bg-no-repeat  
                backdrop-blur-md rounded-lg size-[40px] xs:size-[65px] sm:size-[120px] 
                flex flex-col items-center justify-center text-sm xs:text-[25px] shadow-lg  sm:text-[3rem] font-bold text-white
                font-Roboto
                ">
                {value < 10 ? `0${value}` : value}
            </div>
            <div className="text-[5px] xs:text-[8px] sm:text-sm tracking-wides text-center text-purple-200 font-Roboto ">
                {label}
            </div>
        </div>
    );
}

export default Timer