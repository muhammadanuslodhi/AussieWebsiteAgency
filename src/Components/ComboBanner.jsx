import React from 'react';
import Banner1 from "../assets/Images/Banner.png";

const AboutBanner = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0d14] py-16 lg:py-32 xl:py-40 min-h-[500px] flex items-center">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center">
          
          {/* Left Content: Full width on mobile, 7/12 on desktop */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <div className="space-y-6">
              <h6 className="text-blue-400 text-sm md:text-lg font-semibold tracking-[3px] uppercase">A True One-Stop Shop for</h6>
              
              <h2 className="text-4xl md:text-6xl xl:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent leading-tight">Combo Package to Get High Quality Services by Us</h2>
              
              <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Aussie Website Agency is an Australia based agency for graphics and logo design in
                Australia, who create holistic brands for Australian businesses. Our work encompasses logo
                and identity design, graphic design, website design, advertising and communications.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                <a href="/contact">
                  <button  className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20">
                    Get Started
                  </button>
                </a>
                
                {/* <a href="#" className="flex items-center gap-2 text-white hover:text-blue-400 transition-all font-medium group">
                   <span className="p-2 rounded-full bg-white/5 group-hover:bg-blue-600/20 transition-all">
                    <i className="fa-brands fa-weixin"></i>
                   </span>
                   <span className="border-b border-blue-500/30 group-hover:border-blue-400 pb-1">Live Chat</span>
                </a> */}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Right Image: 
          - 'hidden': Mobile/Tablet (0px to 1023px) par hide rahegi.
          - 'lg:block': Desktop (1024px+) par show hogi.
      */}
      <div className="hidden lg:block absolute right-[5%] xl:right-[10%] top-1/2 -translate-y-1/2 w-[30%] xl:w-[35%] max-w-[550px]">
        <img 
          src={Banner1} 
          alt="Banner Illustration" 
          className="w-full h-auto object-contain animate-float"
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutBanner;