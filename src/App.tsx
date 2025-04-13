import CountDownTimer from './components/CountDownTimer';
import Manifesto from './components/Manifesto';
import styles from './App.module.css';


function App() {
  const endDate = new Date('2025-06-07');

  return (
    <div  className=" h-[120vh] text-white bg-[url('../src/assets/images/ptm.jpg')] bg-cover overflow-hidden ">

<center><div className="flex  items-center justify-center gap-2 text-[#8737d7] px-4">
                    <h1 className={`${styles.PurpleMovement} text-4xl md:text-6xl font-extrabold tracking-widest uppercase mt-5`}>The Purple Movement</h1>
                </div></center>

      {/* Main Content */}
<div className="grid grid-cols-1 md:grid-cols-2 ">
<Manifesto />
    <CountDownTimer endDate={endDate}  />
    
</div>
</div>
)};

export default App;
