/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HMSSimulator from './components/HMSSimulator';
import About from './components/About';
import Contact from './components/Contact';
import { Activity, Mail, Phone, ShieldCheck, Heart, ArrowUp, ChevronRight } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll height to show/hide scroll-to-top button and track active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle Scroll Top button
      setShowScrollTop(window.scrollY > 500);

      // Section highlighters
      const sections = ['hero', 'services', 'hms-simulator', 'infrastructure', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for trigger point

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-[#05070a] min-h-screen text-white selection:bg-teal-400 selection:text-black font-sans antialiased">
      {/* Dynamic Header / Navigation */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Hero Entrance Block */}
      <div id="hero">
        <Hero
          onLearnMoreClick={() => scrollToSection('infrastructure')}
          onExploreHMSClick={() => scrollToSection('hms-simulator')}
        />
      </div>

      {/* Services Breakdown */}
      <Services />

      {/* Operational Coordination & HMS Sandbox Simulator */}
      <HMSSimulator />

      {/* Detailed Corporate Biography & Standards */}
      <About />

      {/* Partnership Inquiry & Direct Contact Details */}
      <Contact />

      {/* Corporate Footprint Footer */}
      <footer className="bg-[#05070a] text-white/50 border-t border-white/10 py-16 px-6 md:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-12">
          {/* Brand Card - Col 4 */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <img 
                  src="/src/assets/images/raphalink_logo_1787009618295.jpg" 
                  alt="RaphaLink Logo" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-serif font-normal text-lg text-white tracking-tight">
                  Rapha<span className="text-teal-400">Link</span>
                </span>
                <span className="block text-[9px] text-white/40 uppercase tracking-widest leading-none font-semibold mt-0.5">
                  Healthcare Pvt Ltd
                </span>
              </div>
            </div>
            <p className="font-sans text-xs text-white/60 leading-relaxed max-w-sm">
              We specialize in constructing highly compliant physical healthcare facilities alongside engineering customizable Hospital Management Systems (HMS) to ensure seamless, real-time clinical flow.
            </p>
            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 px-3 py-2 rounded-lg w-max text-xs text-teal-400 font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>Certified NABH & HIPAA Compliance Standard</span>
            </div>
          </div>

          {/* Navigation Links - Col 3 */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Service Solutions
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs md:text-sm">
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>Turnkey Facility Construction</span>
              </button>
              <button onClick={() => scrollToSection('infrastructure')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>Smart Operating Rooms</span>
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>Medical Air & Gas Pipings</span>
              </button>
              <button onClick={() => scrollToSection('hms-simulator')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>Hospital Management Systems (HMS)</span>
              </button>
            </div>
          </div>

          {/* Quick Links - Col 2 */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Corporate
            </h4>
            <div className="flex flex-col space-y-2.5 text-xs md:text-sm">
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>About Our Vision</span>
              </button>
              <button onClick={() => scrollToSection('hms-simulator')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>Interactive Sandbox</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-white transition-colors cursor-pointer flex items-center">
                <ChevronRight className="h-3 w-3 mr-1.5 text-white/30" />
                <span>Inquiries & Hotline</span>
              </button>
            </div>
          </div>

          {/* Contact Details - Col 3 */}
          <div className="md:col-span-3 space-y-4 text-xs md:text-sm">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
              Hotline & Inquiries
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="mailto:raphalinkglobal@gmail.com" className="hover:text-white transition-colors truncate block">
                  raphalinkglobal@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+919995774304" className="hover:text-white transition-colors block">
                  +91 9995774304
                </a>
              </div>
            </div>
            <p className="text-[10px] text-white/40 leading-relaxed pt-2">
              RaphaLink Global Partnership Office. Direct inquiries are monitored 24/7.
            </p>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/40 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} RaphaLink Healthcare Pvt Ltd. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>ISO 9001:2015 & ISO 13485 Certified</span>
            <span className="flex items-center">
              Made for clinical excellence <Heart className="h-3 w-3 text-rose-500 fill-rose-500 ml-1.5" />
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          id="scroll-to-top-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 bg-white hover:bg-teal-400 text-black p-3.5 rounded-none transition-all duration-200 shadow-xl cursor-pointer hover:-translate-y-0.5"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
