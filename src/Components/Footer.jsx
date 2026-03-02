import React from 'react';
import FooterBg from "../assets/Images/footer-bg.jpg";
import Logo from "../assets/Images/Logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // 1. bg-contain ko bg-cover se badla taaki gap khatam ho jaye
    // 2. py-16 (top/bottom padding) add ki taaki content image ke andar sahi dikhe
    <footer 
      className="w-full bg-cover bg-no-repeat bg-center py-16 pb-0" 
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          
          {/* Logo and About Section */}
          <div className="w-full lg:w-3/12 px-4 mb-10 lg:mb-0">
            <div className="mb-6">
              <a href="/">
                <img 
                  className="max-w-[150px] mb-4" 
                  src={Logo}
                  alt="Aussies Website Agency Logo" 
                />
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-stack Web, Mobile Design and Development Company.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-white">
              <a href="https://www.facebook.com/aussie.website.agencyy" className="hover:text-blue-500 transition-colors">
                <i className="fa-brands fa-facebook-f text-lg"></i>
              </a>
              <a href="https://www.instagram.com/aussiewebsiteagency/" className="hover:text-blue-400 transition-colors">
                <i className="fa-brands fa-instagram text-lg"></i>
              </a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="w-full lg:w-9/12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 text-white italic">Quick Links</h4>
                <ul className="space-y-3">
                  {['Home', 'About Us', 'Packages', 'Combo Packages', 'Portfolio', 'Reviews', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white flex items-center text-sm transition-colors group">
                        <i className="fa fa-caret-right mr-2 text-xs group-hover:translate-x-1 transition-transform text-orange-600"></i>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 text-white italic">Services</h4>
                <ul className="space-y-3">
                  {[
                    {name: 'Website Development', link: 'website-development'},
                    {name: 'Logo Design', link: 'logo'},
                    {name: 'Ecommerce Solutions', link: 'ecommerce'},
                    {name: 'Animation', link: 'animation'},
                    {name: 'Illustration', link: 'illustration'},
                    {name: 'SMM', link: 'smm'},
                    {name: 'Mobile Apps', link: 'mobile-app'},
                    {name: 'SEO Services', link: 'seo'}
                  ].map((service) => (
                    <li key={service.name}>
                      <a href={`/${service.link}`} className="text-gray-400 hover:text-white flex items-center text-sm transition-colors group">
                        <i className="fa fa-caret-right mr-2 text-xs group-hover:translate-x-1 transition-transform text-orange-600"></i>
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Terms */}
              {/* <div>
                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 text-white italic">Legal Terms</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/logo-design-terms" className="text-gray-400 hover:text-white flex items-center text-sm transition-colors group">
                      <i className="fa fa-caret-right mr-2 text-xs text-orange-600"></i>
                      Logo Design T&Cs
                    </a>
                  </li>
                  <li>
                    <a href="/web-design-terms" className="text-gray-400 hover:text-white flex items-center text-sm transition-colors group">
                      <i className="fa fa-caret-right mr-2 text-xs text-orange-600"></i>
                      Web Design T&Cs
                    </a>
                  </li>
                </ul>
              </div> */}

              {/* Contact Us */}
              <div>
                <h4 className="text-xl font-bold mb-6 border-b border-white/10 pb-2 text-white italic">Contact Us</h4>
                <ul className="space-y-4">
                  {/* <li>
                    <a href="tel:+611800317347" className="text-gray-400 hover:text-white flex items-start text-sm transition-colors group">
                      <i className="fa fa-caret-right mr-2 mt-1 text-xs text-orange-600"></i>
                      <span>+61 (1800) 317347</span>
                    </a>
                  </li> */}
                  <li>
                    <a href="mailto:business@aussiewebsiteagency.com" className="text-gray-400 hover:text-white flex items-start text-sm transition-colors group">
                      <i className="fa fa-caret-right mr-2 mt-1 text-xs text-orange-600"></i>
                      <span className="break-all">business@aussiewebsiteagency.com</span>
                    </a>
                  </li>
                  {/* <li className="text-gray-400 flex items-start text-sm">
                    <i className="fa fa-caret-right mr-2 mt-1 text-xs text-orange-600"></i>
                    <span>139 Bathurst St Sydney, NSW</span>
                  </li> */}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom (Black bar) */}
      <div className="footer-bottom mt-16">
        <div className="bg-black/90 py-5">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm">
              <p>Copyright © {currentYear} Aussies Website Agency. All Rights Reserved.</p>
            </div>
            <ul className="flex items-center space-x-6 text-xs sm:text-sm">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;