import { useEffect, useState } from "react";
import styles from "./style.module.css";

const CountDownTimer = ({ endDate }: { endDate: Date }) => {
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
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="w-[90%] md:w-1/2 h-[80vh] md:h-full mb-4 md:mb-0 text-white px-4">
      <div className={styles.flipCardWrapper}>
        <div
          className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ""}`}
        >
          <div className={`${styles.glow}`}></div>
          {/* FRONT SIDE */}
          <div
            className={`${styles.flipCard} ${styles.front} bg-[url('../src/assets/images/ptm.jpg')] bg-cover bg-center rounded-2xl shadow-2xl flex flex-col content-center items-center space-y-6 sm:space-y-8  h-[40vh] md:h-[60vh] bg-white/5`}
          >
            <h2
              className={`${styles.launchTime} text-xl sm:text-2xl md:text-3xl text-center tracking-wider mt-12 mb-4 sm:mb-6`}
            >
              TIME UNTIL LAUNCH
            </h2>

            <div className="flex gap-2 sm:gap-4 justify-center flex-wrap">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINUTES" },
                { value: timeLeft.seconds, label: "SECONDS" },
              ].map((item) => (
                <Timer key={item.label} value={item.value} label={item.label} />
              ))}
            </div>

            <div className="text-center">
              <button
                className="bg-[#a632ff] text-white px-4 sm:px-5 py-2 my-12 text-xs sm:text-sm font-semibold rounded-full
               shadow-[4px_4px_12px_#5c1e99,_-4px_-4px_12px_#c85cff]
               hover:shadow-[2px_2px_6px_#5c1e99,_-3px_-3px_6px_#c85cff]
               transition-shadow duration-300 ease-in-out focus:outline-none"
                onClick={() => setIsFlipped(true)}
              >
                Join the Movement →
              </button>
            </div>
          </div>

          {/* BACK SIDE - REGISTER FORM */}
          <div
            className={`${styles.flipCard} ${styles.back} bg-[url('../src/assets/images/ptm.jpg')] bg-cover bg-center rounded-2xl shadow-2xl h-[40vh] md:h-[60vh]`}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center my-8">
              Register Now
            </h2>
            <form className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm mx-auto px-4">
              <input
                type="text"
                placeholder="Name"
                className={`${styles.inputBar} input-field`}
              />
              <input
                type="text"
                placeholder="Phone"
                className={`${styles.inputBar} input-field`}
              />
              <input
                type="text"
                placeholder="College"
                className={`${styles.inputBar} input-field`}
              />
              <input
                type="text"
                placeholder="Contribution"
                className={`${styles.inputBar} input-field`}
              />
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 transition mx-auto mt-2 w-[40%] py-1 rounded-full font-semibold"
              >
                Submit
              </button>
              <button
                type="button"
                className=" text-white px-4 sm:px-5 py-2 my-4 text-xs sm:text-sm font-semibold rounded-full
               shadow-[4px_4px_12px_#5c1e99,_-4px_-4px_12px_#c85cff]
               hover:shadow-[2px_2px_6px_#5c1e99,_-3px_-3px_6px_#c85cff] 
               transition-shadow duration-300 ease-in-out focus:outline-none"
                onClick={() => setIsFlipped(false)}
              >
                ← Back to Countdown
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-end h-[70vh] md:h-[80vh] w-[100%] md:w-[80%]">
  <div className="bg-purple-300/50 p-[30px] rounded">
    Count
  </div>
</div>
    </div>
  );
};

export default CountDownTimer;

type TimerProps = {
  label: string;
  value: number;
};

const Timer = ({ value, label }: TimerProps) => {
  return (
    <div className="border border-white/20 backdrop-blur-3xl rounded-xl p-[2.5rem_2rem] w-[50px] h-[50px] animate-slowPulse gap-4 flex flex-col items-center justify-center bg-white/10 rounded-lg  shadow-lg backdrop-blur-md">
      <div className="text-3xl font-bold text-white">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-[10px] tracking-widest text-purple-200 ">
        {label}
      </div>
    </div>
  );
};
