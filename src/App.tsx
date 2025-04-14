import CountDownTimer from './components/CountDownTimer';
import Manifesto from './components/Manifesto';


function App() {
  const endDate = new Date('2025-06-07');

  return (

    <div  className="text-white bg-[url('../src/assets/images/ptm.jpg')] bg-cover overflow-hidden min-h-[100vh]">
      <div className="flex items-center justify-center ">
        <h1 className="font-NuraBold text-4xl md:text-6xl font-extrabold text-[#8737d7] tracking-widest uppercase mt-5">The Purple Movement</h1>
      </div>

      {/* Main Content  */}
      <div className=" flex flex-col-reverse md:flex-row mt-24 mx-32 gap-4 md:justify-between md:items-start">
          <Manifesto />
          <CountDownTimer endDate={endDate} />
      </div>
    </div>
    

    
)};

export default App;
