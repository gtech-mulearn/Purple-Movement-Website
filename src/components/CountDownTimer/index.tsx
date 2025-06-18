import { useEffect, useState } from "react";
import styles from "./style.module.css";
import Counter from "../Counter";
import PopupCard from "../PopUpCard";

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

  // popupcard
  const [PopUpCard, setPopUpCard] = useState(false);
  const [popupContent, setPopupContent] = useState({ title: "", message: "" });

  async function checkIfEmailExists() {
    const email = document.getElementById("email") as HTMLInputElement;
    if (!email.value) {
      console.error("Email input not found.");
      return;
    }
    const formDataRef = collection(db, "FormData");
    const q = query(formDataRef, where("email", "==", email.value)); // Use the email value here

    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        console.log("Email exists in Firestore:", email.value);
        setPopupContent({
          title: "Email Exists",
          message: `Your are already part of the movement!`,
        });
        setPopUpCard(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        await storeRecord();
        setPopupContent({
          title: "Success",
          message: "Your registration was successful!",
        });
        setPopUpCard(true);
        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      }
    } catch (error) {
      setPopupContent({
        title: "Error",
        message: "An error occurred while checking the email.",
      });
      setPopUpCard(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
      console.error("Error querying Firestore:", error);
    }
  }

  return (
    <div className="flex flex-col justify-center w-full text-white px-4 ">
      {/* PopUp Card */}
      {PopUpCard && (
        <PopupCard
          title={popupContent.title}
          message={popupContent.message}
          onClose={() => setPopUpCard(false)}
        />
      )}

      <div className="flex flex-col w-full mt-8 perspective-[1000px] ">
        <div
          className={`${styles.flipCardInner} ${isFlipped ? styles.flipped : ""} `}
        >
          {/* FRONT SIDE */}
          <div
            className={`${styles.flipCardFront} md:w-[60%] w-full relative top-[10px] md:left-[20%] h-[40vh] md:h-[64vh] bg-cover rounded-2xl shadow-2xl flex flex-col justify-center  mb-5 md:space-y-8 space-y-5 [transform:rotateY(0deg)] `}
          >
            <h2 className="font-Monteserrat text-[20px] md:text-4xl lg:text-5xl text-center font-bold mt-2 mb-2 ">
              Time Until Launch
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
                className="bg-purple-700 text-white px-4 md:px-6 py-1 md:py-3 my-1 text-sm md:text-xl font-semibold rounded-[10px]
                hover:border-2 border-2 border-purple-600 hover:bg-transparent
              transition-all duration-300 ease 
              "
                onClick={() => {
                  setIsFlipped(true);
                  setIsMarginIncreased(true); // Add margin
                }}
              >
                Join Now →
              </button>
            </div>
          </div>

          {/* BACK SIDE - REGISTER FORM */}
          <div
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
            className="absolute top-1 md:top-3 md:left-[20%] w-full md:w-[60%] h-fit md:h-[64vh] p-2.5 bg-[url('../src/assets/images/bg.png')] bg-cover bg-center rounded-2xl shadow-2xl"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-center my-4 ">
              Register Now
            </h2>

            <form
              className="flex flex-col gap-2 sm:gap-3 w-full px-2  mx-auto md:px-[60px] "
              onSubmit={(e) => {
                e.preventDefault();
                checkIfEmailExists();
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
                className="p-3 border-2 border-purple-700 bg-transparent  text-[12px] rounded-md text-white placeholder-white/70"
              />
              <input
                required
                type="tel"
                pattern="[0-9]{10}"
                title="Phone number should be 10 digits long"
                placeholder="Phone Number"
                id="phone"
                className="p-3  text-[12px] border-2 border-purple-700 bg-transparent  rounded  text-white placeholder-white/70"
              />
              <input
                required
                type="email"
                placeholder="Email"
                id="email"
                className="p-3 text-[12px] rounded border-2 border-purple-700 bg-transparent  text-white placeholder-white/70"
              />
              <input
                required
                type="text"
                placeholder="College"
                id="college"
                className="p-3  text-[12px]  rounded border-2 border-purple-700 bg-transparent  text-white placeholder-white/70"
              />
              <input
                required
                type="text"
                placeholder="Contribution"
                id="contribution"
                className="p-3 text-[12px] rounded border-2 border-purple-700 bg-transparent  text-white placeholder-white/70"
              />

              <button
                type="submit"
                className="bg-purple-600  active:bg-transparent  hover:border-2 border-2 border-purple-600 hover:bg-transparent
              transition-all duration-300 ease  mx-auto  md:py-1 py-1.4 md:w-[20%] w-[35%] mt-5  rounded-md font-bold text-[18px] md:text-xl"
              >
                Submit
              </button>
              <button
                type="button"
                className=" text-center "
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
        <div
          style={{ transition: "margin-top 0.5s ease-in-out" }}
          className={`flex self-start justify-center items-center mt-[8rem] w-full px-4 py-2 rounded-xl md:rounded-2xl ${
            isMarginIncreased ? "mt-[9rem] md:mt-12" : "mt-11"
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
    <div className="">
      <div>
        <div className="bg-transparent border backdrop-blur-md rounded-lg md:p-[20px] p-[10px] flex flex-col items-center justify-center shadow-lg w-[50px] h-[50px] md:w-[120px] md:h-[120px] md:text-[3rem] font-bold text-white">
          {value < 10 ? `0${value}` : value}
        </div>
      </div>
      <div className="text-[8px] md:text-sm tracking-wides text-center text-purple-200 ">
        {label}
      </div>
    </div>
  );
};

import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase"; // Adjust the import path as necessary

const storeRecord = async () => {
  try {
    const name = document.getElementById("name") as HTMLInputElement;
    const phone = document.getElementById("phone") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const college = document.getElementById("college") as HTMLInputElement;
    const contribution = document.getElementById(
      "contribution",
    ) as HTMLInputElement;

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
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error storing record:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
  }
};
