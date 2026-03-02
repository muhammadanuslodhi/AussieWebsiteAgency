import React from 'react';
import { FaAngleRight, FaPhoneAlt, FaComments } from 'react-icons/fa';

const ComboPackage = () => {
    return (
        <section className="relative py-20 bg-[#05052e] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-10 left-10 opacity-10 animate-pulse">
                <img src="assets/images/webp/elements/element-3.webp" alt="element" className="w-20" />
            </div>
            <div className="absolute bottom-10 right-10 opacity-10">
                <img src="assets/images/webp/elements/element-5.webp" alt="element" className="w-32" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* LEFT SIDE: Full Services List */}
                    <div className="lg:w-7/12">
                        <div className="mb-10">
                            <h5 className="text-[#f34529] font-bold uppercase tracking-[3px] text-sm mb-2">Promotional</h5>
                            <h3 className="text-5xl md:text-7xl font-black text-white mb-4">
                                COMBO <span className="text-[#f34529]">PACKAGE</span>
                            </h3>
                            <p className="text-gray-400 text-lg border-l-2 border-[#f34529] pl-4">
                                Maximizing Value for Start-ups and Businesses
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                            
                            {/* Column 1 */}
                            <div className="space-y-10">
                                {/* Logo Design */}
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#f34529]"></span> Logo
                                    </h4>
                                    <ul className="space-y-2">
                                        {["Unlimited Concepts", "Unlimited Revisions", "6 Dedicated Logo Designers", "Turnaround 24-48hrs", "All Formats included"].map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-400 text-sm group">
                                                <FaAngleRight className="text-[#f34529] mt-1 mr-2 group-hover:translate-x-1 transition-transform" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Stationery Design */}
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#f34529]"></span> Stationery Design
                                    </h4>
                                    <ul className="space-y-2">
                                        {["Business Card Design", "Letterhead Design", "Envelope Design", "Email Signature Design"].map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-400 text-sm group">
                                                <FaAngleRight className="text-[#f34529] mt-1 mr-2 group-hover:translate-x-1 transition-transform" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Special Features */}
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#f34529]"></span> Special Features
                                    </h4>
                                    <ul className="space-y-2">
                                        {["Free Blog Design", "Free Landing Page Design", "Unlimited Revisions", "100% Satisfaction Guaranteed", "24 X 7 Customer Support"].map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-400 text-sm group">
                                                <FaAngleRight className="text-[#f34529] mt-1 mr-2 group-hover:translate-x-1 transition-transform" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Column 2 */}
                            <div className="space-y-10">
                                {/* Website Design */}
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#f34529]"></span> Website Design
                                    </h4>
                                    <ul className="space-y-2">
                                        {["6 Pages Custom Design", "5 Stock Photos", "1 year Web Hosting", "CMS Integration", "Contact Us Form", "Search Engine Submission", "Cross Browsers Compatibility", "10 Email Addresses", "W3C Certified HTML"].map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-400 text-sm group">
                                                <FaAngleRight className="text-[#f34529] mt-1 mr-2 group-hover:translate-x-1 transition-transform" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Social Media Design */}
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#f34529]"></span> Social Media Design
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start text-gray-400 text-sm"><FaAngleRight className="text-[#f34529] mt-1 mr-2" /> Any 4 of Your Choice</li>
                                        <li className="flex items-start text-gray-300 text-xs italic ml-6">Facebook, LinkedIn, G+, Twitter, YouTube</li>
                                    </ul>
                                </div>

                                {/* Banner Design */}
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-[#f34529]"></span> Banner Design
                                    </h4>
                                    <ul className="space-y-2">
                                        {["2 Design Concepts", "2 Stock Photos for Banners", "Free Color Options", "Free Grayscale Format"].map((item, i) => (
                                            <li key={i} className="flex items-start text-gray-400 text-sm group">
                                                <FaAngleRight className="text-[#f34529] mt-1 mr-2 group-hover:translate-x-1 transition-transform" /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Pricing Card */}
                    <div className="lg:w-5/12">
                        <div className="sticky top-24 bg-[#08083a] border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
                            <div className="text-center mb-8">
                                <h3 className="text-white text-3xl font-bold mb-2">Combo Packages</h3>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">Complete Branding Solution</p>
                            </div>

                            <div className="flex flex-col items-center justify-center bg-white/5 rounded-3xl py-8 mb-6 border border-white/5">
                                <div className="text-white text-5xl font-black mb-1 italic flex items-start">
                                    <span className="text-xl mt-2 mr-1">A$</span>2999
                                </div>
                                <h6 className="text-gray-500 text-lg line-through">A$4499 Only</h6>
                            </div>

                            <div className="bg-gradient-to-r from-[#f34529] to-[#c20045] rounded-xl py-3 text-center mb-10 shadow-lg shadow-[#f34529]/20">
                                <h6 className="text-white font-bold uppercase text-sm">
                                    <span className="bg-white text-[#f34529] px-2 py-0.5 rounded mr-2">20% OFF</span> Next Order
                                </h6>
                            </div>

                            <div className="space-y-8">
                                {/* <div className="flex flex-col gap-6 py-6 border-y border-white/10">
                                    <a href="tel:+611800317347" className="flex items-center gap-4 text-white hover:text-[#f34529] transition-all group">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#f34529] transition-colors">
                                            <FaPhoneAlt className="text-sm" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase text-gray-500 font-bold">Speak with us</span>
                                            <span className="font-bold text-lg">000000000</span>
                                        </div>
                                    </a>
                                    <button className="flex items-center gap-4 text-white hover:text-[#f34529] transition-all group text-left">
                                        <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-[#f34529] transition-colors">
                                            <FaComments className="text-sm" />
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase text-gray-500 font-bold">Want to discuss?</span>
                                            <span className="font-bold text-lg">Live Chat Now</span>
                                        </div>
                                    </button>
                                </div> */}
<a href="/contact">
                                <button className="w-full relative py-5 bg-gradient-to-r from-[#f34529] to-[#c20045] text-white font-black rounded-2xl shadow-xl hover:scale-[1.03] transition-all active:scale-95 group overflow-hidden">
                                    <span className="relative z-10 flex items-center justify-center gap-3 tracking-widest">
                                        START PROJECT
                                        <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
                                    </span>
                                </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ComboPackage;