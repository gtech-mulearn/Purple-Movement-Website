import CountDownTimer from "./components/CountDownTimer";
import { Footer } from "./components/Footer/footer";
import Manifesto from "./components/Manifesto";

function App() {
  const endDate = new Date("2025-06-28T00:00:00");

  return (
    <>
      <div className="text-white bg-[url('../src/assets/images/bg.png')] bg-no-repeat md:bg-cover overflow-hidden ">
        <h1 className="font-Monteserrat text-4xl md:text-6xl text-center font-extrabold text-[#8737d7] tracking-widest uppercase mt-8">
          The Purple Movement
        </h1>

        <CountDownTimer endDate={endDate} />
        <Manifesto />
      </div>
      <Footer />
    </>
  );
}

export default App;
