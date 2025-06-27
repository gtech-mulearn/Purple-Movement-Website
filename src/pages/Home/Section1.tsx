import { useEffect, useState } from "react";
import logo from "../../assets/images/logo_pm.png";
import Counter from "../../components/Counter";
import Timer from "../../components/Timer";
import JoinUsButton from "../../components/JoinUsButton";

export const Section1 = ({
  endDate,
  onJoinUs,
  update,
  value,
}: {
  endDate: Date;
  onJoinUs: () => void;
  value: number | undefined;
  update: (value: number) => void;
}) => {
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
  // const [isFlipped, setIsFlipped] = useState(false);
  // const [isMarginIncreased, setIsMarginIncreased] = useState(false); // State for margin toggle

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full text-white pt-24 sm:pt-32 pb-28 ">
      <img
        src={logo}
        alt="Purple Movement Logo"
        className=" drop-shadow-[5px_5px_25px_rgb(119,14,189)] h-12 xs:h-20 sm:h-20 object-contain"
      />

      <h2 className="font-Gilroy text-center my-8 xs:mt-14 sm:my-16 xs:text-3xl sm:text-4xl">
        Time Until Launch
      </h2>
      <div className="flex w-full max-w-[200px] self-center xs:max-w-[350px] sm:max-w-full sm:gap-10 justify-between sm:justify-center ">
        {[
          { value: timeLeft.days, label: "DAYS" },
          { value: timeLeft.hours, label: "HOURS" },
          { value: timeLeft.minutes, label: "MINUTES" },
          { value: timeLeft.seconds, label: "SECONDS" },
        ].map((item) => (
          <Timer key={item.label} value={item.value} label={item.label} />
        ))}
      </div>
      <JoinUsButton onClick={onJoinUs} className="my-5 xs:my-10 sm:my-16" />
      {/* Counter */}
      <div className="hidden md:hidden lg:visible lg:absolute lg:right-20 lg:rotate-40 lg:top-50 lg:flex lg:w-[50px] lg:h-[50px] lg:p-[80px] lg:bg-purple-700/20"></div>

      <div className="hidden md:hidden lg:visible lg:absolute lg:left-20 lg:rotate-40 lg:bottom-10 lg:flex lg:w-[50px] lg:h-[50px] lg:p-[60px] lg:bg-purple-700/20"></div>
      <div className="hidden md:hidden lg:visible lg:absolute lg:left-60 lg:rotate-40 lg:top-30 rounded-full lg:flex lg:w-[50px] lg:h-[80px] lg:p-[50px] lg:bg-purple-700/20"></div>

      <Counter value={value} update={update} />
    </div>
  );
};
