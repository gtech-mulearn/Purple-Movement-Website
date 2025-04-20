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
            className={`${styles.flipCard} ${styles.front} bg-[url('../src/assets/images/ptm.jpg')] bg-cover bg-center rounded-2xl shadow-2xl flex flex-col content-center items-center space-y-6 sm:space-y-8  h-[40vh] md:h-[60vh] `}
          >
            <h2
              className={`${styles.launchTime} text-xl sm:text-2xl md:text-3xl text-center tracking-wider mt-6 mb-2 sm:mb-6`}
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
                className="bg-[#a632ff] text-white px-4 sm:px-5 py-2 my-1 text-xs sm:text-sm font-semibold rounded-full
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
            <h2 className="text-xl sm:text-2xl font-bold text-center my-4 ">
              Register Now
            </h2>
            <form className="flex flex-col gap-2 sm:gap-3 w-full max-w-xs sm:max-w-sm mx-auto px-4" onSubmit={(e) => { e.preventDefault(); storeRecord(); }}>
              <input required type="text" pattern="[a-zA-Z\s]+" title="Name can only be Alphabets"  placeholder="Full Name" id="name" className="p-2 rounded-md bg-white/10 text-white placeholder-white/70" />
              <input required type="tel"  pattern="[0-9]{11}" title="Phone number should be 10 digits long"  placeholder="Phone Number" id="phone" className="p-2 rounded bg-white/10 text-white placeholder-white/70" />
              <input required type="email"  placeholder="Email" id="email" className="p-2 rounded bg-white/10 text-white placeholder-white/70" />
              <input required type="text" placeholder="College" id="college" className="p-2 rounded bg-white/10 text-white placeholder-white/70"  />
              <input required type="text" placeholder="Contribution" id="contribution" className="p-2 rounded bg-white/10 text-white placeholder-white/70"  />
                
              <button type="submit" className="bg-green-500 hover:bg-green-700 transition mx-auto mt-2 w-[40%]  rounded-full font-semibold" >
                Submit
              </button>
              <button
                type="button"
                className=" text-white px-4 sm:px-5 py-1 my-1 text-xs sm:text-sm font-semibold rounded-full
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
      <div className="flex justify-center mt-[15px] items-end h-[70vh] md:h-[80vh] w-[100%] md:w-[80%]">
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
    <div className="border border-white/20 backdrop-blur-3xl rounded-xl p-[2.5rem_1.7rem] w-[40px] h-[40px] animate-slowPulse gap-4 flex flex-col items-center justify-center bg-white/10 rounded-lg  shadow-lg backdrop-blur-md">
      <div className="text-[1.5rem] font-bold text-white">
        {value < 10 ? `0${value}` : value}
      </div>
      <div className="text-[10px] tracking-widest text-purple-200 ">
        {label}
      </div>
    </div>
  );
};


import { collection, addDoc } from "firebase/firestore"; 
// @ts-ignore
import { db } from "../../firebase.js"; 
import firebase from "firebase/compat/app";


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
        const docRef = await addDoc(collection(db, "FormData"), record);
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