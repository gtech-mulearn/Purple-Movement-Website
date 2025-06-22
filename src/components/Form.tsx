import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import { X } from "lucide-react";
import { useFormStatus } from "react-dom";
import SuccessCard from "./SuccessCard";
import { useState } from "react";
import style from "./customCheckbox.module.css";
type RecordType = {
  name: string;
  phone: string;
  student: string;
  faculity: string;
  email: string;
  college: string;
  contribution: string;
  timestamp: string;
};
type PopupContentType = {
  title: string;
  message: string;
};
const Form = ({
  isOpen,
  onClose,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  const [popupContent, setPopupContent] = useState<PopupContentType>();
  const [emailError, setEmailError] = useState<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const student = formData.get("student") as string;
    const faculity = formData.get("faculity") as string;
    const email = formData.get("email") as string;
    const college = formData.get("college") as string;
    const contribution = formData.get("contribution") as string;
    const hasEmail = await checkIfEmailExists(email).catch(() => {
      setEmailError("Something went wrong, please try again later");
    });
    if (hasEmail) {
      setEmailError("Email already exists");
      const timer = setTimeout(() => {
        setEmailError(undefined);
      }, 10000);
      return () => clearTimeout(timer);
    }
    const res = await storeRecord({
      name,
      student,
      faculity,
      phone,
      email,
      college,
      contribution,
      timestamp: new Date().toLocaleString(),
    });
    setPopupContent(res);
  };
  const { pending } = useFormStatus();

  // Faculity or Student
  const [selected, setSelected] = useState("");

  const handleSelect = (value: string) => {
    setSelected((prev) => (prev === value ? "" : value));
  };
  if (!isOpen) return null;
  return (
    <>
      {!!popupContent && (
        <SuccessCard
          title={popupContent.title}
          message={popupContent.message}
          onClose={() => setPopupContent(undefined)}
        />
      )}
      <div className="fixed inset-0 bg-black/50 px-5 flex items-center  justify-center z-50">
        <div className="absolute m-auto  w-[90%] md:w-[50%] p-2.5  bg-[#1B0E27] rounded-2xl shadow-2xl">
          <div className="absolute right-5 ">
            <button
              onClick={onClose}
              className="text-white hover:text-purple-400 transition duration-300 p-1"
              aria-label="Close"
            >
              <X color="white" size={24} />
            </button>
          </div>
          <h2 className="text-xl text-white sm:text-2xl font-bold text-center my-4 ">
            Register Now
          </h2>

          <form
            className="flex flex-col gap-2 sm:gap-3 w-full px-2 mx-auto md:px-[60px]"
            onSubmit={onSubmit}
          >
            <input
              required
              type="text"
              pattern="[a-zA-Z\s]+"
              title="Name can only be Alphabets"
              placeholder="Full Name"
              id="name"
              name="name"
              className="p-3 border-2 border-purple-700 bg-transparent  text-[12px] rounded-md text-white placeholder-white/70"
            />

            <input
              required
              type="tel"
              pattern="[0-9]{10}"
              title="Phone number should be 10 digits long"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              className="p-3  text-[12px] border-2 border-purple-700 bg-transparent  rounded  text-white placeholder-white/70"
            />
            <input
              required
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              className="p-3 text-[12px] rounded border-2 border-purple-700 bg-transparent  text-white placeholder-white/70"
              onChange={() => {
                if (emailError) {
                  setEmailError(undefined);
                }
              }}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <div className={`${style.container} flex justify-evenly`}>
              {/* Student */}
              <label className="flex items-center space-x-2 cursor-pointer text-white">
                <input
                  checked={selected == "student"}
                  onChange={() => handleSelect("student")}
                  type="checkbox"
                  name="student"
                  id="student"
                />
                <span className={`${style.checkmark}`}></span>
                <span className="text-sm font-medium">Student</span>
              </label>

              {/* Faculty */}
              <label className="flex items-center space-x-2  cursor-pointer text-white">
                <input
                  checked={selected == "faculity"}
                  onChange={() => handleSelect("faculity")}
                  type="checkbox"
                  name="faculty"
                  id="faculty"
                />
                <span className={`${style.checkmark}`}></span>
                <span className="text-sm font-medium">Faculty</span>
              </label>
            </div>

            <input
              required
              type="text"
              placeholder="College"
              id="college"
              name="college"
              className="p-3  text-[12px]  rounded border-2 border-purple-700 bg-transparent  text-white placeholder-white/70"
            />
            <input
              required
              type="text"
              placeholder="Contribution"
              id="contribution"
              name="contribution"
              className="p-3 text-[12px] rounded border-2 border-purple-700 bg-transparent  text-white placeholder-white/70"
            />
            <button
              type="submit"
              className="bg-purple-600  active:bg-transparent text-white hover:border-2 border-2 border-purple-600 hover:bg-transparent
              transition-all duration-300 ease px-2 md:px-4  mx-auto  md:py-1 py-1.4 max-w-fit my-5  rounded-md font-bold text-[18px] md:text-xl"
            >
              {pending ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;

const storeRecord = async (record: RecordType): Promise<PopupContentType> => {
  try {
    console.log("Document with Data: " + JSON.stringify(record));
    const data = await addDoc(collection(db, "FormData"), record);
    console.log("Document written with ID:", data.id);
    return {
      title: "Success",
      message: "Your registration was successful!",
    };
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error storing record:", error.message);
    } else {
      console.error("An unknown error occurred:", error);
    }
    return {
      title: "Error",
      message: "An error occurred. Please try again later.",
    };
  }
};

const checkIfEmailExists = async (email: string): Promise<boolean> => {
  const formDataRef = collection(db, "FormData");
  const q = query(formDataRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  return !querySnapshot.empty;
};
