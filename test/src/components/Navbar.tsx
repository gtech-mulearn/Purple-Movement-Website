import logo2 from "../assets/images/logopm.png";

const Navbar = ({ onJoinUs }: { onJoinUs: () => void }) => {
    return (
        <>
            <div className="grid grid-flow-col md:px-20 px-10 font-Monteserrat top-0 text-center font-extrabold text-[#8737d7] bg-purple-950/20  rounded-lg shadow-lg backdrop-blur-md w-full fixed z-50 ">
                <div className="items-center flex ">
                    <img src={logo2} alt="Purple Movement Logo" className="h-8 md:h-10  " />
                </div>

                <div className="grid grid-flow-col justify-end items-center">
                    <button
                        onClick={onJoinUs}
                        className="pointer hover:bg-transparent hover:border-2 border-0 border-purple-600 ease transition-all duration-300 text-white bg-purple-700 md:text-[1rem] text-sm  rounded-lg md:w-[100px] my-5 p-2"
                    >
                        Join Us
                    </button>
                </div>
            </div>
            <div className="h-16" />
        </>
    );
}

export default Navbar