import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo1 from "../assets/Images/icon1.webp"
import logo2 from "../assets/Images/icon2.webp"
import logo3 from "../assets/Images/icon3.webp"
import logo4 from "../assets/Images/icon4.webp"
import logo5 from "../assets/Images/icon5.webp"
import logo6 from "../assets/Images/icon6.webp"
import logo7 from "../assets/Images/icon7.webp"
import logo8 from "../assets/Images/icon8.webp"

import web1 from "../assets/Images/web1.webp"
import web2 from "../assets/Images/web2.webp"
import web3 from "../assets/Images/web3.webp"
import web4 from "../assets/Images/web4.webp"
import web5 from "../assets/Images/web5.webp"
import web6 from "../assets/Images/web6.webp"

import dm1 from "../assets/Images/dm1.webp"
import dm2 from "../assets/Images/dm2.webp"
import dm3 from "../assets/Images/dm3.webp"
import dm4 from "../assets/Images/dm4.webp"
import dm5 from "../assets/Images/dm5.webp"
import dm6 from "../assets/Images/dm6.webp"

import ma1 from "../assets/Images/ma1.webp"
import ma2 from "../assets/Images/ma2.webp"
import ma3 from "../assets/Images/ma3.webp"
import ma4 from "../assets/Images/ma4.webp"
import ma5 from "../assets/Images/ma5.webp"
import ma6 from "../assets/Images/ma6.webp"

import va1 from "../assets/Images/va1.webp"
import va2 from "../assets/Images/va2.webp"
import va3 from "../assets/Images/va3.webp"
import va4 from "../assets/Images/va4.webp"
import va5 from "../assets/Images/va5.webp"
import va6 from "../assets/Images/va6.webp"


import mc1 from "../assets/Images/mc1.webp"
import mc2 from "../assets/Images/mc2.webp"
import mc3 from "../assets/Images/mc3.webp"
import mc4 from "../assets/Images/mc4.webp"
import mc5 from "../assets/Images/mc5.webp"
import mc6 from "../assets/Images/mc6.webp"

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("Logo Design");

  const services = {
    "Logo Design": [
      { id: 1, title: "Iconic Logo", img: logo1 },
      { id: 2, title: "Typographic Logo", img: logo2 },
      { id: 3, title: "Illustrative Logo", img: logo3},
      { id: 4, title: "Animated Logo", img: logo4 },
      { id: 5, title: "3D Logo", img: logo5 },
      { id: 6, title: "Wordmark Logo", img: logo6 },
      { id: 7, title: "Emblem Logo", img: logo7 },
      { id: 8, title: "2D Logo", img: logo8 },
    ],
    "Website Design": [
      { id: 1, title: "Static Website", img: web1},
      { id: 2, title: "B2B Portal", img: web2 },
      { id: 3, title: "E-commerce Site", img: web3 },
      { id: 4, title: "Web Development", img: web4 },
      { id: 5, title: "CMS Website", img: web5 },
      { id: 6, title: "Landing Page", img: web6 },
    ],
    "Digital Marketing": [
      { id: 1, title: "SEO", img: dm1 },
      { id: 2, title: "SMM", img: dm2 },
      { id: 3, title: "PPC Advertising", img: dm3},
      { id: 4, title: "Content Writing", img: dm4 },
      { id: 5, title: "Email Marketing", img: dm5 },
      { id: 6, title: "Brand Strategy", img: dm6 },
    ],
    "Mobile Apps": [
      { id: 1, title: "Hybrid App", img: ma1 },
      { id: 2, title: "Native App", img: ma2 },
      { id: 3, title: "iOS App", img: ma3 },
      { id: 4, title: "Android App", img: ma4 },
      { id: 5, title: "React Native", img: ma5},
      { id: 6, title: "Flutter App", img: ma6 },
    ],
    "Video Animation": [
      { id: 1, title: "2D Animation", img: va1 },
      { id: 2, title: "3D Animation", img: va2 },
      { id: 3, title: "Logo Animation", img: va3 },
      { id: 4, title: "Explainer Videos", img: va4 },
      { id: 5, title: "Whiteboard Animation", img: va5 },
      { id: 6, title: "Motion Graphics", img: va6 },
    ],
    "Marketing Collateral": [
      { id: 1, title: "Stationery Design", img: mc1 },
      { id: 2, title: "Brochure Design", img: mc2 },
      { id: 3, title: "Banner Design", img: mc3},
      { id: 4, title: "Flyer Design", img: mc4 },
      { id: 5, title: "Packaging Design", img: mc5},
      { id: 6, title: "PowerPoint Design", img: mc6 },
    ],
  };

  const categories = Object.keys(services);

  return (
    <section className="bg-[#050a18] py-20 px-6 font-['Poppins',_sans-serif] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <motion.h6 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#e63946] font-medium text-sm md:text-base mb-2 tracking-wider uppercase"
          >
            Empowering Your Success with Unmatched Services
          </motion.h6>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-tight leading"
          >
            Unleash Your Business's Digital Potential <br />
            With Our Expert Builds
          </motion.h2>
          <p className="text-gray-400 text-sm md:text-md max-w-3xl mx-auto font-light">
            Designing Impactful Logos, Websites, and Video Animations Tailored to Your Goals and Target Audience
          </p>
        </div>

        {/* Tab Navigation (Animated Underline) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 border-b border-gray-800 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-4 py-3 text-xs md:text-sm font-bold uppercase transition-all duration-300 ${
                activeTab === cat ? "text-white" : "text-gray-500 hover:text-white"
              }`}
            >
              <span className="relative z-10">{cat}</span>
              
              {/* Animated Underline */}
              {activeTab === cat && (
                <motion.div
                  layoutId="activeUnderlineServices"
                  className="absolute bottom-[-2px] left-0 right-0 h-[3px] bg-[#e63946] z-20"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services Grid (Animated Content Change) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {services[activeTab]?.map((item) => (
              <motion.div 
                key={`${activeTab}-${item.id}`} // Unique key ensures animation re-triggers
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center bg-transparent border border-gray-800/60 p-10 rounded-[45px] hover:border-red-600 transition-all duration-500 group cursor-pointer hover:shadow-[0_0_30px_rgba(230,57,70,0.1)]"
              >
                <div className="w-20 h-20 mb-6 transform group-hover:scale-110 transition-transform duration-500">
                  <img  src={item.img}  alt={item.title} className="w-full h-full object-contain  transition-all"/>
                </div>
                <h4 className="text-gray-300 text-lg font-medium text-center group-hover:text-white transition-colors">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty Category Handler */}
        {services[activeTab].length === 0 && (
            <p className="text-center text-gray-500 italic mt-10 font-light">New services arriving soon...</p>
        )}

      </div>
    </section>
  );
};

export default ServiceTabs;