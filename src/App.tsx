import CountDownTimer from "./components/CountDownTimer";
import { Footer } from "./components/Footer/footer";
import Manifesto from "./components/Manifesto";

function App() {
  const endDate = new Date("2025-06-28T00:00:00");

  return (
    <>
      <div className="text-white overflow-hidden  ">
        <CountDownTimer endDate={endDate} />
        <Manifesto />
      </div>
      <Footer />
    </>
  );
}

export default App;
