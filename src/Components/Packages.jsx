import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PackagesSection = () => {
    const [activeTab, setActiveTab] = useState("webdesign");

    const tabs = [
        { id: "logodesign", label: "Logo Design" },
        { id: "webdesign", label: "Website Design" },
        { id: "branding", label: "Branding" },
        { id: "seoservices", label: "SEO Services" },
        { id: "videopackages", label: "Video Packages" },
    ];

    return (
        <section className="packages relative bg-[#0a0e17] py-20 px-4 font-['Poppins',_sans-serif]">
            {/* Scrollbar Styling */}
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 3px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #1a1e26; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #e63946; border-radius: 10px; }
            `}</style>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h6 className="text-[#e63946] text-sm font-semibold uppercase tracking-wider mb-2">Budget-Friendly Options</h6>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">For Your Design Needs!</h3>
                </div>

                {/* Tabs (Aapka original style) */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-gray-800 pb-6">
                    {tabs.map((tab) => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`relative px-4 py-2 text-xs md:text-sm font-bold uppercase transition-all ${activeTab === tab.id ? "text-white" : "text-gray-500 hover:text-white"}`}>
                            {tab.label}
                            {activeTab === tab.id && (
                                <motion.div layoutId="activeUnderline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#e63946]" />
                            )}
                        </button>
                    ))}
                </div>

                {/* Cards Container */}
                <div className="tab-content container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            /* Grid ko flex mein tabdeel kiya, gap kam kar diya (gap-4) */
                            className="flex flex-wrap justify-evenly gap-4 w-full px-4"
                        >
                            {activeTab === 'logodesign' && (
                                <>
                                    <PricingCard
                                        title="LOGO BASIC PACKAGE"
                                        price="117.00"
                                        features={[
                                            "Suitable for potential super-startups and brand revamps for companies.",
                                            "2 Original Logo Concepts",
                                            "2 Dedicated Logo Designer",
                                            "2 Revisions",
                                            "With Grey Scale Format",
                                            "Free Icon Design",
                                            "Formats: JPEG Only",
                                            "24 - 48 Hours Turn Around Time",
                                            "MORE FEATURES",
                                            "100% Satisfaction",
                                            "100% Ownership Rights",
                                            "100% Unique Designs",
                                            "Dedicated Account Manager",
                                        ]}
                                    />

                                    <PricingCard
                                        title="LOGO PLUS PACKAGE"
                                        price="379.00"
                                        features={[
                                            "Suitable for potential super-startups and brand revamps for companies.",
                                            "8 Original Logo Concepts",
                                            "4 Dedicated Logo Designer (Industry Specific)",
                                            "Unlimited Revisions",
                                            "Stationery Design (Business Card, Letterhead, Envelope)",
                                            "Email Signature Design",
                                            "With Grey Scale Format",
                                            "Free Icon Design",
                                            "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
                                            "24 - 48 Hours Turn Around Time",
                                            "MORE FEATURES",
                                            "100% Satisfaction",
                                            "100% Ownership Rights",
                                            "100% Unique Designs",
                                            "Dedicated Account Manager",
                                        ]}
                                    />

                                    <PricingCard
                                        title="LOGO INFINITE PACKAGE"
                                        price="830.00"
                                        features={[
                                            "Suitable for potential super-startups and brand revamps for companies.",
                                            "Unlimited Original Logo Concepts",
                                            "8 Dedicated Logo Designer (Industry Specific)",
                                            "Unlimited Revisions",
                                            "Stationery Design (Business Card, Letterhead, Envelope)",
                                            "250 Business Cards",
                                            "Email Signature Design",
                                            "Social Media Designs (Facebook, Twitter, Instagram)",
                                            "With Grey Scale Format",
                                            "Free Icon Design",
                                            "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
                                            "24 - 48 Hours Turn Around Time",
                                            "MORE FEATURES",
                                            "100% Satisfaction",
                                            "100% Unique Designs",
                                            "Dedicated Account Manager",
                                        ]}
                                    />

                                    <PricingCard
                                        title="LOGO PLATINUM PACKAGE"
                                        price="1663.00"
                                        features={[
                                            "Suitable for potential super-startups and brand revamps for companies.",
                                            "Unlimited Original Logo Concepts",
                                            "8 Dedicated Logo Designer (Industry Specific)",
                                            "Unlimited Revisions",
                                            "3 Page Custom Website",
                                            "Animated Logo",
                                            "Stationery Design (Business Card, Letterhead, Envelope)",
                                            "Brand Book",
                                            "500 Business Cards",
                                            "Email Signature Design",
                                            "Social Media Designs (Facebook, Twitter, Instagram)",
                                            "2 Sided Flyer OR Bi-Fold Brochure Design",
                                            "With Grey Scale Format",
                                            "Free Icon Design",
                                            "Formats: JPEG, PSD, EPS, AI, PNG, TIFF, SVG",
                                            "24 - 48 Hours Turn Around Time",
                                            "MORE FEATURES",
                                            "100% Satisfaction",
                                            "100% Ownership Rights",
                                            "100% Unique Designs",
                                            "Dedicated Account Manager",
                                        ]}
                                    />
                                </>
                            )}
                            {activeTab === 'webdesign' && (
                                <>
                                    <PricingCard
                                        title="ECONOMY PACKAGE"
                                        price="850.00"
                                        features={[
                                            "3 Unique Pages Design",
                                            "1 Basic Contact / Inquiry Form",
                                            "Complete W3C Certified",
                                            "FREE 3 Stock Photos",
                                            "FREE 2 Email Accounts",
                                            "100% Satisfaction Guaranteed",
                                            "100% Unique Design Guaranteed",
                                            "100% Unique Designs",
                                        ]}
                                    />

                                    <PricingCard
                                        title="BEGINNER PACKAGE"
                                        price="2517.00"
                                        features={[
                                            "5 Unique Pages Design",
                                            "1 Basic Contact / Inquiry Form",
                                            "Complete W3C Certified",
                                            "FREE 5 Stock Photos",
                                            "FREE Google Friendly Sitemap",
                                            "FREE 3 Email Accounts",
                                            "100% Satisfaction Guaranteed",
                                            "100% Unique Design Guaranteed",
                                            "100% Unique Designs",
                                        ]}
                                    />

                                    <PricingCard
                                        title="STARTUP WEBSITE"
                                        price="1997.00"
                                        features={[
                                            "5 Page Website",
                                            "Custom Layout Design",
                                            "Contact/Query Form",
                                            "3 Banner Designs",
                                            "5 Stock Photos",
                                            "FREE Favicon Design",
                                            "FREE Google Friendly Sitemap",
                                            "Unlimited Revisions",
                                            "Cross Browser Compatible",
                                            "Complete W3C Certified HTML",
                                            "Website Initial Concepts in 48 Hours",
                                            "Complete Design & Deployment",
                                            "Complete Source Files",
                                            "Dedicated Project Manager",
                                            "100% Ownership Rights",
                                        ]}
                                    />

                                    <PricingCard
                                        title="ULTIMATE PACKAGE"
                                        price="3183.00"
                                        features={[
                                            "7 Unique Pages Design",
                                            "1 Basic Contact / Inquiry Form",
                                            "Custom Design",
                                            "3 Logo Concepts",
                                            "Complete W3C Certified",
                                            "10 Stock Photos",
                                            "Google Friendly Sitemap",
                                            "5 Email Accounts",
                                            "100% Satisfaction Guaranteed",
                                            "100% Unique Design Guaranteed",
                                            "100% Unique Designs",
                                        ]}
                                    />

                                    <PricingCard
                                        title="E-COMMERCE WEBSITE"
                                        price="4283.00"
                                        features={[
                                            "Custom Ecommerce Website",
                                            "Up to 200 Products",
                                            "Fully Mobile Responsive",
                                            "Shopping Cart Integration",
                                            "Payment Gateway Integration",
                                            "Product Listing & Management",
                                            "Order Management & Tracking",
                                            "Banner Designs",
                                            "Unlimited Revisions",
                                            "FREE Social Media Integration",
                                            "FREE Favicon Design",
                                            "FREE Google Friendly Sitemap & Search Engine Submission",
                                            "Complete W3C Certified HTML",
                                            "Industry-Specified Team of Expert Designers and Developers",
                                        ]}
                                    />

                                    <PricingCard
                                        title="CORPORATE WEBSITE"
                                        price="5711.00"
                                        features={[
                                            "Up to 13 Unique Pages Website",
                                            "Custom Made, Interactive & Dynamic Design",
                                            "Customized WordPress or PHP Development",
                                            "Fully Mobile Responsive",
                                            "Interactive Sliding Banners",
                                            "Up to 10 Custom Made Banner Designs",
                                            "10 Stock Images",
                                            "Unlimited Revisions",
                                            "Online Signup Area (For Newsletters, Offers etc.)",
                                            "Search Bar",
                                            "Live Feeds of Social Networks Integration (Optional)",
                                            "Up to 15 Professional Email ID’s",
                                            "Google Friendly Sitemap",
                                            "Free 6 Months Hosting",
                                            "Search Engine Submission",
                                            "Cross Browser Compatible",
                                            "Complete W3C Certified HTML",
                                            "Industry-Specified Team of Expert Designers and Developers",
                                            "Complete Deployment",
                                            "Complete Source Files",
                                            "Dedicated Account Manager",
                                            "100% Ownership Rights",
                                            "100% Satisfaction Guaranteed",
                                            "100% Unique Designs",
                                        ]}
                                    />

                                    <PricingCard
                                        title="PLATINUM WEBSITE"
                                        price="9972.00"
                                        features={[
                                            "Up to 20 Unique Pages Website",
                                            "Custom Made, Interactive, Dynamic & High-End Design",
                                            "Customized WordPress or PHP Development",
                                            "Fully Mobile Responsive",
                                            "Interactive Sliding Banners",
                                            "Up to 15 Custom Made Banner Designs",
                                            "15 Stock Images",
                                            "Unlimited Revisions",
                                            "Online Appointment/Booking/Scheduling/Online Ordering Integration (Optional)",
                                            "Online Payment Integration (Optional)",
                                            "Multi Lingual (Optional)",
                                            "Custom Dynamic Forms (Optional)",
                                            "Signup Area (For Newsletters, Offers etc.)",
                                            "Search Bar",
                                            "Live Feeds of Social Networks Integration (Optional)",
                                            "Up to 15 Professional Email ID’s",
                                            "Google Friendly Sitemap",
                                            "Search Engine Submission",
                                            "Cross Browser Compatible",
                                            "Complete W3C Certified HTML",
                                            "Industry-Specified Team of Expert Designers and Developers",
                                            "Complete Deployment",
                                            "Complete Source Files",
                                            "Dedicated Project Manager",
                                            "100% Ownership Rights",
                                            "100% Satisfaction Guarantee",
                                            "100% Unique Designs",
                                        ]}
                                    />
                                </>
                            )}
                            {activeTab === 'branding' && (
                                <>
                                    <PricingCard
                                        title="BRANDING BASIC"
                                        price="316.00"
                                        features={[
                                            "Startup Banner Designs",
                                            "1 Complete Stationary Layout",
                                            "1 Business Card Concept",
                                            "1 Letterhead Concept",
                                            "1 Envelope Design",
                                            "Unlimited Revisions",
                                            "Multiple File Format(Ai, PNG, JPEG, etc)",
                                            "Turn around time 24 - 48 Hours",
                                            "100% Satisfaction Guaranteed*",
                                            "Add on: A$30 for 24 - 48 Hours Rush Delivery",
                                        ]}
                                    />

                                    <PricingCard
                                        title="BRANDING ADVANCED"
                                        price="484.00"
                                        features={[
                                            "Suitable for Every Business",
                                            "2 Complete Stationary Layouts",
                                            "2 Business Card Concept",
                                            "2 Letterhead Concept",
                                            "2 Envelope Design",
                                            "Unlimited Revisions",
                                            "Multiple File Format(Ai, PNG, JPEG, etc)",
                                            "Turn around time 24 - 48 Hours",
                                            "100% Satisfaction Guaranteed*",
                                            "Add on: A$60 for 24 - 48 Hours Rush Delivery",
                                        ]}
                                    />

                                    <PricingCard
                                        title="BRANDING BUSINESS"
                                        price="650.00"
                                        features={[
                                            "Brand Cohesive Designs for Businesses",
                                            "3 Complete Stationary Layouts",
                                            "3 Business Card Concept",
                                            "3 Letterhead Concept",
                                            "3 Envelope Design",
                                            "Icon Design",
                                            "MS Letter Head Design",
                                            "Fax Template",
                                            "Unlimited Revisions",
                                            "Turn around time 24 - 48 Hours",
                                            "Multiple Files Format Ai, PSD, Png, Jpeg Etc",
                                            "100% Satisfaction Guaranteed*",
                                            "Add on: A$90 for 24 - 48 Hours Rush Delivery"
                                        ]}
                                    />
                                </>
                            )}
                            {activeTab === 'seoservices' && (
                                <>
                                    <PricingCard
                                        title="SEO FOUNDATIONAL PACKAGE"
                                        price="2099.00"
                                        features={[
                                            "10 Keywords Optimization",
                                            "4 Keywords in Top 10",
                                            "Search Engine Submissions",
                                            "2 Blogs Writing",
                                            "4 Blog Posting Links",
                                            "10 Blogs Social Bookmarking Links",
                                            "1 Press Release Writing",
                                            "2 Press Release Links",
                                        ]}
                                    />

                                    <PricingCard
                                        title="SEO CORE PACKAGE"
                                        price="4999.00"
                                        features={[
                                            "25 Keywords Optimization",
                                            "10 Keywords in Top 10",
                                            "Search Engine Submissions",
                                            "6 Blogs Writing",
                                            "12 Blog Posting Links",
                                            "20 Blogs Social Bookmarking Links",
                                            "2 Press Release Writing",
                                            "4 Press Release Links",
                                        ]}
                                    />

                                    <PricingCard
                                        title="SEO CORPORATE PACKAGE"
                                        price="9999.00"
                                        features={[
                                            "50 Keywords Optimization",
                                            "20 Keywords in Top 10",
                                            "14 Blogs Writing",
                                            "28 Blog Posting Links",
                                            "30 Blogs Social Bookmarking Links",
                                            "4 Press Release Writing",
                                            "8 Press Release Links",
                                            "4 Guest Blogging Links",
                                        ]}
                                    />
                                </>
                            )}
                            {activeTab === 'videopackages' && (
                                <>
                                    <PricingCard
                                        title="VIDEO TEASER PACKAGE"
                                        price="500.00"
                                        features={[
                                            "15 Second Video - HD 1080",
                                            "Professional Script",
                                            "Storyboard",
                                            "Animation",
                                            "Professional Voice-Over & Sound Effects",
                                            "Custom Artwork",
                                            "Background Music",
                                            "Sample Theme",
                                            "2 Weeks Delivery",
                                            "Unlimited Storyboard Revisions",
                                            "Dedicated Support"
                                        ]}
                                    />

                                    <PricingCard
                                        title="VIDEO STARTUP MARKETING"
                                        price="833.00"
                                        features={[
                                            "30 Second Video - HD 1080 (Per Network)",
                                            "Professional Script",
                                            "Storyboard",
                                            "Animation",
                                            "Professional Voice-Over & Sound Effects",
                                            "Custom Artwork",
                                            "Background Music",
                                            "Sample Theme",
                                            "4 Weeks Delivery",
                                            "Unlimited Storyboard Revisions",
                                            "Dedicated Support"
                                        ]}
                                    />

                                    <PricingCard
                                        title="VIDEO CLASSIC PACKAGE"
                                        price="1667.00"
                                        features={[
                                            "60 Second Video - HD 1080",
                                            "Professional Script",
                                            "Storyboard",
                                            "Animation",
                                            "Professional Voice-Over & Sound Effects",
                                            "Custom Artwork",
                                            "Background Music",
                                            "Sample Theme",
                                            "4 Weeks Delivery",
                                            "Unlimited Revisions",
                                            "24x7 Support",
                                            "Dedicated Team",
                                            "Moneyback Guarantee",
                                            "100% Ownership Rights",
                                            "FREE All File Formats"
                                        ]}
                                    />

                                    <PricingCard
                                        title="VIDEO PREMIUM PACKAGE"
                                        price="3000.00"
                                        features={[
                                            "90 Second Video - HD 1080",
                                            "Professional Script",
                                            "Storyboard",
                                            "Animation",
                                            "Professional Voice-Over & Sound Effects",
                                            "Custom Artwork",
                                            "2D Character Illustration",
                                            "Sample Theme",
                                            "4-6 Weeks Delivery",
                                            "Unlimited Revisions",
                                            "24x7 Support",
                                            "Dedicated Team",
                                            "Moneyback Guarantee",
                                            "100% Ownership Rights",
                                            "FREE All File Formats"
                                        ]}
                                    />
                                </>
                            )}


                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

// Pricing Card (Fixed Scale, Hover Gradient Only)
const PricingCard = ({ title, price, features }) => (
    <div className="group relative flex flex-col w-full max-w-sm p-8 rounded-xl border-2 border-[#bc341d] bg-[#0a0e17] text-white transition-all duration-500 hover:bg-gradient-to-b hover:from-[#bc341d] hover:to-[#830d0f] hover:border-transparent hover:shadow-[0_20px_50px_rgba(230,57,70,0.2)]">

        <div className="mb-6">
            <h5 className="text-sm font-bold uppercase tracking-widest mb-4 opacity-90">{title}</h5>
            <div className="flex items-baseline">
                <span className="text-2xl font-bold">A$</span>
                <span className="text-5xl font-black ml-1">{price}</span>
            </div>
        </div>

        {/* Scrollable Features list */}
        <div className="flex-grow overflow-y-auto max-h-[220px] pr-4 mb-8 custom-scrollbar">
            <ul className="space-y-3 text-[13px]">
                {features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full border-2 border-[#bc341d] group-hover:border-white flex items-center justify-center text-[8px] font-bold text-[#e63946] group-hover:text-white transition-colors">
                            ✓
                        </span>
                        <span className="opacity-90 leading-tight">{item}</span>
                    </li>
                ))}
            </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-white/10">
            <a href="/contact">
                <button className="w-full py-3 rounded-full font-bold uppercase tracking-widest text-xs transition-all bg-transparent border-2 border-[#bc341d] text-white group-hover:bg-white group-hover:text-[#bc341d] group-hover:border-white">
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

export default PackagesSection;