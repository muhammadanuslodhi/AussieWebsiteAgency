import React from 'react';
// Image path check karlein
import Element12 from "../assets/Images/facts.png";

const OurFacts = () => {
  return (
    <section className="relative py-16 lg:py-32 overflow-hidden border-t-3 border-blue-900">

      <div className="absolute top-0 left-0 z-0 pointer-events-none w-full md:w-[50%] lg:w-[48%] h-full opacity-90">
        <img src={Element12} alt="decorative" className="w-[72%] object-contain object-left scale-110 lg:scale-125 origin-left" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-wrap items-center">

          <div className="hidden lg:block lg:w-5/12"></div>

          {/* Fact Box Content */}
          <div className="w-full lg:w-7/12">
            <div className="relative">
              {/* "Fac" Watermark Text */}
              <div className="absolute -top-12 -left-6 text-[90px] md:text-[150px] font-extrabold text-white/5 select-none pointer-events-none leading-none z-0">
                Facts
              </div>

              <div className="relative z-10 space-y-6">
                <h5 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                  Satisfying Our Clients
                </h5>
                <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
                  We work with the belief that our clients represent us, thus we make sure that what they get
                  helps them reach their full potential and achieve milestones as the company grows.
                </p>

                {/* Stats List - Pure White and Cyan for visibility */}
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-8">
                  <li className="space-y-1">
                    <h6 className="text-4xl md:text-5xl font-black text-blue-400">1200+</h6>
                    <p className="text-xs md:text-sm font-bold text-white uppercase tracking-[2px]">Projects Done</p>
                  </li>
                  <li className="space-y-1">
                    <h6 className="text-4xl md:text-5xl font-black text-blue-400">1000+</h6>
                    <p className="text-xs md:text-sm font-bold text-white uppercase tracking-[2px]">Happy Clients</p>
                  </li>
                  <li className="space-y-1">
                    <h6 className="text-4xl md:text-5xl font-black text-blue-400">94.3%</h6>
                    <p className="text-xs md:text-sm font-bold text-white uppercase tracking-[2px]">Success Rate</p>
                  </li>
                </ul>

                <div className="pt-6">
                  <ul className="flex flex-wrap items-center gap-6 lg:gap-10">
                    <li>
                      <a href="/contact">
                        <button className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20">
                          Get In Touch
                          <span className="absolute top-[-4px] right-[-4px] flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-300 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-400"></span>
                          </span>
                        </button>


                      </a>
                    </li>
                    {/* <li className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Call Us At</span>
                      <a href="tel:+611800317347" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">
                        +61 (1800) 317347
                      </a>
                    </li> */}
                    {/* <li className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Click Here To</span>
                      <button className="text-white font-bold text-lg hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-400 text-left">
                        Live Chat <i className="fa-brands fa-weixin ml-1 text-blue-400"></i>
                      </button>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 lg:mt-40 border-t border-white/10 pt-16">
          <div className="space-y-4 group">
            <h5 className="flex items-center gap-4 text-2xl font-bold text-white">
              <span className="w-12 h-[3px] bg-blue-500 inline-block transition-all group-hover:w-16"></span>
              Our Mission
            </h5>
            <p className="text-gray-300 leading-relaxed text-lg">
              We operate with the goal of providing ground-breaking digital solutions to businesses all
              over the world while also setting the road for socially responsible enterprises.
            </p>
          </div>

          <div className="space-y-4 group">
            <h5 className="flex items-center gap-4 text-2xl font-bold text-white">
              <span className="w-12 h-[3px] bg-blue-500 inline-block transition-all group-hover:w-16"></span>
              Our Vision
            </h5>
            <p className="text-gray-300 leading-relaxed text-lg">
              Diversify the tech world and make it to the top of the digital community by developing the
              finest product and leveraging businesses to inspire entrepreneurs via the power of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFacts;