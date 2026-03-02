import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const packages = [
  {
    title: "Startup Combo Package",
    oldPrice: "A$1988",
    price: "A$999",
    features: [
      "– Logo Design",
      "Unlimited Logo Design Concepts",
      "Unlimited Revisions",
      "Icon Design",
      "All Final File Formats",
      "– Stationary Design",
      "Business Card, Letterhead, Envelope",
      "MS Word Letterhead",
      "– Website Design",
      "5 Pages Website",
      "Content Management System (CMS)",
      "Mobile Responsive",
      "5 Stock Photos + 3 Banner Designs",
      "Any 3 Social Media Platforms",
      "Complete W3C Certified HTML",
      "Complete Deployment",
      "– Value Added Services",
      "Dedicated Account Manager",
      "100% unique Designs",
    ],
    isHighlight: false,
  },
  {
    title: "Professional Combo Package",
    oldPrice: "A$2999",
    price: "A$1499",
    features: [
      "– Logo Design",
      "Unlimited Logo Concepts",
      "8 Dedicated Designers",
      "Icon Design",
      "Unlimited Revisions",
      "All file formats",
      "– Print Materials",
      "2 Free Custom Stationary Designs",
      "MS Word Letterhead",
      "Free Trifold Brochure Design",
      "– Website Design",
      "10 Pages Design",
      "Conceptual and Dynamic Liquid Website",
      "Team of Expert Designers & Developers",
      "Word Press OR Custom Php",
      "Content Management System",
      "Mobile Responsive",
      "Online Reservation/Appointment Tool",
      "Custom Forms",
      "Social Media Integration",
      "Search Engine Submission",
      "15 Stock images",
      "8 Unique Banner Designs",
      "Free Google Friendly Sitemap",
    ],
    isHighlight: true, // Center Highlight
  },
  {
    title: "Identity Combo Package",
    oldPrice: "A$4599",
    price: "A$2299",
    features: [
      "– Logo Design",
      "9 Logo Design Idea(s)",
      "By 4 Expert Level Designer(s)",
      "Free Icon Design",
      "Unlimited Revisions",
      "– Stationary Design",
      "Letterhead, Business Card, Envelope",
      "Email Signature Design",
      "Electronic Letterhead",
      "Invoice Design",
      "– Website Design",
      "Unique 20 Pages Website Design",
      "Custom WordPress Development",
      "FREE 12 Months Domain & Hosting",
      "5 Professional Email ID’s",
      "Online Appointment/Booking Integration",
      "Special Hoover Effects",
      "– Add on",
      "Professional Content/Copywriting",
      "Online Payment Integration",
      "Shopping Cart Integration",
    ],
    isHighlight: false,
  },
  {
    title: "Corporate Combo Package",
    oldPrice: "A$6999",
    price: "A$3499",
    features: [
      "– Logo Design",
      "Unlimited Logo Design Idea(s)",
      "8 Dedicated Designers",
      "Icon Design",
      "– Stationary Design",
      "2 Free Custom Stationary Designs",
      "FREE Tri fold Brochure Design",
      "– Website Design",
      "Unlimited Pages Website",
      "Full Shopping Cart Integration",
      "Payment Module Integration",
      "Sales & Inventory Management",
      "Unlimited Products & Categories",
      "Promotional Product Showcase",
      "Custom Forms",
      "Search Engine Submission",
      "20 Stock images",
      "6 Unique Banner Designs",
      "– Value Added Services",
      "Dedicated Account Manager",
      "100% Satisfaction Guarantee",
    ],
    isHighlight: false,
  },
  {
    title: "Elite Combo Package",
    oldPrice: "A$9999",
    price: "A$4999",
    features: [
      "– Logo Design",
      "Unlimited Logo Design Idea(s)",
      "8 Dedicated Designers",
      "– Website Design",
      "Complete Custom Design & Development",
      "Job/Social/Medical/News Portal",
      "Custom PHP Development",
      "Custom Content Management System",
      "3rd Party API Integrations",
      "Client/User Dashboard Area",
      "Complete Database Creation",
      "Signup Automated Email Authentication",
      "Live Feeds of Social Networks",
      "Search Engine Submission",
      "Module-wise Architecture",
      "Extensive Admin Panel",
      "Award Winning Team",
      "– Value Added Services",
      "Dedicated Account Manager",
      "100% Satisfaction Guarantee",
      "*NO MONTHLY OR ANY HIDDEN FEE*",
    ],
    isHighlight: false,
  },
];

const PricingCard = ({ pkg }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className={`flex flex-col justify-between p-8 rounded-[30px] border-2 transition-all duration-300 ${
      pkg.isHighlight
        ? "bg-gradient-to-b from-[#f34529] to-[#8a1a0a] border-[#f34529] shadow-[0_20px_50px_rgba(243,69,41,0.3)] scale-105 z-10"
        : "bg-[#05051e] border-[#f34529]/20 hover:border-[#f34529]/60 shadow-xl"
    } text-white relative group`}
  >
    {/* Package Title */}
    <div className="mb-6">
      <h3 className={`text-lg font-black uppercase tracking-tighter ${pkg.isHighlight ? "text-white" : "text-[#f34529]"}`}>
        {pkg.title}
      </h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-sm opacity-60 line-through font-medium">{pkg.oldPrice}</span>
        <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full uppercase font-bold">Only</span>
      </div>
      <p className="text-4xl font-black mt-2 tracking-tight">{pkg.price}</p>
    </div>

    {/* Features List with Custom Scrollbar */}
    <div className="flex-grow overflow-y-auto max-h-[350px] mb-8 pr-2 custom-scrollbar">
      <ul className="space-y-3">
        {pkg.features.map((feat, idx) => {
          const isHeading = feat.startsWith("–");
          return (
            <li key={idx} className={`flex items-start gap-2 ${isHeading ? "mt-5 first:mt-0" : ""}`}>
              {isHeading ? (
                <span className="text-sm font-bold text-white border-b border-white/20 w-full pb-1 uppercase tracking-widest italic">
                  {feat}
                </span>
              ) : (
                <>
                  <span className={`mt-1.5 flex-shrink-0 w-3 h-3 rounded-full flex items-center justify-center text-[8px] border ${pkg.isHighlight ? "border-white bg-white text-red-600" : "border-[#f34529] text-[#f34529]"}`}>
                    ✓
                  </span>
                  <span className="text-sm opacity-90 leading-tight">{feat}</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>

    {/* Footer Section */}
    <div className="space-y-4">
      <a href="/contact">
      <button
        className={`w-full py-4 rounded-xl font-black text-sm tracking-widest transition-all duration-300 ${
          pkg.isHighlight
            ? "bg-white text-red-600 hover:bg-black hover:text-white"
            : "bg-[#f34529] text-white hover:bg-white hover:text-red-600"
        }`}
      >
        ORDER NOW
      </button>
      </a>

      <div className="pt-4 border-t border-white/10 flex flex-col gap-1">
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter opacity-70">
          <span>Share your idea?</span>
          <span>Want to discuss?</span>
        </div>
        {/* <div className="flex justify-between items-center">
          <a href="tel:+611800317347" className="text-xs font-bold hover:text-[#f34529] transition">+61 (1800) 317347</a>
          <button className="text-xs font-black underline decoration-[#f34529] underline-offset-4 hover:text-[#f34529] transition">Live Chat Now</button>
        </div> */}
      </div>
    </div>
  </motion.div>
);

const PricingSection = () => {
  return (
    <div className="bg-[#02021a] py-20 px-6 font-['Poppins',_sans-serif]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter">
            Combo <span className="text-[#f34529]">Packages</span>
          </h2>
          <div className="h-1 w-24 bg-[#f34529] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-start">
          {packages.map((pkg, idx) => (
            <PricingCard key={idx} pkg={pkg} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f34529;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default PricingSection;