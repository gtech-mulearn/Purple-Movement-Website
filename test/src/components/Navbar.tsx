import logo2 from "../assets/images/logopm.png";
import JoinUsButton from "./JoinUsButton";

const Navbar = ({ onJoinUs }: { onJoinUs: () => void }) => {
    return (
        <>
            <div className="fixed flex justify-between items-center w-full left-0 right-0 top-0  bg-purple-950/20  shadow-lg backdrop-blur-md p-2 xs:px-4 "
                style={{ zIndex: 1 }}
            >
                <img src={logo2} alt="Purple Movement Logo" className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
                <JoinUsButton onClick={onJoinUs} />
            </div>
        </>
    );
}

export default Navbar