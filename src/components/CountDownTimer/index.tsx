import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Counter from "../Counter";

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
  const [isMarginIncreased, setIsMarginIncreased] = useState(false); // State for margin toggle

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="w-[90%] md:w-1/2 h-[80vh] md:h-full mb-4 md:mb-0 text-white px-4 ">
      <div className="relative top-[20%] w-[100%] md:w-[80%] perspective-[1000px] ">
        <div
          className={`${styles.flipCardInner} ${
            isFlipped ? styles.flipped : ""
          } `}
        >
          <div className={`${styles.glow}`}></div>
          {/* FRONT SIDE */}
          <div className="w-full h-[40vh] md:h-[64vh] bg-[url('../src/assets/images/ptm.jpg')] bg-cover rounded-2xl shadow-2xl flex flex-col justify-center md:space-y-8 space-y-5 [transform:rotateY(0deg)] ">
            <h2 className="font-varien text-[20px] md:text-4xl lg:text-5xl text-center tracking-wider mt-2 mb-2 ">
              TIME UNTIL LAUNCH
            </h2>

            <div className="flex gap-1 md:gap-2 justify-center flex-wrap ">
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
                className="bg-[#a632ff] text-white px-4 md:px-6 py-1 md:py-3 my-1 text-sm md:text-xl font-semibold rounded-lg
               shadow-[4px_4px_12px_#5c1e99,_-4px_-4px_12px_#c85cff]
               hover:shadow-[2px_2px_6px_#5c1e99,_-3px_-3px_6px_#c85cff]
               transition-shadow duration-300 ease-in-out focus:outline-none"
                onClick={() => {
                  setIsFlipped(true);
                  setIsMarginIncreased(true); // Add margin
                }}
              >
                Join the Movement →
              </button>
            </div>
          </div>

          {/* BACK SIDE - REGISTER FORM */}
          <div
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
            className="absolute top-0 left-0 w-full h-[50vh] md:h-[64vh] p-2.5 bg-[url('../src/assets/images/ptm.jpg')] bg-cover bg-center rounded-2xl shadow-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center my-4 ">
              Register Now
            </h2>
            <form
              className="flex flex-col gap-2 sm:gap-3 w-full max-w-md mx-auto px-4"
              onSubmit={(e) => {
                e.preventDefault();
                storeRecord();
                setIsMarginIncreased(false); // Remove margin on submit
              }}
            >
              <input
                required
                type="text"
                pattern="[a-zA-Z\s]+"
                title="Name can only be Alphabets"
                placeholder="Full Name"
                id="name"
                className="md:p-2 px-3 py-1 text-[12px] rounded-md bg-white/10 text-white placeholder-white/70"
              />
              <input
                required
                type="tel"
                pattern="[0-9]{11}"
                title="Phone number should be 10 digits long"
                placeholder="Phone Number"
                id="phone"
                className="md:p-2 px-3 py-1 text-[12px] rounded bg-white/10 text-white placeholder-white/70"
              />
              <input
                required
                type="email"
                placeholder="Email"
                id="email"
                className="md:p-2 px-3 py-1 text-[12px] rounded bg-white/10 text-white placeholder-white/70"
              />
              <input
                required
                type="text"
                placeholder="College"
                id="college"
                className="md:p-2 px-3 py-1 text-[12px] rounded bg-white/10 text-white placeholder-white/70"
              />
              <input
                required
                type="text"
                placeholder="Contribution"
                id="contribution"
                className="md:p-2 px-3 py-1 text-[12px] rounded bg-white/10 text-white placeholder-white/70"
              />

              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 transition mx-auto my-1 w-[40%]  lg:h-10 rounded-lg font-medium text-[18px] md:text-xl"
              >
                Submit
              </button>
              <button
                type="button"
                className=" self-end mr-[-1rem] md:self-end md:mr-[-4rem] text-white w-half md:w-1/2 px-2 py-2 lg:py-2 text-xs lg:text-base  font-semibold rounded-full mt-4
              "
                onClick={() => {
                  setIsFlipped(false);
                  setIsMarginIncreased(false); // Remove margin on back
                }}
              >
                ← Back to Countdown
              </button>
            </form>
          </div>
        </div>
        {/* Counter */}
        <div style={{ transition: "margin-top 0.5s ease-in-out"}}
          className={`flex self-start justify-center items-center items-end w-full bg-purple-900 px-4 py-2 rounded-xl md:rounded-2xl ${
            isMarginIncreased ? "mt-[6rem] md:mt-12" : "mt-12" 
          }`}
        >
          <Counter />
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
    <div className="border border-white/20 backdrop-blur-3xl rounded-xl p-[2.5rem_1.5rem] md:p-[2.5rem_1.8rem] w-[40px] h-[20px]  md:w-20 md:h-20 lg:w-28 lg:h-28 animate-slowPulse gap-4 flex flex-col items-center justify-center bg-white/10 rounded-lg  shadow-lg backdrop-blur-md">
      <div className="text-[20px] md:text-3xl lg:text-5xl font-bold text-white">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-[8px] md:text-sm tracking-widest text-purple-200 ">
        {label}
      </div>
    </div>
  );
};

import { collection, addDoc } from "firebase/firestore"; 
// @ts-ignore
import { db } from "../../firebase.js"; 

const storeRecord = async () => {
    try {
        const name = document.getElementById("name") as HTMLInputElement;
        const phone = document.getElementById("phone") as HTMLInputElement;
        const email = document.getElementById("email") as HTMLInputElement;
        const college = document.getElementById("college") as HTMLInputElement;
        const contribution = document.getElementById("contribution") as HTMLInputElement;
      
        const record = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            college: college.value,
            contribution: contribution.value,
            timestamp: new Date().toLocaleString(),
        };

        console.log("Document with Data: " + JSON.stringify(record));
        await addDoc(collection(db, "FormData"), record);
        // const docRef = await addDoc(collection(db, "FormData"), record);
        // console.log("Document written with ID:", docRef.id);

        alert("Data submitted successfully!");
        setTimeout(() => {
            window.location.href = '/';
        }, 2000);
    } catch (error) {
        if (error instanceof Error) {
            console.error("Error storing record:", error.message);
        } else {
            console.error("An unknown error occurred:", error);
        }
    }
};
