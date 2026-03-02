import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ServiceSlugContent } from '../Components/ServicesSlugContent';

const ServiceTypes = () => {
    const { slug } = useParams();
    
    // 1. Current Page ka content nikalna
    const pageData = ServiceSlugContent[slug]?.typesSection || ServiceSlugContent["website-development"].typesSection;

    // 2. State for Tabs (Slug change hone par pehli tab select ho jaye)
    const [activeTab, setActiveTab] = useState(pageData.tabs[0].id);

    useEffect(() => {
        setActiveTab(pageData.tabs[0].id);
    }, [slug, pageData]);

    const activeContent = pageData.tabs.find(tab => tab.id === activeTab) || pageData.tabs[0];

    return (
        <section className="py-20 bg-[#05052e]">
            {/* Header Section */}
            <div className="container mx-auto px-6 text-center mb-12">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    {/* Header ka last part highlight karne ke liye split logic */}
                    {pageData.header.split(' ').slice(0, -3).join(' ')} <span className="text-[#f34529]">{pageData.header.split(' ').slice(-3).join(' ')}</span>
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    {pageData.subHeader}
                </p>
            </div>

            <div className="container mx-auto px-6">
                {/* Dynamic Tabs Navigation */}
                <div className="flex justify-center mb-10 w-full px-4">
                    <ul className="flex flex-wrap justify-center gap-2 bg-[#08083a] shadow-2xl rounded-2xl md:rounded-full p-2 border border-blue-900/50">
                        {pageData.tabs.map((tab) => (
                            <li key={tab.id} className="list-none">
                                <button
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-6 md:px-8 py-3 rounded-xl md:rounded-full text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                                        activeTab === tab.id
                                            ? 'bg-gradient-to-r from-[#f34529] to-[#c20045] text-white shadow-lg'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content Area Box */}
                <div className="bg-[#080832] p-8 md:p-12 rounded-3xl shadow-2xl border border-white/5 transition-all duration-500">
                    <div className="mb-10 text-center lg:text-left">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-4 border-l-4 border-[#f34529] pl-4">
                            {activeContent.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed max-w-4xl text-lg">
                            {activeContent.desc}
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {activeContent.images.map((img, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#f34529]/50 transition-all duration-500 shadow-lg aspect-[4/3]"
                            >
                                <img
                                    src={img}
                                    alt="PortfolioItem"
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#05052e] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                                    <div className="w-12 h-1 rounded bg-[#f34529]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTypes;