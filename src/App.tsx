import React, { useState, useEffect } from 'react';
import { Sparkles, Star } from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 59,
    hours: 22,
    minutes: 51,
    seconds: 26
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-purple-900 text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-4 py-20 space-y-24">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-2 text-purple-300">
            <Sparkles className="w-5 h-5" />
            <span className="uppercase tracking-[0.2em]">Purple Movement</span>
            <Sparkles className="w-5 h-5" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We are the Manifestors of Change.
          </h1>
          
          <div className="space-y-4 text-purple-200">
            <p className="text-xl">We are not waiting for the future.</p>
            <p className="text-xl">We are building it—with courage, code, creativity, and clarity.</p>
          </div>

          <button className="bg-purple-500 hover:bg-purple-400 transition-colors px-8 py-3 rounded-full text-lg font-semibold">
            Join the Movement →
          </button>
        </div>

        {/* Manifesto Section */}
        <div className="space-y-12 text-center">
          <div className="space-y-6">
            <p className="text-xl">We are the voice of a generation that refuses to settle.</p>
            <p className="text-xl">We are not consumers of culture.</p>
            <p className="text-xl">We are <span className="text-orange-500 font-semibold">producers of purpose</span>.</p>
            <p className="text-xl">We break barriers, not just for ourselves, but for every young mind daring to dream.</p>
          </div>

          <div className="space-y-4">
            <p className="text-xl">We believe in ecosystems that empower, not limit.</p>
            <p className="text-xl">In access, not gatekeeping.</p>
            <p className="text-xl">In bold visions, not borrowed templates.</p>
          </div>

          <div className="flex justify-center gap-4">
            <Star className="w-6 h-6 text-purple-400" />
            <Star className="w-6 h-6 text-purple-300" />
            <Star className="w-6 h-6 text-purple-400" />
          </div>

          <div className="space-y-4">
            <p className="text-xl">We are here to <span className="text-orange-500 font-semibold">reclaim the narrative</span>—</p>
            <p className="text-xl">To give confidence to the curious,</p>
            <p className="text-xl">Networks to the bold,</p>
            <p className="text-xl">And direction to the determined.</p>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-semibold">This is <span className="text-orange-500">The Purple Movement</span>.</p>
            <p className="text-2xl">A wave of youth power, purpose, and possibility.</p>
            <p className="text-2xl">A signal that change is not coming—it's already here.</p>
          </div>

          <div className="space-y-2 text-center">
            <p className="text-xl">We are the energy.</p>
            <p className="text-xl">We are the strategy.</p>
            <p className="text-xl">We are the spark.</p>
          </div>

          <p className="text-4xl font-bold text-orange-500">AND IT STARTS NOW.</p>
        </div>

        {/* Countdown Section */}
        <div className="space-y-8">
          <h2 className="text-2xl text-center font-semibold tracking-wider">TIME UNTIL LAUNCH</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HOURS' },
              { value: timeLeft.minutes, label: 'MINUTES' },
              { value: timeLeft.seconds, label: 'SECONDS' }
            ].map((item) => (
              <div key={item.label} className="bg-purple-800/50 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold">{item.value}</div>
                <div className="text-purple-300 text-sm tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;