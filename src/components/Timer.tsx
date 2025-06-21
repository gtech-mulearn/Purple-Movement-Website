
type TimerProps = {
    label: string;
    value: number;
};

const Timer = ({ value, label }: TimerProps) => {
    return (
        <div className=" flex flex-col items-center justify-center gap-2 sm:gap-4">
            <div className="relative flex justify-center items-center size-[40px] xs:size-[65px] sm:size-[120px]">
                <AnimateBox zIndex={1} animationDuration="2s" />
                <AnimateBox zIndex={2} animationDuration="2.2s" />
                <AnimateBox zIndex={3} animationDuration="1.8s" />

                <div
                    className="
                     text-sm xs:text-[25px] shadow-lg  sm:text-[3rem] font-bold text-white
                    font-Roboto"
                >
                    {value < 10 ? `0${value}` : value}
                </div>
            </div>
            <div className="text-[5px] xs:text-[8px] sm:text-sm tracking-wides text-center text-purple-200 font-Roboto ">
                {label}
            </div>
        </div>
    );
}

export default Timer

const AnimateBox = ({ zIndex, animationDuration }: { zIndex: number, animationDuration: string }) => {
    return (
        <div
            className="
      absolute animate-spin
      bg-[url('../src/assets/images/timer/box.svg')] bg-contain bg-no-repeat
      w-full h-full opacity-40
    "
            style={{
                zIndex,
                animationDuration,
            }}
        />
    )
}