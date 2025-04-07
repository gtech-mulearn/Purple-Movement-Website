import CountdownTimer from "./components/CountDown/Counter";
import Manifesto from "./components/Manifesto/manifesto";
import './App.css';

function App() {
  const targetDate = new Date("2025-06-07T00:00:00");

  return (
    <div className="app-container">
      <div className="animated-background">
        <div className="gradient-sphere gradient-sphere-1"></div>
        <div className="gradient-sphere gradient-sphere-2"></div>
        <div className="gradient-sphere gradient-sphere-3"></div>
      </div>
      <div className="content-wrapper">
        <nav className="main-nav">
          <div className="nav-logo">Purple Movement</div>
          <div className="nav-links">
            <a href="#manifesto">Manifesto</a>
            <a href="#countdown">Timeline</a>
            <a href="#join" className="nav-cta">Join Us</a>
          </div>
        </nav>
        
        <section id="manifesto" className="manifesto-section">
          <Manifesto />
        </section>

        <section id="countdown" className="countdown-section">
          <CountdownTimer endTime={targetDate} />
        </section>

        <footer className="main-footer">
          <div className="footer-content">
            <div className="footer-logo">Purple Movement</div>
            <div className="footer-links">
              <a href="#manifesto">Manifesto</a>
              <a href="#countdown">Timeline</a>
              <a href="#join">Join Us</a>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Discord</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Purple Movement. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
