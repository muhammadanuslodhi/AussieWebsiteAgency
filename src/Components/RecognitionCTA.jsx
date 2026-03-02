import React from 'react';

import first from "../assets/Images/cta-3-1.png"
import trust from "../assets/Images/cta-3-trust-pilot.png"
import last from "../assets/Images/cta-3-element-2.png"
import speaker from "../assets/Images/cta-3-speaker.png"

const RecognitionCTA = () => {
    return (
        <section className="relative w-full bg-[#0a0e17] overflow-hidden font-['Poppins',_sans-serif]">
            {/* Main Gradient Banner */}
            {/* lg:flex-row desktop ke liye, flex-col mobile ke liye */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-[180px] bg-gradient-to-r from-[#c2153d] via-[#e63946] to-[#f44336] px-6 py-10 lg:py-0">

                {/* Left: Screens Image - Mobile/Tablet par center align */}
                <div className="w-full lg:w-auto flex justify-center lg:flex-shrink-0">
                    <img
                        src={first}
                        alt="Devices"
                        className="h-32 md:h-40 lg:h-48 xl:h-52 object-contain"
                    />
                </div>

                {/* Middle Left: Text - Tablet par font size adjust kiya hai */}
                <div className="text-white text-center lg:text-left w-full lg:w-auto">
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold uppercase leading-tight tracking-tight">
                        We are widely <br className="hidden lg:block" /> Recognized
                    </h4>
                </div>

                {/* Middle Right: Team/Trust Logos - Tablet (md) par show honge, mobile par hidden */}
                <div className="hidden md:flex xl:flex items-center justify-center gap-4 lg:gap-6">
                    <img src={trust}  alt="Trust Pilot" className="h-32 md:h-40 lg:h-48 xl:h-52 object-contain"/>
                    <img src={speaker} alt="Speaker" className="h-32 md:h-40 lg:h-48 xl:h-52 object-contain"/>
                </div>

                {/* Right Area: CTA Actions */}
                <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-row items-center justify-center gap-6 lg:gap-8">
                    <div className="text-white text-center lg:text-left">
                        <p className="text-xs md:text-sm font-medium opacity-90 mb-3">
                            Get In Touch <span className="opacity-75 lg:block xl:inline">With Our Support Agent or</span>
                        </p>
                        
                        <div className="flex flex-row items-center justify-center lg:justify-start gap-4">
                            <a href="/contact">
                            <button className="bg-white text-[#e63946] px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold text-[11px] md:text-xs lg:text-sm shadow-xl hover:bg-[#0a0e17] hover:text-white transition-all uppercase whitespace-nowrap">
                                Order Now
                            </button>
                            </a>
                            
                            {/* Live Chat Text */}
                            {/* <div className="flex flex-col items-start">
                                <span className="text-[9px] md:text-[10px] uppercase opacity-75 leading-none mb-1">Click here to</span>
                                <a href="#" className="font-bold text-sm md:text-base text-white border-b-2 border-white hover:text-[#0a0e17] hover:border-[#0a0e17] transition-all leading-tight">
                                    Live Chat
                                </a>
                            </div> */}
                        </div>
                    </div>
                    
                    {/* Speaker Icon - Only on Desktop (lg+) */}
                    <div className="hidden lg:block flex-shrink-0">
                        <img src={last} alt="icon" className="h-32 md:h-40 lg:h-48 xl:h-52 object-contain" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default RecognitionCTA;