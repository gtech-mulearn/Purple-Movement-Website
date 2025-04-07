import CountdownTimer from "./components/CountDown/Counter";
import Manifesto from "./components/Manifesto/manifesto";


function App() {
  const targetDate = new Date("2025-06-07T00:00:00");

  return (
    <>
      <Manifesto />
      <div>
        <CountdownTimer endTime={targetDate} />
      </div>
    </>
  )
}

export default App
