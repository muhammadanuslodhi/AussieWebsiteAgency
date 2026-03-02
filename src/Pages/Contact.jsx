import React, { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import contactImg from "../assets/Images/contact.png";

function Contact() {
    const [formData, setFormData] = useState({
        FullName: "",
        email: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // NOTE: Replace this URL with your actual hosted PHP file path
            const response = await fetch("/sendmail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.status === "success") {
                // SUCCESS ALERT - Styled for your theme
                Swal.fire({
                    title: "Success!",
                    text: result.message,
                    icon: "success",
                    background: "#080808",
                    color: "#ffffff",
                    confirmButtonColor: "#f34529",
                    confirmButtonText: "OK",
                    backdrop: `rgba(0,0,0,0.9)`,
                    customClass: {
                        popup: 'rounded-[30px] border border-gray-800 shadow-2xl',
                        title: 'text-2xl font-bold uppercase',
                        confirmButton: 'px-10 py-2 rounded-lg font-bold'
                    }
                });

                // Reset form
                setFormData({
                    FullName: "",
                    email: "",
                    phone: "",
                    message: "",
                });

            } else {
                // ERROR ALERT FROM SERVER
                Swal.fire({
                    title: "Error!",
                    text: result.message || "Something went wrong.",
                    icon: "error",
                    background: "#080808",
                    color: "#ffffff",
                    confirmButtonColor: "#b00000",
                    confirmButtonText: "OK",
                    backdrop: `rgba(0,0,0,0.9)`,
                    customClass: {
                        popup: 'rounded-[30px] border border-red-900/30 shadow-2xl',
                        title: 'text-3xl font-black',
                        confirmButton: 'px-12 py-3 rounded-xl font-bold'
                    }
                });
            }

        } catch (error) {
            // CONNECTION FAILED ALERT - Exact match to your image
            Swal.fire({
                title: "Error!",
                text: "Server connection failed.",
                icon: "error",
                iconColor: "#f34529",
                background: "#080808",
                color: "#ffffff",
                confirmButtonColor: "#b00000",
                confirmButtonText: "OK",
                backdrop: `rgba(0,0,0,0.9)`,
                customClass: {
                    popup: 'rounded-[40px] border-2 border-[#f34529]/10 shadow-[0_0_50px_rgba(243,69,41,0.15)]',
                    title: 'text-3xl font-extrabold',
                    confirmButton: 'px-12 py-3 rounded-xl font-bold uppercase tracking-widest'
                }
            });
        }

        setLoading(false);
    };

    return (
        <section className="relative bg-[#02021a] py-16 md:py-24 lg:mt-[75px] px-4 md:px-6 font-['Poppins',_sans-serif] overflow-hidden text-white">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT SIDE - CONTENT & FORM */}
                    <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
                        <div>
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight uppercase tracking-tighter mb-4 md:mb-6">
                                Hire Us Now To Give <br />
                                The <span className="text-[#f34529]">Boost</span> Your <br />
                                <span className="text-[#f34529]">Business</span> Needs
                            </h2>

                            <p className="text-gray-400 text-base md:text-lg max-w-lg leading-relaxed border-l-2 border-[#f34529] pl-4 md:pl-6">
                                Let's build something together! If you have any other questions, you can leave here.
                            </p>
                        </div>

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-xl">
                            <input
                                type="text"
                                name="FullName"
                                placeholder="Full Name"
                                value={formData.FullName}
                                onChange={handleChange}
                                required
                                className="w-full bg-white text-gray-900 p-4 md:p-5 rounded-lg focus:ring-4 ring-[#f34529]/20 outline-none transition-all"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-white text-gray-900 p-4 md:p-5 rounded-lg focus:ring-4 ring-[#f34529]/20 outline-none transition-all"
                            />

                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-white text-gray-900 p-4 md:p-5 rounded-lg focus:ring-4 ring-[#f34529]/20 outline-none transition-all"
                            />

                            <textarea
                                name="message"
                                rows="4"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-white text-gray-900 p-4 md:p-5 rounded-lg focus:ring-4 ring-[#f34529]/20 outline-none transition-all"
                            ></textarea>

                            <div className="relative group w-full md:w-fit">
                                <div className="absolute inset-0 bg-[#f34529] blur-xl opacity-40 group-hover:opacity-70 transition-opacity"></div>

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="relative bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-10 py-4 rounded-full font-bold transition-all duration-500 shadow-lg disabled:opacity-60 flex items-center justify-center min-w-[180px]"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : "Submit Now"}
                                </motion.button>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="relative flex justify-center order-1 lg:order-2 mb-10 lg:mb-0">
                        <div className="relative z-10 w-full max-w-[400px] aspect-square overflow-hidden rounded-[100px_30px_100px_30px] border-b-[15px] border-r-[15px] border-[#f34529] shadow-2xl">
                            <img
                                src={contactImg}
                                alt="Support Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        {/* Decorative Glow behind image */}
                        <div className="absolute -inset-4 bg-[#f34529]/20 blur-3xl rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Contact;