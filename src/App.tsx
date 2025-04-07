import Counter from './Counter'

function App() {
  const targetDate = new Date("2025-06-07T00:00:00");

  return (
    <>
      <div>
        <Counter endTime={targetDate} />
      </div>
    </>
  )
}

export default App
