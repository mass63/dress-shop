import React from 'react';
import { Palette, Ruler, Scissors, ShoppingBag, ArrowRight } from 'lucide-react';
import { SectionHeading } from './SectionHeading';

export const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Design',
      desc: 'Bring your fabric, choose a dress from our shop, or pick a neck & sleeve design pattern from our catalog.',
      icon: <Palette className="w-6 h-6 text-amber-900" />
    },
    {
      number: '02',
      title: 'Share Measurements',
      desc: 'Visit our shop for a quick 2-minute personal measurement, or bring a sample garment that fits you well.',
      icon: <Ruler className="w-6 h-6 text-amber-900" />
    },
    {
      number: '03',
      title: 'Precision Stitching',
      desc: 'Master tailor hand-cuts, lines, overlocks, and stitches your outfit with reinforced seams.',
      icon: <Scissors className="w-6 h-6 text-amber-900" />
    },
    {
      number: '04',
      title: 'Trial & Collection',
      desc: 'Try your outfit at the shop. Free minor adjustment on the spot if needed, then take it home!',
      icon: <ShoppingBag className="w-6 h-6 text-amber-900" />
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-stone-100/80 border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Simple 4-Step Process"
          title="How Custom Tailoring Works"
          subtitle="From initial measurement to trial fitting — getting your perfect outfit stitched is simple & stress-free."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Number Badge & Icon */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-amber-900/30 group-hover:text-amber-800/80 transition-colors">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Indicator line for desktop */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-stone-300">
                  <ArrowRight className="w-5 h-5 text-amber-800/40" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
