import React, { useState } from 'react';
import { Send, MessageCircle, Phone, CheckCircle2, User, Calendar, Mail } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { buildGeneralContactMessage, getWhatsAppUrl } from '../utils/whatsapp';
import { SectionHeading } from './SectionHeading';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Custom Blouse Stitching');
  const [message, setMessage] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = buildGeneralContactMessage(
      name || 'Customer',
      phone || 'Not provided',
      interest,
      `${message}${preferredDate ? ` (Preferred Date: ${preferredDate})` : ''}`
    );
    const waUrl = getWhatsAppUrl(fullMessage);
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Direct Contact"
          title="Send Us An Enquiry"
          subtitle="Have a question about dress availability, fabric requirements, or stitching rates? Message us directly!"
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-lg">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900">Enquiry Link Opened!</h3>
              <p className="text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
                Your pre-filled message has been generated for WhatsApp. If it did not open automatically, click the button below:
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-semibold text-amber-900 underline underline-offset-2 hover:text-amber-950"
              >
                ← Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="contact-name-input"
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:ring-2 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      id="contact-phone-input"
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:ring-2 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Interest Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                    Service or Product Interest
                  </label>
                  <select
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    id="contact-interest-select"
                    className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:ring-2 focus:ring-amber-800 focus:outline-none"
                  >
                    <option value="Custom Blouse Stitching">Custom Blouse Stitching</option>
                    <option value="Chudidar & Salwar Suit Stitching">Chudidar & Salwar Suit Stitching</option>
                    <option value="Buy Ready-made Dress/Kurti">Buy Ready-made Dress/Kurti</option>
                    <option value="Express Dress Alteration">Express Dress Alteration</option>
                    <option value="Kids Ethnic Wear Stitching">Kids Ethnic Wear Stitching</option>
                    <option value="General Shop Inquiry">General Shop Inquiry</option>
                  </select>
                </div>

                {/* Preferred Visit Date */}
                <div>
                  <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                    Preferred Visit Date (Optional)
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      id="contact-date-input"
                      className="w-full pl-10 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:ring-2 focus:ring-amber-800 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                  Your Message or Requirement Details
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us what you'd like to stitch or buy..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contact-message-input"
                  className="w-full p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-900 focus:ring-2 focus:ring-amber-800 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-2xl shadow-sm transition-all text-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>Send Enquiry via WhatsApp →</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
