import React, { useState } from 'react';

import service1 from "../assets/Images/1.png"
import service2 from "../assets/Images/2.png"
import service3 from "../assets/Images/3.png"
import service4 from "../assets/Images/4.png"
import service5 from "../assets/Images/5.png"
import service6 from "../assets/Images/6.png"
import service7 from "../assets/Images/7.png"
import service8 from "../assets/Images/8.png"

const services = [
  { id: 1, title: "Brand Strategy", img: service1  },
  { id: 2, title: "Digital Development", img: service2 },
  { id: 3, title: "Technology Consulting", img: service3  },
  { id: 4, title: "Identity Design", img: service4  },
  { id: 5, title: "Content Management", img: service5  },
  { id: 6, title: "Interface Design", img: service6},
  { id: 7, title: "Digital Strategy", img: service7  },
  { id: 8, title: "Web & Mobile Applications", img: service8 },
];

const PremiumServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Total 8 cards hain, desktop par 4 dikh rahe hain, to max scroll 4 tak hoga (8 - 4 = 4)
  const maxIndex = services.length - 4;

  return (
    <section className="py-20 lg:py-32 bg-[#0a192f] overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h6 className="text-blue-400 font-bold uppercase tracking-[3px] text-sm mb-4">
            Aussies Website Agency Services
          </h6>
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6">
            We Provide A Wide Range Of Premium Services
          </h3>
        </div>

        {/* --- Slider Container --- */}
        <div className="relative">
          {/* Viewport: Iske andar cards move honge */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="min-w-full sm:min-w-[50%] lg:min-w-[25%] px-3"
                >
                  <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-800">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6 w-full">
                      <h4 className="text-xl font-bold text-white leading-tight">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* --- Pagination Dots --- */}
          <div className="flex justify-center gap-3 mt-12">
            {/* Jitne cards scroll ho sakte hain (8 items - 4 visible + 1) */}
            {[...Array(services.length - 3)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 transition-all duration-300 rounded-full ${
                  currentIndex === index 
                  ? "w-8 bg-blue-500" 
                  : "w-3 bg-gray-600 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PremiumServices;