import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceSlugContent } from '../Components/ServicesSlugContent';
import { FaTimes, FaCheckCircle } from "react-icons/fa"; // Icons import karein

const ServiceHero = () => {
    const { slug } = useParams();
    const content = ServiceSlugContent[slug] || ServiceSlugContent["website-development"];

    const [formData, setFormData] = useState({
        FullName: '', 
        email: '',
        phone: '',
        message: '', 
        form_name: `Service Page: ${slug}` 
    });

    const [loading, setLoading] = useState(false);
    // Naya State: Overlay control karne ke liye
    const [overlay, setOverlay] = useState({ show: false, type: "", title: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'phone') {
            const onlyNums = value.replace(/[^0-9]/g, '');
            setFormData({ ...formData, [name]: onlyNums });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("/sendmail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const contentType = response.headers.get("content-type");
            if (!contentType || !contentType.includes("application/json")) {
                throw new Error("Server connection failed.");
            }

            const result = await response.json();

            if (response.ok && result.status === "success") {
                setOverlay({
                    show: true,
                    type: "success",
                    title: "Message Sent!",
                    message: "Thank you for contacting us. We will get back to you soon."
                });
                setFormData({ FullName: '', email: '', phone: '', message: '', form_name: `Service Page: ${slug}` });
            } else {
                setOverlay({
                    show: true,
                    type: "error",
                    title: "Error!",
                    message: result.message || "Something went wrong."
                });
            }
        } catch (error) {
            setOverlay({
                show: true,
                type: "error",
                title: "Error!",
                message: "Server connection failed. Please try again later."
            });
        }
        setLoading(false);
    };

    return (
        <section className="relative overflow-hidden bg-[#0a0d14] py-16 lg:pt-32 lg:pb-12 flex flex-col items-center font-['Poppins',_sans-serif]">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-wrap items-center mb-20">
                    <div className="w-full lg:w-7/12 text-center lg:text-left">
                        <div className="space-y-6">
                            <h6 className="text-[#f34529] text-sm md:text-lg font-semibold tracking-[3px] uppercase">
                                {content.subHeading}
                            </h6>
                            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black text-white leading-tight">
                                {content.mainHeading.split(' ')[0]} <span className="text-[#f34529]">{content.mainHeading.split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                {content.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                                <a href="/contact">
                                    <button className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20">
                                        Get Started
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block lg:w-5/12 relative">
                        <img src={content.image} alt={slug} className="w-full h-auto object-contain animate-float drop-shadow-[0_20px_50px_rgba(243,69,41,0.2)]" />
                    </div>
                </div>

                {/* FORM SECTION - Relative position added for absolute overlay */}
                <div className="relative w-full bg-[#03031c] p-8 md:p-12 rounded-tl-[30px] rounded-br-[30px] border-2 border-[#f34529] shadow-2xl overflow-hidden">
                    
                    {/* --- ABSOLUTE OVERLAY (Same as Popup Form) --- */}
                    {overlay.show && (
                        <div className="absolute inset-0 z-[60] bg-[#03031c] flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-300">
                            <div className={`mb-4 p-3 rounded-full border-4 ${overlay.type === 'error' ? 'border-red-500/50 text-red-500' : 'border-green-500/50 text-green-500'}`}>
                                {overlay.type === 'error' ? <FaTimes size={40} /> : <FaCheckCircle size={40} />}
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-2">{overlay.title}</h2>
                            <p className="text-gray-400 mb-6 max-w-md">{overlay.message}</p>
                            <button 
                                onClick={() => setOverlay({ ...overlay, show: false })}
                                className={`${overlay.type === 'error' ? 'bg-red-800' : 'bg-[#f34529]'} text-white px-8 py-2 rounded-lg font-bold uppercase transition-transform active:scale-95`}
                            >
                                OK
                            </button>
                        </div>
                    )}

                    <div className="flex flex-col lg:flex-row items-center gap-8">
                        <div className="w-full lg:w-1/4">
                            <h4 className="text-white text-2xl font-bold leading-tight">
                                Contact us to Start a <span className="text-[#f34529] block">New Project</span>
                            </h4>
                        </div>

                        <div className="w-full lg:w-3/4">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <input 
                                        type="text" 
                                        name="FullName" 
                                        placeholder="Full Name" 
                                        required 
                                        value={formData.FullName} 
                                        onChange={handleChange} 
                                        className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-[#f34529] transition-colors" 
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-[#f34529] transition-colors"
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Phone No."
                                        required
                                        maxLength={12}
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-[#f34529] transition-colors"
                                    />
                                </div>
                                <textarea
                                    name="message"
                                    placeholder="Briefly describe your project"
                                    required
                                    rows="2"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-gray-700 text-white p-3 rounded focus:outline-none focus:border-[#f34529] transition-colors resize-none"
                                ></textarea>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="bg-[#f34529] hover:bg-[#d43a21] text-white font-bold py-3 px-10 rounded transition-all duration-300 disabled:opacity-50 min-w-[160px]"
                                    >
                                        {loading ? "Sending..." : "Submit Now"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
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

export default ServiceHero;