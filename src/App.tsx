import CountDownTimer from './components/CountDownTimer';
import Manifesto from './components/Manifesto';
import styles from './App.module.css';

function App() {
  const endDate = new Date('2025-06-07');

  return (
    <div className="min-h-screen text-white relative bg-black overflow-hidden">
      {/* Parabolic Gradient Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[110vw] h-[100vh] opacity-80 blur-[300px] rounded-t-[60%] ${styles.pulseColor}`} />
      </div>
      {/* Main Content */}
      <center><div className="flex items-center justify-center gap-2 text-purple-500 mt-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase mt-5">The Purple Movement</h1>
                </div></center>
      <div className="relative z-10 max-w-4xl mx-auto px-4 pt-10 pb-10 space-y-24">
      <CountDownTimer endDate={endDate} />
        <Manifesto />
        
      </div>
    </div>
  );
}

export default App;
