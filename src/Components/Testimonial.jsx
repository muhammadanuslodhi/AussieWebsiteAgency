import React from 'react';

const Testimonial = () => {
    const testimonials = [
        { id: 1, description: "Choosing Aussie was the best decision for my brand. Their logo design is creative, professional, and timely.", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", name: "Alex Turner", company: "Vercel" },
        { id: 2, description: "My website was completed so quickly by Aussie. They went beyond my expectations and delivered a project that truly amazed me.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", name: "Harry Peter", company: "Amazon" },
        { id: 3, description: "Aussie is amazing! Their social media services are top-notch, and they always made sure my requirements were met.", image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60", name: "Jason Kim", company: "Flipkart" },
        { id: 4, description: "I’ve always dreamed of a beautiful website for my business, and Aussie made it a reality. Truly impressed!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop", name: "Sofia Martinez", company: "Linear" },
        { id: 5, description: "Aussie made an outstanding animation for my page. The result is beyond what I imagined!", image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60", name: "Alex Johnson", company: "Microsoft" },
        { id: 6, description: "Great experience working with the team. They understood my vision perfectly.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200", name: "David Enos", company: "Google" },
    ];

    // Split testimonials into 3 arrays for the columns
    const firstCol = testimonials.slice(0, 2);
    const secondCol = testimonials.slice(2, 4);
    const thirdCol = testimonials.slice(4, 6);

    const renderCard = (testimonial, index) => (
        <div key={`${testimonial.id}-${index}`} className="bg-gradient-to-b from-[#020204] to-[#830d0f] border border-slate-800 rounded-xl p-6 mb-4 hover:border-slate-600 transition-all duration-300">
            <div className="mb-4">
                <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
                    <path d="M7 13.056c.464 0 .91-.131 1.237-.364.329-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88C7.91 6.97 7.464 6.838 7 6.838c-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.513-.879.328-.233.773-.364 1.237-.364.232 0 .455-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.619-.181c-1.392 0-2.728.393-3.712 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.513.88.328.233.773.364 1.237.364zm9.83 0c.465 0 .91-.131 1.238-.364.328-.234.513-.55.513-.88v-3.73c0-.33-.184-.647-.513-.88-.328-.233-.773-.364-1.237-.364-.232 0-.455-.066-.619-.182-.164-.117-.256-.275-.256-.44v-.622c0-.33.184-.646.512-.879.329-.233.774-.364 1.238-.364.232 0 .454-.066.619-.182.164-.117.256-.275.256-.44V2.485c0-.165-.092-.323-.256-.44a1.1 1.1 0 0 0-.62-.181c-1.391 0-2.727.393-3.711 1.092-.985.7-1.538 1.649-1.538 2.638v6.218c0 .33.184.646.512.88.329.233.774.364 1.238.364z" stroke="#fff" strokeOpacity=".6" strokeWidth="2"/>
                </svg>
            </div>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
                {testimonial.description}
            </p>
            <div className="flex items-center gap-3">
                <img src={testimonial.image} alt={testimonial.name} className="w-9 h-9 rounded-full border border-slate-700 object-cover" />
                <div>
                    <p className="text-sm text-slate-200 font-semibold">{testimonial.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{testimonial.company}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="bg-black py-16 px-4 overflow-hidden relative font-sans">
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll-up {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(-50%); }
                }
                .animate-marquee {
                    animation: scroll-up var(--duration, 30s) linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />

            <div className="max-w-6xl mx-auto">
                {/* Header Section Optional */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
                    <p className="text-slate-400">Trusted by founders worldwide.</p>
                </div>

                <div className="relative h-[600px] overflow-hidden">
                    {/* Fading Overlays */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none"></div>

                    {/* Responsive Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
                        
                        {/* Column 1 - Visible on all screens */}
                        <div className="flex flex-col">
                            <div className="animate-marquee" style={{ '--duration': '20s' }}>
                                {[...firstCol, ...firstCol].map((t, i) => renderCard(t, i))}
                            </div>
                        </div>

                        {/* Column 2 - Hidden on Mobile, Visible on Tablet+ */}
                        <div className="hidden md:flex flex-col">
                            <div className="animate-marquee" style={{ '--duration': '25s' }}>
                                {[...secondCol, ...secondCol].map((t, i) => renderCard(t, i))}
                            </div>
                        </div>

                        {/* Column 3 - Hidden on Mobile & Tablet, Visible on Desktop */}
                        <div className="hidden lg:flex flex-col">
                            <div className="animate-marquee" style={{ '--duration': '22s' }}>
                                {[...thirdCol, ...thirdCol].map((t, i) => renderCard(t, i))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;


