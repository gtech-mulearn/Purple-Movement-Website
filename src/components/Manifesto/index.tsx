
import { useState } from "react";

const Manifesto = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={` mt-12 md:w-1/2 h-[450px] w-[90%] flex justify-center items-start ${
    expanded ? 'mb-[70vh] md:mb-[50vh]' : 'mb-10 md:mb-[50vh]'
  }`}
    >
      <div className="tracking-[0.2em] text-purple-100 w-full max-w-md space-y-3">
        <div className="space-y-1">
          <h2
            className={`font-varien tracking-[0.1em] leading-tight text-3xl font-extrabold`}
          >
            Manifestors
          </h2>
          <div className={`font-NuraNormal`}>
            <div className="space-y-1">
              <p className="text-[12px]">We are the Manifestors of Change.</p>
              <p className="text-[12px]">We are not waiting for the future.</p>
              <p className="text-[12px]">
                We are building it—with courage, code, creativity, and clarity.
              </p>
            </div>
            <div className="space-y-1 text-[12px]">
              <p>We are the voice of a generation that refuses to settle.</p>
              <p>We are not consumers of culture.</p>
              <p>
                We are{" "}
                <span className="text-[#a632ff] font-semibold">
                  producers of purpose
                </span>
                .
              </p>
              <p>
                We break barriers, not just for ourselves, but for every young
                mind daring to dream.
              </p>
            </div>

            {expanded && (
              <>
                <div className="space-y-1 text-[12px]">
                  <p>We believe in ecosystems that empower, not limit.</p>
                  <p>In access, not gatekeeping.</p>
                  <p>In bold visions, not borrowed templates.</p>
                </div>

                <div className="space-y-1 text-[12px]">
                  <p>
                    We are here to{" "}
                    <span className="text-[#a632ff] font-semibold">
                      reclaim the narrative
                    </span>
                    —
                  </p>
                  <p>To give confidence to the curious,</p>
                  <p>Networks to the bold,</p>
                  <p>And direction to the determined.</p>
                </div>

                <div className="space-y-1">
                  <p className="text-[12px] font-semibold">
                    This is{" "}
                    <span className="text-[#a632ff]">The Purple Movement</span>.
                  </p>
                  <p className="text-[12px]">
                    A wave of youth power, purpose, and possibility.
                  </p>
                  <p className="text-[12px]">
                    A signal that change is not coming—it's already here.
                  </p>
                </div>

                <div className="space-y-1 text-[12px]">
                  <p>We are the energy.</p>
                  <p>We are the strategy.</p>
                  <p>We are the spark.</p>
                </div>

                <p className="text-xl font-bold text-[#a632ff]">
                  AND IT STARTS NOW.
                </p>
              </>
            )}
          </div>

          {/* Toggle button */}
              <button
        onClick={() => setExpanded(!expanded)}
        className={`float-end underline text-white px-3 py-1 text-sm rounded-full font-serif ease-in-out focus:outline-none transition-all duration-300`}
      >
        {expanded ? "Show Less" : "Read More"}
      </button>

        </div>
      </div>
    </div>
  );
};

export default Manifesto;
