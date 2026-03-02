import React from 'react';

const TestimonialsHeading = () => {
    return (
        <section className="bg-[#000000] testimonials py-16 md:py-24 font-['Poppins',_sans-serif]">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-3xl text-center">
                        {/* Heading Style 2 */}
                        <div className="heading-style-2">
                            <h6 className="text-[#e63946] text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-3">
                                Our clients simply
                            </h6>
                            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                                Love Our Work
                            </h3>
                            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
                                To provide your business with customized and unique website development 
                                services at reasonable prices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsHeading;