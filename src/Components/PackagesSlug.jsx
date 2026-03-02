import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { ServiceSlugContent } from '../Components/ServicesSlugContent'; // Named import check karlein

const PackagesSlug = () => {
    const { slug } = useParams();

    // Slug ke mutabiq data nikalna
    const content = ServiceSlugContent[slug] || ServiceSlugContent["website-development"];
    const packages = content.packages || [];

    return (
        <section className="packages relative bg-[#0a0e17] py-20 px-4 font-['Poppins',_sans-serif]">

            <div className="container mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h6 className="text-[#e63946] text-sm font-semibold uppercase tracking-wider mb-2">Budget-Friendly Options</h6>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {content.packagesHeading || "for Your Design Needs!"}
                    </h3>
                </div>

                {/* Cards Container */}
                <div className="tab-content">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slug} // Page change hone par animate karega
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
                        >
                            {/* Loop through dynamic packages */}
                            {packages.map((pkg, index) => (
                                <PricingCard
                                    key={index}
                                    title={pkg.title}
                                    price={pkg.price}
                                    features={pkg.features}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const PricingCard = ({ title, price, features }) => (
    <div className="group relative flex flex-col p-8 rounded-xl border-2 border-[#e63946]/30 bg-[#0a0e17] text-white transition-all duration-500 hover:bg-gradient-to-b hover:from-[#e63946] hover:to-[#ff4d4d] hover:border-transparent hover:shadow-[0_20px_50px_rgba(230,57,70,0.2)]">

        <div className="mb-6">
            <h5 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-90">{title}</h5>
            <div className="flex items-baseline">
                <span className="text-2xl font-bold">A$</span>
                <span className="text-5xl font-black ml-1">{price}</span>
            </div>
        </div>

        <div className="flex-grow overflow-y-auto max-h-[220px] pr-4 mb-8 custom-scrollbar">
            <ul className="space-y-3 text-[13px]">
                {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#e63946] group-hover:border-white flex items-center justify-center text-[8px] font-bold text-[#e63946] group-hover:text-white transition-colors">
                            ✓
                        </span>
                        <span className="opacity-90 leading-tight">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10">
            <a href="/contact">
                <button className="w-full py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all bg-transparent border-2 border-[#e63946] text-white group-hover:bg-white group-hover:text-[#e63946] group-hover:border-white">
                    Order Now
                </button>
            </a>

            {/* <div className="flex justify-between items-center mt-6 text-[10px]">
                <div>
                    <p className="opacity-50 uppercase mb-1">Share your idea?</p>
                </div>
                <div className="text-right">
                    <p className="opacity-50 uppercase mb-1">Want to discuss?</p>
                    <p className="font-bold text-xs border-b border-white leading-none cursor-pointer">Live Chat Now</p>
                </div>
            </div> */}
        </div>
    </div>
);

export default PackagesSlug;