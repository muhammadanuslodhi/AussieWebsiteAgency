import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";
import { ServiceSlugContent } from "../Components/ServicesSlugContent";

const ServiceImages = () => {
    const { slug } = useParams();
    const content =
        ServiceSlugContent[slug] ||
        ServiceSlugContent["website-development"];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = (e) => {
        e.stopPropagation();
        if (!content?.portfolio) return;

        setSelectedIndex(
            (prev) => (prev + 1) % content.portfolio.length
        );
    };

    const handlePrev = (e) => {
        e.stopPropagation();
        if (!content?.portfolio) return;

        setSelectedIndex(
            (prev) =>
                (prev - 1 + content.portfolio.length) %
                content.portfolio.length
        );
    };

    const currentItem =
        selectedIndex !== null && content?.portfolio
            ? content.portfolio[selectedIndex]
            : null;

    return (
        <section className="py-24 px-6 font-['Poppins',_sans-serif]">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    {/* <motion.h6 className="text-[#e63946] text-sm font-bold uppercase tracking-[0.3em] mb-4">
                        Our Recent Projects
                    </motion.h6> */}
                    <h2 className="text-white text-3xl md:text-5xl font-black leading-tight max-w-4xl mx-auto">
                        {content?.portfolioHeading}
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="wait">
                        {content?.portfolio?.map((item, index) => (
                            <motion.div
                                key={`${slug}-${index}`}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedIndex(index)}
                                className="group relative h-[300px] overflow-hidden rounded-2xl bg-gray-900 cursor-pointer border border-white/5"
                            >
                                <img
                                    src={item.thumbnail}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                    alt="thumbnail"
                                />

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedIndex !== null && currentItem && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex flex-col items-center"
                            onClick={() => setSelectedIndex(null)}
                        >
                            {/* Counter */}
                            <div className="w-full flex items-center justify-between p-4 md:px-8 text-gray-400">
                                <div className="text-sm font-bold tracking-[0.2em] text-white/70">
                                    {selectedIndex + 1} / {content?.portfolio?.length}
                                </div>
                                <button
                                    onClick={() => setSelectedIndex(null)}
                                    className="text-3xl p-2 text-white hover:text-[#e63946]"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full relative flex items-center justify-center p-4">

                                <button
                                    onClick={handlePrev}
                                    className="absolute left-6 text-white/30 hover:text-white text-5xl"
                                >
                                    ‹
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="absolute right-6 text-white/30 hover:text-white text-5xl"
                                >
                                    ›
                                </button>

                                <motion.div
                                    key={`${slug}-${selectedIndex}`}
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
                                </motion.div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default ServiceImages;