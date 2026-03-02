import React from 'react';
import { Star } from 'lucide-react'; // Star icons ke liye

import review1 from "../assets/Images/review1.png"
import review2 from "../assets/Images/review2.png"
import review3 from "../assets/Images/review3.png"
import review4 from "../assets/Images/review4.png"
import review5 from "../assets/Images/review5.png"
import review6 from "../assets/Images/review6.png"

const ReviewCards = () => {
  const reviewsData = [
    {
      id: 1,
      name: "Bill Richards",
      role: "Construction Consultant",
      title: "Life Saver",
      img: review1,
      review: "My Website was completed so quickly. This was not what I was expecting, they have made something beyond my imagination. my project was delivered within two to three weeks."
    },
    {
      id: 2,
      name: "John Felex",
      role: "CEO Marketing Agency",
      title: "Outstanding Service",
      img: review2,
      review: "A perfect logo! Alex was the humblest and patient through the whole logo designing process and gave the best design advice I could ever get. Thanks to the designing team."
    },
    {
      id: 3,
      name: "Peter Marshall",
      role: "Garage Owner",
      title: "Best Experience",
      img: review3,
      review: "Cheers to the Aussies Website Agency created a brilliant animation for my social media page, I was amazed at what they had created. With only a few ideas they created something extraordinary."
    },
    {
      id: 4,
      name: "Bella Whiterose",
      role: "Beauty Salon Owner",
      title: "Remarkable Work!",
      img: review4,
      review: "I am glad that I chose the Aussies Website Agency for my logo, they not only delivered within time but also they have created the best logo design for my salon. I am so thankful."
    },
    {
      id: 5,
      name: "Sean Dawson",
      role: "Music Producer",
      title: "Loved the work",
      img: review5,
      review: "Best social media services by my buddies, they are the best. Excellent customer support, they noted each of my requirements and suggested accordingly. I highly appreciate their hard work."
    },
    {
      id: 6,
      name: "Eric Cooper",
      role: "Owner at a Brand Store",
      title: "Extremely satisfied!",
      img: review6,
      review: "Aussies Website Agency have created a great website for my small business, I am so excited and emotional. Ever since I started my business I wanted a beautiful website for it."
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-[#0a0d14] overflow-hidden">
      
      {/* Background Floating Elements (Aap inki paths check karlein) */}
      <div className="absolute top-10 left-10 opacity-20 animate-pulse"><img src="assets/images/webp/elements/element-16.webp" alt="" /></div>
      <div className="absolute bottom-10 right-10 opacity-20"><img src="assets/images/webp/elements/element-14.webp" alt="" /></div>

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h6 className="text-blue-400 font-semibold tracking-widest uppercase text-sm mb-4">
            This Is What Industry’s
          </h6>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Top Clientele Sounds Like
          </h3>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
            On one hand, we strive to outperform excellence in our processes and business behaviors for unceasing success, while on the other hand, we place customer satisfaction as the utmost priority.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviewsData.map((item) => (
            <div key={item.id} className="bg-[#111622] border border-white/5 p-8 rounded-2xl hover:border-blue-500/50 transition-all duration-300 group">
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-800 border-2 border-blue-500/20 group-hover:border-blue-500">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-lg">{item.title}</h5>
                  <p className="text-gray-500 text-xs">Overall Rating from 49 Users</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <span className="text-blue-400 text-xs uppercase tracking-wider">{item.role}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewCards;