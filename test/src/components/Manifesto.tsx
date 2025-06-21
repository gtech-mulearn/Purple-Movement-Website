import { QuoteIcon } from "lucide-react";
import { useState } from "react";
import char1 from "../assets/images/char1.png";

const Manifesto = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className={` grid px-2 gap-2 items-center `}>
            <div className="grid md:col-span-2 md:row-span-5 md:col-start-2 ">
                <div className="text-[12px] md:text-[15px] leading-relaxed p-2">
                    {" "}
                    {/* More natural line height */}
                    <h2 className="font-varien tracking-[0.1em] text-[20px] mb-5 leading-tight md:text-3xl font-extrabold">
                        Our <span className="text-purple-600 font-Montserrat">Manifesto</span>
                    </h2>
                    <div className="font-Poppins font-semibold italic space-y-1 border-l-[10px] px-2 rounded border-purple-600 mb-2">
                        <p>We are the Manifestors of Change.</p>
                        <p>We are not waiting for the future.</p>
                    </div>
                    <QuoteIcon size={20} />
                    <div className="space-y-2 m-2 leading-relaxed font-Poppins font-semibold italic">
                        <p>We are building it</p>
                        <p>With courage code, creativity, and clarity.</p>
                        <p>We are the voice of a generation</p>
                        <p>That refuses to settle.</p>
                        <p>We are not consumers of culture.</p>
                        <p>
                            We are{" "}
                            <span className="text-[#a632ff] font-semibold">
                                producers of purpose
                            </span>
                            .
                        </p>
                        <p>We break barriers, not just for ourselves</p>
                        <p>But for every young mind daring to dream.</p>
                    </div>
                    {expanded && (
                        <div className="space-y-2 m-2 leading-relaxed font-Poppins font-semibold italic">
                            <p>We believe in ecosystems that empower, not limit.</p>
                            <p>In access, not gatekeeping.</p>
                            <p>In bold visions, not borrowed templates.</p>
                            <p>
                                We are here to{" "}
                                <span className="text-[#a632ff]">reclaim the narrative</span>—
                            </p>
                            <p>To give confidence to the curious,</p>
                            <p>Networks to the bold,</p>
                            <p>And direction to the determined.</p>
                            <p>
                                This is{" "}
                                <span className="text-[#a632ff]">The Purple Movement</span>.
                            </p>
                            <p>A wave of youth power, purpose, and possibility.</p>
                            <p>A signal that change is not coming—</p>
                            <p>It's already here.</p>
                            <p>We are the energy.</p>
                            <p>We are the strategy.</p>
                            <p>We are the spark.</p>
                        </div>
                    )}
                    <QuoteIcon size={20} />
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="underline text-white px-5 w-[150px] mx-[150px] py-1 md:mx-[200px] md:text-sm rounded-full ease-in-out focus:outline-none transition-all duration-300"
                    >
                        {expanded ? "Show Less" : "Read More"}
                    </button>
                    <p className="leading-relaxed font-bold border-l-[10px] px-2 rounded border-purple-600">
                        This is Purple Movement <br />
                        Learning with purpose. Power by people
                    </p>
                </div>
            </div>

            <div className="w-full  justify-around flex md:row-5 md:col-start-3">
                <img src={char1} className="w-[280px]" />
            </div>
        </div>
    );
};

export default Manifesto;
