import React from 'react';
import { Scissors, Sparkles, Clock, CheckCircle2, MessageCircle, Feather, Heart, Ruler, ChevronRight } from 'lucide-react';
import { TailoringService } from '../types';
import { buildTailoringEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';
import { Badge } from './Badge';

interface ServiceCardProps {
  service: TailoringService;
  onEnquire?: (service: TailoringService) => void;
}

const iconMap: Record<string, React.ReactNode> = {
  Scissors: <Scissors className="w-5 h-5 text-amber-900" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-900" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-800" />,
  Feather: <Feather className="w-5 h-5 text-amber-900" />,
  Heart: <Heart className="w-5 h-5 text-rose-800" />,
  Ruler: <Ruler className="w-5 h-5 text-stone-800" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onEnquire }) => {
  const waMessage = buildTailoringEnquiryMessage(service.title);
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
      
      {/* Service Image & Header */}
      <div className="relative h-48 overflow-hidden bg-stone-100">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <Badge variant="gold">
            <Clock className="w-3 h-3 mr-1 inline" />
            {service.turnaroundTime}
          </Badge>
          {service.popular && (
            <Badge variant="emerald">Popular Service</Badge>
          )}
        </div>

        {/* Title overlay */}
        <div className="absolute bottom-3 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-8 h-8 rounded-lg bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-xs">
              {iconMap[service.iconName] || <Scissors className="w-4 h-4 text-amber-900" />}
            </div>
            <span className="text-xs font-medium text-amber-200 tracking-wide uppercase">
              {service.category}
            </span>
          </div>
          <h3 className="text-lg font-bold text-white leading-snug">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-3">
            {service.shortDescription}
          </p>

          {/* Highlights checklist */}
          <ul className="space-y-1.5 text-xs text-stone-700">
            {service.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer & Action */}
        <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[11px] text-stone-500 font-medium">Estimated Stitching</div>
            <div className="text-sm sm:text-base font-extrabold text-stone-900">
              {service.startingPrice}
            </div>
          </div>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`service-wa-${service.id}`}
            className="inline-flex items-center gap-1.5 bg-amber-900 hover:bg-amber-950 text-amber-50 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all shadow-xs hover:shadow active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ask About Tailoring</span>
          </a>
        </div>

      </div>

    </div>
  );
};
