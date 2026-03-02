import React, { useState } from "react";
import footerBefore from "../assets/Images/footer-form-before.webp";
import footerAfter from "../assets/Images/footer-form-after.webp";
import { FaTimes, FaCheckCircle } from "react-icons/fa"; // Icons import karein

const ContactSection = () => {
  // PHP ke mutabiq keys: FullName aur message
  const [formData, setFormData] = useState({
    FullName: "",
    email: "",
    phone: "",
    message: "",
    form_name: "Footer Contact Form"
  });

  const [loading, setLoading] = useState(false);
  // Overlay state
  const [overlay, setOverlay] = useState({ show: false, type: "", title: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        throw new Error("Server error: Invalid format");
      }

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setOverlay({
          show: true,
          type: "success",
          title: "Sent Successfully!",
          message: "Our team will contact you within 24 hours."
        });
        setFormData({ FullName: "", email: "", phone: "", message: "", form_name: "Footer Contact Form" });
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (error) {
      setOverlay({
        show: true,
        type: "error",
        title: "Error!",
        message: error.message || "Server connection failed."
      });
    }
    setLoading(false);
  };

  return (
    <section className="relative w-full bg-[#0b0b1f] py-24 overflow-hidden font-['Poppins',_sans-serif]">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-rose-500 via-pink-500 to-red-600"></div>

      <div className="w-full">
        <div className="grid lg:grid-cols-12 items-center">
          {/* Left Image */}
          <div className="hidden lg:flex lg:col-span-3 justify-start">
            <img src={footerBefore} alt="Preview" className="w-full max-w-[320px] object-contain" />
          </div>

          {/* Main Card */}
          <div className="col-span-12 lg:col-span-6 flex justify-center px-4 md:px-0">
            {/* Relative added for Overlay */}
            <div className="relative w-full max-w-5xl flex flex-col md:flex-row rounded-3xl overflow-hidden bg-[#111132] shadow-2xl border border-white/5 min-h-[500px]">
              
              {/* --- OVERLAY SYSTEM --- */}
              {overlay.show && (
                <div className="absolute inset-0 z-50 bg-[#0f0f2a] flex flex-col items-center justify-center text-center p-6 animate-in fade-in duration-300">
                  <div className={`mb-4 p-4 rounded-full border-4 ${overlay.type === 'error' ? 'border-red-500/30 text-red-500' : 'border-green-500/30 text-green-500'}`}>
                    {overlay.type === 'error' ? <FaTimes size={50} /> : <FaCheckCircle size={50} />}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{overlay.title}</h2>
                  <p className="text-gray-400 mb-8 max-w-sm">{overlay.message}</p>
                  <button 
                    onClick={() => setOverlay({ ...overlay, show: false })}
                    className="bg-gradient-to-r from-rose-500 to-red-600 text-white px-10 py-3 rounded-xl font-bold transition-transform active:scale-95"
                  >
                    CLOSE
                  </button>
                </div>
              )}

              {/* Left Info Panel */}
              <div className="md:w-[45%] bg-gradient-to-br from-rose-600 to-red-600 p-10 lg:p-12 text-white flex flex-col justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-wider opacity-80 mb-3">Let’s Talk</p>
                  <h3 className="text-2xl lg:text-3xl font-semibold leading-snug mb-6">
                    Have a project in mind? We’d love to help you build it.
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-sm opacity-90">business@aussiewebsiteagency.com</p>
                  <button className="mt-4 bg-white text-red-600 font-semibold py-3 px-6 rounded-lg hover:bg-black hover:text-white transition">
                    Chat With Us
                  </button>
                </div>
              </div>

              {/* Right Form Panel */}
              <div className="md:w-[55%] p-10 lg:p-14 bg-[#0f0f2a]">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Start Your Project</h2>
                <p className="text-gray-400 mb-8">Fill out the form and our team will get back within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="FullName" // Updated
                    required
                    placeholder="Your Name"
                    value={formData.FullName}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c3a] text-white rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c3a] text-white rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input
                    type="text"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c3a] text-white rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  
                  <textarea
                    name="message" // Updated
                    required
                    rows="3"
                    placeholder="Briefly describe your project"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#1c1c3a] text-white rounded-xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                  ></textarea>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-rose-500 to-red-600 text-white font-bold py-4 rounded-xl hover:scale-[1.01] active:scale-95 transition shadow-lg disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:flex lg:col-span-3 justify-end">
            <img src={footerAfter} alt="Preview" className="w-full max-w-[320px] object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;