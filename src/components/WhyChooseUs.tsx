import React from 'react';
import { UserCheck, Scissors, Sparkles, ShieldCheck, Heart, Clock } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { SectionHeading } from './SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="w-6 h-6 text-amber-900" />,
  Scissors: <Scissors className="w-6 h-6 text-amber-900" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-900" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-amber-900" />
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-stone-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Why Choose Our Shop"
          title="The Local Family Boutique Advantage"
          subtitle="Unlike mass factory manufacturing, we focus on individual care, honest pricing, and long-lasting stitching."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {shopConfig.businessValues.map((val, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 space-y-3 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-100/80 group-hover:bg-amber-200/90 flex items-center justify-center transition-colors">
                {iconMap[val.icon] || <Heart className="w-6 h-6 text-amber-900" />}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-stone-900">
                {val.title}
              </h3>

              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
