import CountDownTimer from './components/CountDownTimer';
import Manifesto from './components/Manifesto';
import styles from './App.module.css';

function App() {
  const endDate = new Date('2025-06-07');

  return (
    <div className={`min-h-screen text-white relative ${styles.pulseColor} overflow-hidden`}>
     
      {/* Main Content */}
      <center><div className="flex  items-center justify-center gap-2 text-purple-500 mt-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase mt-5">The Purple Movement</h1>
                </div></center>
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-10 pb-10 space-y-24">
      <CountDownTimer endDate={endDate} />
      <div className="h-[60vh]" />
        <Manifesto />
        
      </div>
    </div>
  );
}

export default App;
