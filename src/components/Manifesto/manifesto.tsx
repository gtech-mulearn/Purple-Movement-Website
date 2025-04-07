import React from "react";
import "./manifesto.css";
import { Sparkles, ArrowRight, Star } from 'lucide-react';
const Manifesto = () => {
 
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero">
        {/* Animated Background */}
        <div className="background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <div className="header">
            <div className="title-wrapper">
              <Sparkles className="icon" />
              <h2 className="subtitle">PURPLE MOVEMENT</h2>
              <Sparkles className="icon" />
            </div>
            <h1 className="title">
              We are the <span className="highlight-orange">Manifestors of Change.</span>
            </h1>
            <p className="hero-text">
              We are not waiting for the future.<br />
              We are building it—with courage, code, creativity, and clarity.
            </p>
            <button className="cta-button">
              <span>Join the Movement</span>
              <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Manifesto Section */}
      <div className="manifesto">
        <div className="manifesto-content">
          <p className="manifesto-text">
            We are the voice of a generation that refuses to settle.<br />
            We are not consumers of culture.<br />
            We are <span className="highlight-red">producers of purpose</span>.<br />
            We break barriers, not just for ourselves, but for every young mind daring to dream.
          </p>

          <p className="manifesto-text">
            We believe in ecosystems that empower, not limit.<br />
            In access, not gatekeeping.<br />
            In bold visions, not borrowed templates.
          </p>

          <div className="star-divider">
            <Star className="star" />
            <Star className="star star-middle" />
            <Star className="star" />
          </div>

          <p className="manifesto-text">
            We are here to <span className="highlight-orange">reclaim the narrative</span>—<br />
            To give confidence to the curious,<br />
            Networks to the bold,<br />
            And direction to the determined.
          </p>

          <p className="manifesto-bold">
            This is <span className="highlight-orange">The Purple Movement</span>.<br />
            A wave of youth power, purpose, and possibility.<br />
            A signal that change is not coming—it's already here.
          </p>
        </div>

        <div className="manifesto-footer">
          <p className="tagline">
            We are the energy.<br />
            We are the strategy.<br />
            We are the spark.
          </p>

          <p className="callout">And it starts now.</p>
        </div>
      </div>
    </div>
  );
}

export default Manifesto;
