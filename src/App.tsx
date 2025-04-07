import Counter from './Counter'
import Manifesto from './Manifesto/manifesto';

function App() {
  const targetDate = new Date("2025-06-07T00:00:00");

  return (
    <>
    <Manifesto />
      <div>
        <Counter endTime={targetDate} />
      </div>
    </>
  )
}

export default App
