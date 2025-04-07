import React from "react";
import "./manifesto.css";

const Manifesto = () => {
  return (
    <div className="manifesto-container">
      <div className="manifesto-wrapper">
        <div className="manifesto-header">
          <div className="manifesto-title-box">
            <span className="manifesto-title">PURPLE</span>
            <span className="manifesto-subtitle">MOVEMENT</span>
          </div>
        </div>
      <div className="manifesto-text-wrapper">
      <h1 className="manifesto-main-title">
          We are the <span className="highlight-orange">Manifestors of Change.</span>
        </h1>

        <p className="manifesto-text">
          We are not waiting for the future. <br />
          We are building it—with courage, code, creativity, and clarity.
        </p>

        <p className="manifesto-text">
          We are the voice of a generation that refuses to settle. <br />
          We are not consumers of culture. <br />
          We are <span className="highlight-red">producers of purpose</span>. <br />
          We break barriers, not just for ourselves, but for every young mind daring to dream.
        </p>

        <p className="manifesto-text">
          We believe in ecosystems that empower, not limit. <br />
          In access, not gatekeeping. <br />
          In bold visions, not borrowed templates.
        </p>

        <p className="manifesto-text">
          We are here to <span className="highlight-orange">reclaim the narrative</span>— <br />
          To give confidence to the curious, <br />
          Networks to the bold, <br />
          And direction to the determined.
        </p>

        <p className="manifesto-text">
          This is <span className="highlight-orange">The Purple Movement</span>. <br />
          A wave of youth power, purpose, and possibility. <br />
          A signal that change is not coming—it’s already here.
        </p>

        <p className="manifesto-text">
          This movement is not for the sidelines. <br />
          It’s for the doers, the builders, the ones who say, <br />
          <span className="highlight-red">“Why not us?”</span>
        </p>

        <p className="manifesto-tagline">
          We are the energy. <br />
          We are the strategy. <br />
          We are the spark.
        </p>

        <p className="manifesto-callout">And it starts now.</p>
      </div>
      
      </div>
    </div>
  );
};

export default Manifesto;
