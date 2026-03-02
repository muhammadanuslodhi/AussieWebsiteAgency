import React, { useState, useEffect } from "react";
import Logo from "../assets/Images/Logo.png";
import ContactPopup from "../Components/PopupForm";

const Header = () => {

  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const services = [
    { name: "Website Development", href: "website-development" },
    { name: "Logo Design", href: "logo" },
    { name: "Ecommerce Solutions", href: "ecommerce" },
    { name: "Animation", href: "animation" },
    { name: "Illustration", href: "illustration" },
    { name: "Mobile Apps", href: "mobile-app" },
    { name: "SEO Services", href: "seo" },
    { name: "SMM", href: "smm" },
  ];

  const navLinks = [
    { name: "About Us", href: "about-us" },
    { name: "Combo Packages", href: "combo-package" },
    { name: "Portfolio", href: "portfolio" },
    { name: "Reviews", href: "review" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
          ? "bg-[#080832]/95 backdrop-blur-md py-3 shadow-xl"
          : "bg-[#080832] py-4 lg:py-6"
          }`}
      >
        <div className="container mx-auto px-4 ">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div className="flex-shrink-0 w-36 sm:w-40 xl:w-48 transition-transform hover:scale-105">
              <a href="/">
                <img src={Logo} alt="Logo" className="w-full h-auto" />
              </a>
            </div>

            {/* Desktop Nav - Optimized for 1024px+ */}
            <nav className="hidden xl:flex items-center">
              <ul className="flex items-center space-x-6 text-[14px] xl:text-[15px] font-medium text-white">
                <li className="relative group">
                  <a href="/" className="transition-colors font-bold">Home</a>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </li>

                <li className="relative group py-2 font-bold">
                  <button className="flex items-center gap-1">
                    Services <i className="fa-solid fa-angle-down text-[10px] group-hover:rotate-180 transition-transform"></i>
                  </button>
                  <div className="absolute top-full left-[-20px] w-64 bg-white rounded-lg shadow-2xl opacity-0 invisible translate-y-4 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 border-t-4 border-[#bc341d]">
                    <ul className="py-2">
                      {services.map((s, i) => (
                        <li key={i}>
                          <a href={s.href} className="block px-6 py-2.5 text-gray-800 hover:bg-gray-50 hover:text-[#bc341d] font-medium transition-colors">{s.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                {navLinks.map((link) => (
                  <li key={link.name} className="relative group whitespace-nowrap font-bold">
                    <a href={link.href} className="transition-colors">{link.name}</a>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Side Items */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Australia Number with Flag */}
              <a
                href="tel:+611800317347"
                className="hidden md:flex text-white font-bold text-sm items-center gap-2 hover:text-[#bc341d] transition-colors group"
              >
                <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:border-[#bc341d]/50 transition-all">
                  <img
                    src="https://flagcdn.com/w20/au.png"
                    alt="AU Flag"
                    className="w-5 h-auto rounded-sm shadow-sm"
                  />
                  {/* <span className="hidden lg:inline">+61 (1800) 317347</span> */}
                </div>
              </a>

              <div className="hidden lg:block">
                <a href="/contact">
                  <button className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20">
                    Get In Touch
                  </button>
                </a>
              </div>


              <button
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none z-[120]"
              >
                <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`fixed inset-0 z-[110] transition-all duration-500 ${isOpen ? "visible" : "invisible"}`}>
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={() => setIsOpen(false)}></div>

        <div className={`absolute right-0 top-0 h-full w-full sm:w-[65%] md:w-[50%] bg-[#080832] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} flex flex-col`}>

          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <img src={Logo} alt="Logo" className="w-32" />
            <button onClick={() => setIsOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#bc341d] transition-all">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <div className="p-8 overflow-y-auto flex-1">
            <ul className="space-y-6">
              <li><a href="/" className="text-2xl font-bold text-white hover:text-blue-400 block" onClick={() => setIsOpen(false)}>Home</a></li>
              <li>
                <button onClick={() => setActiveDropdown(!activeDropdown)} className="w-full flex justify-between items-center text-2xl font-bold text-white tracking-tight">
                  Services <i className={`fa-solid fa-chevron-down text-sm transition-transform ${activeDropdown ? "rotate-180" : ""}`}></i>
                </button>
                <div className={`overflow-hidden transition-all duration-500 ${activeDropdown ? "max-h-[600px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                  <ul className="space-y-4 pl-4 border-l-2 border-[#bc341d]">
                    {services.map((s, i) => (
                      <li key={i}><a href={s.href} className="text-lg text-white/70 hover:text-white block" onClick={() => setIsOpen(false)}>{s.name}</a></li>
                    ))}
                  </ul>
                </div>
              </li>
              {navLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="text-2xl font-bold text-white hover:text-blue-400 block" onClick={() => setIsOpen(false)}>{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="p-10 border-t border-white/10 bg-[#050524]">
          <a href="/contact">
            <button className="w-full bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white py-4 rounded-full font-bold text-lg mb-6 shadow-lg active:scale-95 transition-all">Get In Touch</button></a>
            {/* <a href="tel:+611800317347" className="flex justify-center items-center gap-3 text-white font-bold text-lg hover:text-[#bc341d] transition-colors"><img src="https://flagcdn.com/w20/au.png" alt="AU Flag" className="w-5" />+61 (1800) 317347</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;