'use client';
import React, { useState } from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

export default function CTA() {
    const [hover1, setHover1] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <div className="bg-primary h-[80vh] py-20 flex flex-col items-center justify-center w-full">
            {/* Section Header */}
            <div className="container flex flex-col items-center gap-16 py-20 text-center text-accent px-5 md:px-20">
                <Slide direction="up" triggerOnce>
                    <h1 className="text-3xl md:text-7xl font-bold">Are You The One?</h1>
                </Slide>

                <Fade triggerOnce>
                    <p className="text-lg md:text-xl">
                        Our ideal customer personas are small to medium-sized business owners, marketing managers, and ad moguls looking to make their brand be seen. They value the power of strategy with creativity, and believe in results, rather than buzz.
                        <br />
                        <br />
                        If you're that persona looking to navigate the digital marketing scene and give your brand the visibility it deserves, you're the one for us. Hope we're the one for you too.
                    </p>
                </Fade>
            </div>

            {/* Call to Action Buttons */}
            <div className="bg-accent  w-full py-10 md:h-[55vh]">
                <div className="flex flex-col md:flex-row justify-center items-center -mt-24 w-full max-w-6xl mx-auto">
                    {/* Button 1 */}
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="bg-gray-900 max-md:hidden hover:cursor-pointer text-accent hover:bg-orange-500 shadow-sm justify-center items-center gap-5 hover:shadow-xl hover:scale-[1.01] duration-500 flex flex-col ease-in transition-all w-full md:w-1/2 p-6"
                    >
                        <h6 className={`text-sm ${hover ? 'text-black' : 'text-orange-500'} text-center uppercase`}>
                            Tea or Coffee?
                        </h6>
                        <h1 className="text-4xl  md:text-6xl drop-shadow-lg font-bold text-center">Take the Call</h1>
                    </div>

                    {/* Button 2 */}
                    <div
                        onMouseEnter={() => setHover1(true)}
                        onMouseLeave={() => setHover1(false)}
                        className="bg-black max-md:hidden text-accent hover:bg-orange-500 shadow-sm justify-center items-center gap-5 hover:shadow-xl hover:scale-[1.01] duration-500 flex flex-col ease-in transition-all w-full md:w-1/2 p-6"
                    >
                        <h6 className={`text-sm ${hover1 ? 'text-black' : 'text-orange-500'} text-center uppercase`}>
                            Who are we?
                        </h6>
                        <h1 className="text-4xl md:text-6xl drop-shadow-lg font-bold text-center">Know About Us</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
