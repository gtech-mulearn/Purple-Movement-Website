import { useEffect, useState } from "react";
// import styles from "./style.module.css";
import Counter from "../Counter";
import PopupCard from "../PopUpCard";
import logo from "../../assets/images/logo_pm.png";
import logo2 from "../../assets/images/logopm.png";
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
  // const [isFlipped, setIsFlipped] = useState(false);
  // const [isMarginIncreased, setIsMarginIncreased] = useState(false); // State for margin toggle

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
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col  w-full text-white  ">
      {/* PopUp Card */}
      {PopUpCard && (
        <PopupCard
          title={popupContent.title}
          message={popupContent.message}
          onClose={() => setPopUpCard(false)}
        />
      )}

      <div className="flex w-full md:justify-start md:mx-10">
        <nav className="grid grid-flow-col font-Monteserrat absolute top-0 md:top-5 md:mx-auto text-center font-extrabold text-[#8737d7] bg-purple-950/20 md:w-[600px] rounded-lg shadow-lg backdrop-blur-md w-full">
          <div className="items-center flex m-5">
            <img
              src={logo}
              alt="Purple Movement Logo"
              className="h-8 md:h-10 "
            />
          </div>

          <div className="grid grid-flow-col justify-end items-center">
            <button
              onClick={() => setShowPopup(true)}
              className="pointer hover:bg-transparent hover:border-2 border-0 border-purple-600 ease transition-all duration-300 text-white bg-purple-700 md:text-[1rem] text-sm  rounded-lg md:w-[100px] m-5  p-2"
            >
              Join Us
            </button>
          </div>
        </nav>
      </div>
      {/* REGISTRATION */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center  justify-center z-50">
          <div className="absolute m-auto  w-full md:w-[60%] h-fit md:h-[64vh] p-2.5 bg-[url('../src/assets/images/bg.png')] bg-cover bg-center rounded-2xl shadow-2xl">
            <div className="absolute right-5 ">
              <button
                onClick={() => setShowPopup(false)}
                className="text-white hover:text-purple-400 transition duration-300 p-1"
                aria-label="Close"
              >
                <X color="white" size={24} />
              </button>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-center my-4 ">
              Register Now
            </h2>

            <form
              className="flex flex-col gap-2 sm:gap-3 w-full px-2 mx-auto md:px-[60px]"
              onSubmit={(e) => {
                e.preventDefault();
                checkIfEmailExists(); // your logic
                setShowPopup(true); // Show the popup
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
            </form>
          </div>
        </div>
      )}
      <div className="flex flex-col justify-center  items-center px-4  w-full h-[100vh]">
        <img
          src={logo2}
          alt="Purple Movement Logo"
          className="m-10 drop-shadow-[5px_5px_25px_rgb(119,14,189)] h-12 md:h-20 object-contain"
        />
        <h2 className="font-Monteserrat md:mb-20 mb-10 text-[20px] md:text-4xl lg:text-5xl text-center font-bold ">
          Time Until Launch
        </h2>
        <div className={`flex justify-center items-center  `}>
          {/* FRONT SIDE */}
          <div className={`flex flex-col`}>
            <div className="flex gap-1 md:gap-8 flex-wrap ">
              {[
                { value: timeLeft.days, label: "DAYS" },
                { value: timeLeft.hours, label: "HOURS" },
                { value: timeLeft.minutes, label: "MINUTES" },
                { value: timeLeft.seconds, label: "SECONDS" },
              ].map((item) => (
                <Timer key={item.label} value={item.value} label={item.label} />
              ))}
            </div>

            <div className="text-center"></div>
          </div>
        </div>

        {/* Counter */}
        <div
          className={`flex  justify-center relative bottom-0  w-full px-4 py-2  `}
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
        <div className="bg-transparent border-l-2 border-r-2 backdrop-blur-md rounded-lg md:p-[20px] p-[10px] flex flex-col items-center justify-center shadow-lg w-[50px] h-[50px] md:w-[120px] md:h-[120px] md:text-[3rem] font-bold text-white">
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
import { X } from "lucide-react";

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
