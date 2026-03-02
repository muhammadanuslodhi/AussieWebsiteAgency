import React from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Background image import
import CTA from "../assets/Images/CTA.jpg";
import Icon from "../assets/Images/Icon.png";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-24 px-6 font-['Poppins',_sans-serif] min-h-[600px] flex items-center">

      {/* 1. ANIMATED BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1], // Zoom in and out
            x: [0, -20, 0],    // Horizontal movement
            y: [0, -10, 0]     // Vertical movement
          }}
          transition={{
            duration: 20,      // Slow and smooth
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${CTA})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark Gradient Overlay (Text readability ke liye) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050a18] via-[#050a18]/90 to-[#050a18]/60"></div>
      </div>

      {/* 2. DECORATIVE BLUR LIGHT */}
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-600/10 blur-[150px] rounded-full -mr-48 -mt-48 z-1"
      />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left Side: Floating Asset */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <motion.img
              animate={{ y: [0, -25, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              src={Icon}
              alt="Brand Icon"
              className="w-full max-w-[500px] drop-shadow-[0_30px_60px_rgba(230,57,70,0.4)]"
            />
          </motion.div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h6 className="text-[#e63946] font-bold text-sm uppercase tracking-[0.4em] mb-4">
                Elevate Your Brand
              </h6>
              <h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-black mb-6 leading-tight">
                With Designs that Optimize  <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">Customer Experience</span>
              </h3>
              <p className="text-gray-300 text-lg mb-10 font-light max-w-xl">
                Aussies Website Agency's Artistic Team Elevates Your Online Identity with Customized Solutions and Unbeatable Results, All while Streamlining Your Business Efficiency for Unmatched Success.
              </p>
            </motion.div>

            {/* Buttons & Contact */}
            <div className="flex flex-wrap items-center gap-8">
              <Link to="/contact">
              <motion.button href="/contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20"
              >
                Get In Touch
              </motion.button>
              </Link>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <i className="fa-brands fa-weixin text-red-500 text-xl animate-pulse"></i>
                </div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase">Talk to us</span>
                  <a href="tel:+611800317347" className="text-white font-bold hover:text-red-500 transition-colors">
                    +61 (1800) 317347
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTASection;