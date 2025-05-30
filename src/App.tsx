import Aim from "./components/Aim";
import CountDownTimer from "./components/CountDownTimer";
import Manifesto from "./components/Manifesto";

function App() {
 const endDate = new Date('2025-06-28T00:00:00');

  return (
    <>
      <div className="text-white bg-[url('../src/assets/images/ptm.jpg')] bg-cover overflow-hidden ">
        <div className=" md:w-full mx-auto w-4/5 flex items-center justify-center">
          <h1 className="font-NuraBold text-4xl md:text-6xl text-center font-extrabold text-[#8737d7] tracking-widest uppercase mt-8">
            The Purple Movement
          </h1>
        </div>

        {/* Main Content  */}
        <div className=" w-full flex flex-col-reverse items-center md:mx-auto md:flex-row mt-[-4em] md:mt-24 gap-4 md:justify-between md:items-start">
          <Manifesto />
          <CountDownTimer endDate={endDate} />
        </div>
          <Aim/>
      </div>
   
    </>
  
  );
}

export default App;
