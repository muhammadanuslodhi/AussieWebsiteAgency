import React from 'react';

// Images Import
import Element5 from "../assets/Images/element-5.png";
import Element14 from "../assets/Images/element-14.png";
import Element11 from "../assets/Images/element-11.png";
import Element16 from "../assets/Images/element-16.png";

const DigitalSuccess = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Heading Section */}
        <div className="mb-16">
          <div className="w-full">
            <div className="text-left space-y-4">
              <h6 className="text-blue-600 text-sm md:text-base font-bold uppercase tracking-[4px]">
                We specialise in
              </h6>
              <h2 className="text-3xl text-white md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] lg:max-w-4xl">
                Leading you to ultimate digital success through creativity and determination.
              </h2>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">
          {/* Left Side Paragraph */}
          <div className="w-full lg:w-5/12">
            <div className="relative border-l-4 border-blue-600 pl-8 py-2">
              <p className="text-gray-600 text-xl leading-relaxed font-medium text-white">
                "We provide a wide range of digital services, but at each level, our work is guided by a
                single goal: to increase traffic to your brand."
              </p>
            </div>
          </div>

          {/* Right Side Content & Buttons */}
          <div className="w-full lg:w-7/12">
            <div className="space-y-8">
              <p className="text-gray-500 text-lg leading-relaxed text-white">
                Businesses and individuals can benefit from our comprehensive and creative digital solutions,
                which have proven to be productive. Success will be knocking on your door if you have an
                experienced team of specialists at your disposal and a high-level marketing strategy.
              </p>
              
              <div className="flex flex-wrap items-center gap-5">
                <a href="/contact">
                  <button  className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20">
                    Get Started
                  </button>
                </a>
                <button className="group flex items-center gap-2 text-slate-900 font-bold py-4 px-10 rounded-full border-2 border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                  Chat Now
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Background Floating Elements --- */}

      {/* Element 16 - Top Left (Floating) */}
      <div className="absolute top-10 left-[5%] opacity-40 animate-bounce-slow">
        <img src={Element16} alt="decor" className="w-16 md:w-24 pointer-events-none" />
      </div>
      
      {/* Element 14 - Bottom Left (Rotating) */}
      <div className="absolute bottom-10 left-[2%] opacity-30 animate-spin-slow">
        <img src={Element14} alt="decor" className="w-20 md:w-32 pointer-events-none" />
      </div>

      {/* Element 11 - Right Center (Floating Side to Side) */}
      <div className="hidden lg:block absolute top-1/3 right-10 opacity-20 animate-float-x">
        <img src={Element11} alt="decor" className="w-32 rotate-45 pointer-events-none" />
      </div>

      {/* Element 5 - Bottom Right (Pulse Effect) */}
      <div className="absolute bottom-[-5%] right-[5%] opacity-10 pointer-events-none animate-pulse">
        <img src={Element5} alt="decor" className="w-64 md:w-96" />
      </div>

      {/* Additional Element 16 - Top Right */}
      <div className="absolute top-[15%] right-[15%] opacity-20 animate-bounce-slow">
        <img src={Element16} alt="decor" className="w-12 pointer-events-none" />
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-x {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(30px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-bounce-slow {
          animation: float-y 6s ease-in-out infinite;
        }
        .animate-float-x {
          animation: float-x 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default DigitalSuccess;