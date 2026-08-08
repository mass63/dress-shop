import React, { useState, useEffect } from 'react';
import { Scissors, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Shop Collection', id: 'shop' },
    { name: 'Tailoring Services', id: 'tailoring' },
    { name: 'About Us', id: 'about' },
    { name: 'Location & Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const genericWhatsAppUrl = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I found your shop website and would like to enquire.`
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-sm py-3 border-b border-stone-200/80'
          : 'bg-stone-100/90 py-4 sm:py-5 border-b border-stone-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Shop Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none focus:ring-2 focus:ring-amber-700/40 rounded-lg p-1"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-900 text-amber-100 flex items-center justify-center shadow-sm group-hover:bg-amber-800 transition-colors">
              <Scissors className="w-5 h-5 transition-transform group-hover:rotate-12" />
            </div>
            <div>
              <span className="block font-bold text-stone-900 text-base sm:text-lg leading-tight tracking-tight">
                {shopConfig.shopName}
              </span>
              <span className="block text-xs font-medium text-amber-800 tracking-wide">
                Dresses & Tailoring
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-stone-200/50 p-1.5 rounded-full border border-stone-300/40">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`nav-link-${link.id}`}
                  className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-900 text-amber-50 shadow-sm'
                      : 'text-stone-700 hover:text-amber-900 hover:bg-stone-300/40'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${shopConfig.phoneNumber}`}
              className="text-stone-700 hover:text-amber-900 p-2 rounded-full hover:bg-stone-200/60 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="Call Shop"
              id="nav-call-btn"
            >
              <Phone className="w-4 h-4 text-stone-600" />
              <span>{shopConfig.displayPhone}</span>
            </a>

            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="nav-whatsapp-cta"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-600 text-white rounded-full text-xs font-medium flex items-center justify-center shadow-sm"
              aria-label="WhatsApp Us"
              id="nav-mobile-wa"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-b border-stone-200 px-4 pt-3 pb-6 space-y-2 shadow-lg animate-fadeIn">
          <div className="space-y-1 pt-1">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  id={`mobile-nav-link-${link.id}`}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-amber-900 text-amber-50 font-semibold'
                      : 'text-stone-700 hover:bg-stone-200/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-300"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-stone-200 space-y-2.5">
            <a
              href={genericWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 text-white py-2.5 rounded-xl text-sm font-medium shadow-sm"
              id="mobile-wa-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href={`tel:${shopConfig.phoneNumber}`}
              className="w-full flex items-center justify-center gap-2 bg-stone-200/80 text-stone-800 py-2.5 rounded-xl text-sm font-medium hover:bg-stone-300/80 transition-colors"
              id="mobile-call-btn"
            >
              <Phone className="w-4 h-4" />
              <span>Call {shopConfig.displayPhone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
