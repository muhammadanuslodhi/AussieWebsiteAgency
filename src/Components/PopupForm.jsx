import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaTimes, FaCheckCircle } from "react-icons/fa";

const ContactPopup = ({ showModal, setShowModal }) => {
  const location = useLocation();
  const [formData, setFormData] = useState({ FullName: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState({ show: false, type: "", title: "", message: "" });

  // --- 8 SECOND DELAY LOGIC ---
  useEffect(() => {
    let timer;
    if (location.pathname === "/") {
      // 8 second ka delay set kiya
      timer = setTimeout(() => {
        setShowModal(true);
      }, 8000); 
    } else {
      setShowModal(false);
    }

    // Cleanup function: agar user 8 sec se pehle page change karle toh timer stop ho jaye
    return () => clearTimeout(timer);
  }, [location.pathname, setShowModal]);

  // Body scroll lock logic
  useEffect(() => {
    if (showModal && location.pathname === "/") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [showModal, location.pathname]);

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
        throw new Error("Server connection failed.");
      }

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setOverlay({
          show: true,
          type: "success",
          title: "Message Sent!",
          message: data.message
        });
        setFormData({ FullName: "", email: "", phone: "", message: "" });
      } else {
        setOverlay({
          show: true,
          type: "error",
          title: "Form Error!",
          message: data.message || "Please fill all fields correctly."
        });
      }
    } catch (err) {
      setOverlay({
        show: true,
        type: "error",
        title: "Network Error!",
        message: "Could not connect to the server. Please check your PHP setup."
      });
    } finally {
      setLoading(false);
    }
  };

  if (!showModal || location.pathname !== "/") return null;

  return (
    <div className="fixed inset-0 z-[100000] flex items-center justify-center p-4">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowModal(false)}></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] shadow-[0_0_60px_rgba(188,52,29,0.3)] flex flex-col max-h-[95vh] overflow-hidden animate-in fade-in zoom-in duration-500">
        
        {/* Status Overlay (Success/Error) */}
        {overlay.show && (
          <div className="absolute inset-0 z-[60] bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-8 rounded-[2.5rem] animate-in fade-in duration-300">
            <div className={`mb-6 p-4 rounded-full border-4 ${overlay.type === 'error' ? 'border-red-500/50 text-red-500' : 'border-green-500/50 text-green-500'}`}>
              {overlay.type === 'error' ? <FaTimes size={50} /> : <FaCheckCircle size={50} />}
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">{overlay.title}</h2>
            <p className="text-gray-400 mb-8">{overlay.message}</p>
            <button 
              onClick={() => {
                setOverlay({ ...overlay, show: false });
                if(overlay.type === 'success') setShowModal(false);
              }}
              className={`${overlay.type === 'error' ? 'bg-red-800' : 'bg-[#bc341d]'} text-white px-10 py-3 rounded-xl font-bold uppercase transition-transform active:scale-95`}
            >
              OK
            </button>
          </div>
        )}

        <div className="h-1.5 w-full bg-gradient-to-r from-[#830d0f] to-[#bc341d] shrink-0"></div>

        <div className="p-8 md:p-10 overflow-y-auto custom-modal-scroll">
          <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white transition-all z-50">
            <FaTimes size={24} />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white tracking-tight">
              Get In <span className="text-[#bc341d]">Touch</span>
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input name="FullName" required value={formData.FullName} onChange={handleChange} placeholder="Full Name" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl outline-none focus:border-[#bc341d]/50 transition-colors" type="text" />
            <input name="email" required value={formData.email} onChange={handleChange} placeholder="Email Address" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl outline-none focus:border-[#bc341d]/50 transition-colors" type="email" />
            <input name="phone" required value={formData.phone} onChange={handleChange} placeholder="Mobile Number" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl outline-none focus:border-[#bc341d]/50 transition-colors" type="tel" />

            <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 text-[11px] leading-relaxed text-gray-400">
              By providing your phone number, you consent to receive SMS messages from <span className="text-white font-semibold">Aussie</span>. 
            </div>

            <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Your Message" rows="3" className="w-full bg-white/5 border border-white/10 text-white p-4 rounded-2xl outline-none resize-none focus:border-[#bc341d]/50 transition-colors"></textarea>

            <button disabled={loading} type="submit" className="w-full bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white py-4 rounded-full font-bold uppercase tracking-[2px] disabled:opacity-50 hover:shadow-[0_0_20px_rgba(188,52,29,0.4)] transition-all">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;