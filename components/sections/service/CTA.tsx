'use client'
import React, { useState } from 'react'
import { Slide, Fade, Reveal } from "react-awesome-reveal";


export default function CTA() {
    const [hover1, setHover1] = useState(false)
    const [hover, setHover] = useState(false)

    return (
        <div className="bg-primary flex flex-col items-center justify-center h-full w-full">
            <div className='flex gap-16 text-center  py-40 px-20  container text-accent flex-col'>
                <Slide direction='up' triggerOnce>
                    <h1 className="text-7xl  font-bold">Are You The One? </h1>
                </Slide>

                <Fade triggerOnce>
                    <p className="text-xl">Our ideal customer personas are small to medium-sized business owners, marketing managers, and ad moguls looking to make their brand be seen. They value the power of strategy with creativity, and believe in results, rather than buzz.
                        <br />
                        <br />
                        If you're that persona looking to navigate the digital marketing scene and give your brand the visibility it deserves, you're the one for us.
                        Hope we're the one for you too.
                    </p>
                </Fade>
            </div>
            <div className="h-[35vh] flex justify-center bg-accent w-full">
                <div className="  -mt-24 flex w-[90vw] h-full">
                    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="bg-gray-900 text-accent hover:bg-orange-500 shadow-sm justify-center items-center duration-300 gap-5 hover:shadow-xl shadow-gray-400 hover:scale-[1.01] duration-500 flex flex-col    ease-in transition-all w-1/2">
                        <h6 className={`text-sm  ${hover ? 'text-black' : 'text-orange-500'} text-center uppercase`}>tea or coffee?</h6>
                        <h1 className="text-6xl drop-shadow-lg font-bold text-center">Take the call</h1>
                    </div>
                    <div onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)} className="w-1/2 bg-black text-accent hover:bg-orange-500 shadow-sm justify-center items-center duration-300 gap-5 hover:shadow-xl shadow-gray-400 hover:scale-[1.01] duration-500 flex flex-col     ease-in transition-all">
                        <h6 className={`text-sm  ${hover1 ? 'text-black' : 'text-orange-500'} text-center uppercase`}>Who are we?</h6>
                        <h1 className="text-6xl drop-shadow-lg font-bold text-center">Know About Us</h1>

                    </div>
                </div>
            </div >
        </div >
    )
}
