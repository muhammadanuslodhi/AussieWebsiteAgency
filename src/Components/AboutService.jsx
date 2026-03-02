import { useParams } from 'react-router-dom';
import { ServiceSlugContent } from '../Components/ServicesSlugContent';
import { ChevronRight, MessageCircle } from 'lucide-react';
import wd from "../assets/Images/wd-1.png"

const AboutService = () => {
    const { slug } = useParams();
    const content = ServiceSlugContent[slug] || ServiceSlugContent["website-development"];

    // Fallback benefits agar data file mein na hon
    const benefits = content.benefits || [];

    return (
        /* Background color #05052e apply kiya gaya hai */
        <section className="py-16 md:py-24 overflow-hidden bg-[#05052e]">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                    {/* Left Side: Image Area */}
                    <div className="w-full lg:w-1/2">
                        <div className="pt-[20px] lg:pt-[70px] relative flex justify-center">
                            {/* Glow Effect */}
                            <div className="absolute -z-10 top-20 -left-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>

                            <img
                                src={content.modelImg} // Dynamic Image
                                alt={content.modelHeading}
                                className="w-[85%] md:w-[70%] lg:w-[80%] h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Side: Text Area */}
                    <div className="w-full lg:w-1/2">
                        <div className="space-y-6">
                            {/* Dynamic Heading */}
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                {content.modelHeading}
                            </h3>

                            {/* Dynamic Description */}
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                                {content.modelDesc}
                            </p>

                            {/* Benefits Section */}
                            <div className="space-y-4 pt-4">
                                <h6 className="text-lg font-bold text-white">
                                    Following are some of the benefits of having our Services:
                                </h6>

                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-300 group">
                                            <ChevronRight className="w-5 h-5 text-[#f34529] flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                                            <span className="text-sm md:text-base">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap items-center gap-4 pt-6">
                                <a href="/contact">
                  <button  className="bg-gradient-to-r from-[#830d0f] to-[#bc341d] text-white px-7 py-3 rounded-full font-bold hover:from-[#bc341d] hover:to-[#830d0f] transition-all duration-500 active:scale-95 shadow-lg shadow-[#830d0f]/20">
                    Get Started
                  </button>
                </a>

                                <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 backdrop-blur-sm">
                                    <MessageCircle className="w-5 h-5" />
                                    Let's Chat
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutService;