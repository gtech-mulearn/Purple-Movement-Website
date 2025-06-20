import { FacebookIcon, Instagram, Linkedin } from "lucide-react";
import logo from "../../assets/images/logo.png";
export const Footer = () => {
  return (
    <div className="p-5 rounded-t-[30px] bg-black  text-white md:p-10">
      <div className=" bottom-0 md:text-[1.5rem] mb-2 text-[.5rem] md:relative md:p-10 grid grid-flow-col w-full gap-2">
        <div className=" grid border-r-[1px] items-center justify-center  border-purple-800 ">
          <img src={logo} className="md:w-[150px] w-[120px] p-2 " />
        </div>
        <div className=" flex border-r-[1px]  justify-center  items-center  border-purple-800">
          <div className=" text-white md:text-[1rem] p-5 text-center text-[.8rem]">
            <span className="font-bold ">Quick Links </span>
            <p>Join Us</p>
            <p>Manifesto</p>
            <p>Mulearn</p>
          </div>
        </div>

        <div className="flex md:mb-10 gap-3 p-5  md:flex-row flex-col items-center justify-center ">
          <Instagram color="white" size={30} />
          <FacebookIcon color="white" size={30} />
          <Linkedin color="white" size={30} />
        </div>
      </div>
      <div className="text-center text-white border-t-[1px]  text-sm border-purple-800 pt-4">
        © 2025 PURPLE MOVEMENT. All rights reserved.
      </div>
    </div>
  );
};
