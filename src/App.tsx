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
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 space-y-24">
        <Manifesto />
        <CountDownTimer endDate={endDate} />
      </div>
    </div>
  );
}

export default App;
