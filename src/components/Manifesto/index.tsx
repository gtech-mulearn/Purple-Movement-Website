import { Star } from 'lucide-react';

const Manifesto = () => {
    return (
        <>
       
            <div className="text-center space-y-8">
                

                <h2 className="tracking-[0.2em] leading-tight text-2xl md:text-4xl pt-16 font-semibold pb-4 text-white">
                    We are the Manifestors of Change.
                </h2>

                <div className="space-y-4 text-purple-200">
                    <p className="text-xl">We are not waiting for the future.</p>
                    <p className="text-xl">
                        We are building it—with courage, code, creativity, and clarity.
                    </p>
                </div>

                <button className="bg-purple-600 hover:bg-purple-700 transition  duration-300 ease-in-out px-8 py-3 rounded-full text-lg font-semibold text-white shadow-lg shadow-purple-600/80 hover:shadow-purple-700/180">
                    Join the Movement →
                </button>
            </div >

            {/* Manifesto Section */}
            <div className="space-y-12 text-center text-purple-100 mt-24" >
                <div className="space-y-6">
                    <p className="text-xl">We are the voice of a generation that refuses to settle.</p>
                    <p className="text-xl">We are not consumers of culture.</p>
                    <p className="text-xl">
                        We are <span className="text-[#E879F9] font-semibold">producers of purpose</span>.
                    </p>
                    <p className="text-xl">
                        We break barriers, not just for ourselves, but for every young mind daring to dream.
                    </p>
                </div>

                <div className="space-y-4">
                    <p className="text-xl">We believe in ecosystems that empower, not limit.</p>
                    <p className="text-xl">In access, not gatekeeping.</p>
                    <p className="text-xl">In bold visions, not borrowed templates.</p>
                </div>

                <div className="flex justify-center gap-4">
                    <Star className="w-6 h-6 text-purple-500" />
                    <Star className="w-6 h-6 text-purple-300" />
                    <Star className="w-6 h-6 text-purple-500" />
                </div>

                <div className="space-y-4">
                    <p className="text-xl">
                        We are here to <span className="text-[#E879F9] font-semibold">reclaim the narrative</span>—
                    </p>
                    <p className="text-xl">To give confidence to the curious,</p>
                    <p className="text-xl">Networks to the bold,</p>
                    <p className="text-xl">And direction to the determined.</p>
                </div>

                <div className="space-y-4">
                    <p className="text-2xl font-semibold">
                        This is <span className="text-[#E879F9]">The Purple Movement</span>.
                    </p>
                    <p className="text-2xl">A wave of youth power, purpose, and possibility.</p>
                    <p className="text-2xl">A signal that change is not coming—it's already here.</p>
                </div>

                <div className="space-y-2">
                    <p className="text-xl">We are the energy.</p>
                    <p className="text-xl">We are the strategy.</p>
                    <p className="text-xl">We are the spark.</p>
                </div>

                <p className="text-4xl font-bold text-[#E879F9]">AND IT STARTS NOW.</p>
            </div >
        </>
    );
};

export default Manifesto;
