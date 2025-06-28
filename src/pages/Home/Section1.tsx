import { useEffect, useState } from "react";
import logo from "../../assets/images/logo_pm.png";
import Counter from "../../components/Counter";
import Timer from "../../components/Timer";
import JoinUsButton from "../../components/JoinUsButton";
import LaunchPage from "./LaunchPage";

export const Section1 = ({
  endDate,
  onJoinUs,
  value,
  update,
  onTimerEnd,
  isLaunched,
}: {
  endDate: Date;
  onJoinUs: () => void;
  value: number | undefined;
  update: (value: number) => void;
  onTimerEnd: () => void;
  isLaunched: boolean;
}) => {
  const getTimeLeft = () => {
    const now = new Date().getTime();
    const end = endDate.getTime();
    const diff = end - now;
    return {
      total: diff,
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    if (isLaunched) return;
    const timer = setInterval(() => {
      const updatedTime = getTimeLeft();
      setTimeLeft(updatedTime);
      if (updatedTime.total <= 0) {
        onTimerEnd();
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate, isLaunched, onTimerEnd]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center w-full text-white pt-24 sm:pt-32 pb-28">
      <img
        src={logo}
        alt="Purple Movement Logo"
        className="drop-shadow-[5px_5px_25px_rgb(119,14,189)] h-16 xs:h-24 sm:h-24 object-contain"
      />
      {isLaunched ? (
        <LaunchPage />
      ) : (
        <>
          <h2 className="font-Gilroy text-center my-8 xs:mt-14 sm:my-16 xs:text-3xl sm:text-4xl">
            Time Until Launch
          </h2>
          <div className="flex w-full max-w-[200px] self-center xs:max-w-[350px] sm:max-w-full sm:gap-10 justify-between sm:justify-center">
            {[{ value: timeLeft.days, label: "DAYS" },
              { value: timeLeft.hours, label: "HOURS" },
              { value: timeLeft.minutes, label: "MINUTES" },
              { value: timeLeft.seconds, label: "SECONDS" }].map((item) => (
              <Timer key={item.label} value={item.value} label={item.label} />
            ))}
          </div>
        </>
      )}
      <JoinUsButton onClick={onJoinUs} className="my-14 sm:my-20" />
      <Counter value={value} update={update} />
    </div>
  );
};
