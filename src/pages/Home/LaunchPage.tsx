import JoinUsButton from "../../components/JoinUsButton";

const LaunchPage = () => {
  const handleLaunch = () => {
    window.location.href = "https://purplemovement-landing-rose.vercel.app/";
  };

  return (
    <div className="text-center text-white mt-20 mb-32 sm:mt-32 sm:mb-40 flex flex-col items-center">
      <div className="text-5xl font-bold mb-10">
        One Press to Change the FUTURE!...
      </div>
      <JoinUsButton onClick={handleLaunch}>
        Launch
      </JoinUsButton>
    </div>
  );
};

export default LaunchPage;
