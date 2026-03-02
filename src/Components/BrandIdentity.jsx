import React from 'react';
import { ThumbsUp, Lightbulb, CalendarDays } from 'lucide-react';

const BrandIdentityStrip = () => {
  return (
    <section className="w-full bg-[#c20045] py-4 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-0 lg:divide-x lg:divide-white/30">
          
          {/* Text Section */}
          <div className="px-6 py-2 lg:w-1/4">
            <p className="text-sm md:text-base font-medium text-center lg:text-left leading-tight">
              Your brand identity is the representation of your brand's personality.
            </p>
          </div>

          {/* Icon Item 1: 100% Satisfaction */}
          <div className="px-6 py-2 flex items-center gap-4 lg:w-1/4 justify-center">
            <ThumbsUp size={32} strokeWidth={1.5} className="flex-shrink-0" />
            <span className="text-sm font-semibold leading-tight">
              100% Satisfaction <br /> Guaranteed
            </span>
          </div>

          {/* Icon Item 2: Unique Design */}
          <div className="px-6 py-2 flex items-center gap-4 lg:w-1/4 justify-center">
            <Lightbulb size={32} strokeWidth={1.5} className="flex-shrink-0" />
            <span className="text-sm font-semibold leading-tight">
              Unique Design <br /> Guarantee
            </span>
          </div>

          {/* Icon Item 3: 24/7 Consultancy */}
          <div className="px-6 py-2 flex items-center gap-4 lg:w-1/4 justify-center">
            <CalendarDays size={32} strokeWidth={1.5} className="flex-shrink-0" />
            <span className="text-sm font-semibold leading-tight">
              24/7 Design <br /> Consultancy
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandIdentityStrip;