import { useEffect, useState } from "react";
import logo2 from "../assets/images/logopm.png";
import JoinUsButton from "./JoinUsButton";

const Navbar = ({ onJoinUs }: { onJoinUs: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed flex justify-between items-center w-full left-0 right-0 top-0  transition-all ease duration-500 shadow-lg backdrop-blur-md p-2 xs:px-4 ${
          isScrolled ? "bg-black" : "bg-purple-950/20"
        }`}
        style={{ zIndex: 1 }}
      >
        <img
          src={logo2}
          alt="Purple Movement Logo"
          className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
        />
        <JoinUsButton onClick={onJoinUs} />
      </div>
    </>
  );
};

export default Navbar;
