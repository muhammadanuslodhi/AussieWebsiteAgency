import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import L1 from "../assets/Images/L1.jpg";
import L2 from "../assets/Images/L2.jpg";
import L3 from "../assets/Images/L3.jpg";
import L4 from "../assets/Images/L4.jpg";
import L5 from "../assets/Images/L5.jpg";
import L6 from "../assets/Images/L6.jpg";
import L7 from "../assets/Images/L7.jpg";
import L8 from "../assets/Images/L8.jpg";

import port1 from "../assets/Images/port1.png";
import port2 from "../assets/Images/port2.png";
import port3 from "../assets/Images/port3.png";
import port4 from "../assets/Images/port4.png";
import port5 from "../assets/Images/port5.png";
import port6 from "../assets/Images/port6.png";
import port7 from "../assets/Images/port7.png";
import port8 from "../assets/Images/port8.png";

import full1 from "../assets/Images/full1.png";
import full2 from "../assets/Images/full2.png";
import full3 from "../assets/Images/full3.png";
import full4 from "../assets/Images/full4.png";
import full5 from "../assets/Images/full5.png";
import full6 from "../assets/Images/full6.png";
import full7 from "../assets/Images/full7.png";
import full8 from "../assets/Images/full8.png";

import ecom1 from "../assets/Images/ecom1.webp";
import ecom2 from "../assets/Images/ecom2.webp";
import ecom3 from "../assets/Images/ecom3.webp";
import ecom4 from "../assets/Images/ecom4.webp";
import ecom5 from "../assets/Images/ecom5.webp";
import ecom6 from "../assets/Images/ecom6.webp";
import ecom7 from "../assets/Images/ecom7.webp";
import ecom8 from "../assets/Images/ecom8.webp";

import ecomf1 from "../assets/Images/ecomf1.webp";
import ecomf2 from "../assets/Images/ecomf2.webp";
import ecomf3 from "../assets/Images/ecomf3.webp";
import ecomf4 from "../assets/Images/ecomf4.webp";
import ecomf5 from "../assets/Images/ecomf5.webp";
import ecomf6 from "../assets/Images/ecomf6.webp";
import ecomf7 from "../assets/Images/ecomf7.webp";
import ecomf8 from "../assets/Images/ecomf8.webp";


import Videos1 from "../assets/Images/Videos1.jpg";
import Videos2 from "../assets/Images/Videos2.jpg";
import Videos3 from "../assets/Images/Videos3.jpg";
import Videos4 from "../assets/Images/Videos4.jpg";
import Videos5 from "../assets/Images/Videos5.jpg";
import Videos6 from "../assets/Images/Videos6.jpg";
import Videos7 from "../assets/Images/Videos7.jpg";
import Videos8 from "../assets/Images/Videos8.jpg";

import Video1 from "../assets/Images/Video1.mp4";
import Video2 from "../assets/Images/Video2.mp4";
// import Video3 from "../assets/Images/Video3.mp4";
import Video4 from "../assets/Images/Video4.mp4";
import Video5 from "../assets/Images/Video5.mp4";
import Video6 from "../assets/Images/Video6.mp4";
import Video7 from "../assets/Images/Video7.mp4";
import Video8 from "../assets/Images/Video8.mp4";


import illustration1 from "../assets/Images/illstrat1.webp";
import illustration2 from "../assets/Images/illstrat2.webp";
import illustration3 from "../assets/Images/illstrat3.webp";
import illustration4 from "../assets/Images/illstrat4.webp";
import illustration5 from "../assets/Images/illstrat5.webp";
import illustration6 from "../assets/Images/illstrat6.webp";
import illustration7 from "../assets/Images/illstrat7.webp";
import illustration8 from "../assets/Images/illstrat8.webp";

import brand1 from "../assets/Images/marketcollat1.webp";
import brand2 from "../assets/Images/marketcollat2.webp";
import brand3 from "../assets/Images/marketcollat3.webp";
import brand4 from "../assets/Images/marketcollat4.webp";
import brand5 from "../assets/Images/marketcollat5.webp";
import brand6 from "../assets/Images/marketcollat6.webp";
import brand7 from "../assets/Images/marketcollat7.webp";   
import brand8 from "../assets/Images/marketcollat8.webp";   




const PortfolioHome = () => {
    const [activeTab, setActiveTab] = useState("webdesign");
    const [selectedIndex, setSelectedIndex] = useState(null);

    const tabs = [
        { id: "logodesign", label: "Logo Design" },
        { id: "webdesign", label: "Website Design" },
        { id: "ecommerceweb", label: "Ecommerce Website" },
        { id: "videoanimation", label: "Video Animation" },
        { id: "illustration", label: "Illustration" },
        { id: "branding", label: "Marketing Collateral" },
    ];

    const images = {
        logodesign: [
            { thumbnail: L1, full: L1 },
            { thumbnail: L2, full: L2 },
            { thumbnail: L3, full: L3 },
            { thumbnail: L4, full: L4 },
            { thumbnail: L5, full: L5 },
            { thumbnail: L6, full: L6 },
            { thumbnail: L7, full: L7 },
            { thumbnail: L8, full: L8 },
        ],

        webdesign: [
            { thumbnail: port1, full: full1 },
            { thumbnail: port2, full: full2 },
            { thumbnail: port3, full: full3 },
            { thumbnail: port4, full: full4 },
            { thumbnail: port5, full: full5 },
            { thumbnail: port6, full: full6 },
            { thumbnail: port7, full: full7 },
            { thumbnail: port8, full: full8 },
        ],

        ecommerceweb: [
            { thumbnail: ecom1, full: ecomf1 },
            { thumbnail: ecom2, full: ecomf2 },
            { thumbnail: ecom3, full: ecomf3 },
            { thumbnail: ecom4, full: ecomf4 },
            { thumbnail: ecom5, full: ecomf5 },
            { thumbnail: ecom6, full: ecomf6 },
            { thumbnail: ecom7, full: ecomf7 },
            { thumbnail: ecom8, full: ecomf8 },
        ],

        videoanimation: [
            { thumbnail: Videos1, video: Video1 },
            { thumbnail: Videos2, video: Video2 },
            { thumbnail: Videos3, video: Video2 },
            { thumbnail: Videos4, video: Video4 },
            { thumbnail: Videos5, video: Video5 },
            { thumbnail: Videos6, video: Video6 },
            { thumbnail: Videos7, video: Video7 },
            { thumbnail: Videos8, video: Video8 },
        ],

        illustration: [
            { thumbnail: illustration1, full: illustration1 },
            { thumbnail: illustration2, full: illustration2 },
            { thumbnail: illustration3, full: illustration3 },
            { thumbnail: illustration4, full: illustration4 },
            { thumbnail: illustration5, full: illustration5 },
            { thumbnail: illustration6, full: illustration6 },
            { thumbnail: illustration7, full: illustration7 },  
            { thumbnail: illustration8, full: illustration8 },
        ],

        branding: [
            { thumbnail: brand1, full: brand1 },
            { thumbnail: brand2, full: brand2 },
            { thumbnail: brand3, full: brand3 },
            { thumbnail: brand4, full: brand4 },
            { thumbnail: brand5, full: brand5 },
            { thumbnail: brand6, full: brand6 },
            { thumbnail: brand7, full: brand7 },  
            { thumbnail: brand8, full: brand8 },
        ],

        // Baqi tabs mein data yahan add karein...
    };

    const handleNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images[activeTab].length);
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images[activeTab].length) % images[activeTab].length);
    };

    const currentItem = selectedIndex !== null ? images[activeTab][selectedIndex] : null;

    return (
        <section className="bg-[#050a18] py-24 px-6 font-['Poppins',_sans-serif]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h6 className="text-[#e63946] text-sm font-bold uppercase tracking-[0.3em] mb-4">Our Creative Portfolio</motion.h6>
                    <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">Mastering the Art of Design</h2>
                </div>

                {/* TAB BUTTONS (Wapis add kar diye hain) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-800 pb-6">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => { setActiveTab(tab.id); setSelectedIndex(null); }} className={`relative px-4 py-2 text-xs md:text-sm font-bold uppercase transition-all ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-white"}`}>{tab.label}{activeTab === tab.id && (
                            <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e63946]" />
                        )}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="wait">
                        {images[activeTab]?.map((item, index) => (
                            <motion.div key={`${activeTab}-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedIndex(index)}
                                className="group relative h-[300px] overflow-hidden rounded-2xl bg-gray-900 cursor-pointer border border-white/5"
                            >



                                <img src={item.thumbnail} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" alt="thumbnail" />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-white text-4xl font-light">+</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {selectedIndex !== null && currentItem && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center" onClick={() => setSelectedIndex(null)}>
                            <div className="w-full flex items-center justify-between p-4 md:px-8 text-gray-400 z-[10001]">
                                <div className="text-sm font-bold tracking-[0.2em] text-white/70">{selectedIndex + 1} / {images[activeTab].length}</div>
                                <button onClick={() => setSelectedIndex(null)} className="hover:text-[#e63946] transition-colors text-3xl p-2"><i className="fa-solid fa-xmark"></i></button>
                            </div>

                            {/* Slider Area */}
                            <div className="flex-1 w-full relative flex items-center justify-center p-4">

                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-10 text-white/20 hover:text-white text-5xl transition-all z-[10002]"
                                >
                                    <i className="fa-solid fa-circle-chevron-left"></i>
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-10 text-white/20 hover:text-white text-5xl transition-all z-[10002]"
                                >
                                    <i className="fa-solid fa-circle-chevron-right"></i>
                                </button>

                                {/* Full Image Holder */}
                                <motion.div
                                    key={`${activeTab}-${selectedIndex}`} // Key ensures animation on change
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    {currentItem?.video ? (
                                        <video
                                            src={currentItem.video}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-lg border border-white/10"
                                        />
                                    ) : (
                                        <img
                                            src={currentItem?.full}
                                            className="max-w-full max-h-[70vh] object-contain shadow-2xl rounded-lg border border-white/10"
                                            alt="Full View"
                                        />
                                    )}
                                    <div className="mt-8 text-center">
                                        <h4 className="text-white text-xl md:text-2xl font-black opacity-40 italic uppercase tracking-tighter">
                                            For Your Design Needs!
                                        </h4>
                                        <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-[0.4em]">Unleash Your Business Potential</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default PortfolioHome;