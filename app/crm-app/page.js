'use client';

import { 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  Download, 
  Users, 
  FileText, 
  ArrowRight, 
  Lock, 
  Bell, 
  Sparkles, 
  BarChart3,
  Apple
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/projectData';

export default function CrmAppPage() {
  const triggerSiteVisit = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-site-visit'));
    }
  };

  const appScreenshots = [
    {
      title: "Executive GDV & Priorities Dashboard",
      badge: "C-Suite Analytics",
      image: "/images/app-screen-dashboard.png",
      features: [
        "Real-time Portfolio Gross Development Value (GDV)",
        "Today's Priorities: New Leads, Site Visits, Pending Tasks & Bookings",
        "Executive Portfolio Analytics & Collection Health (%)",
        "Realized Collections vs. Pending Receivables tracking",
        "Hot Lead indicator (🔥) & active reservation counts"
      ]
    },
    {
      title: "Enterprise Single Sign-On",
      badge: "256-Bit SSL Cloud",
      image: "/images/app-screen-login.png",
      features: [
        "Dedicated corporate domain login (admin@company.com)",
        "Secure biometric and token-based authentication",
        "Real-time role routing (Executive, Relationship Manager, Buyer)",
        "Automated tenant profile bootstrapping from AWS cloud directory"
      ]
    },
    {
      title: "Account Preferences & Cloud Sync",
      badge: "Settings & Profile",
      image: "/images/app-screen-profile.png",
      features: [
        "Personalized agent and admin profile management",
        "Integrated Notification Center for instant lead alerts",
        "Dark Mode and system color scheme toggles",
        "Automated database and document external cloud storage sync"
      ]
    }
  ];

  return (
    <div className="bg-brand-alabaster min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#090e17] via-[#0f172a] to-[#090e17] text-white py-24 border-b-2 border-brand-gold/30">
        <div className="container text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-goldBg border border-brand-gold/30 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-5">
            <Smartphone size={14} className="text-brand-gold" /> Available on iOS &amp; Android
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">
            Golden Brick CRM Mobile
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            A native mobile sales engine and buyer portal designed for real-time plot allocation, 48-hour unit holds, and verified construction milestones.
          </p>

          {/* Store Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Please%20send%20me%20the%20iOS%20App%20Store%20link%20for%20Golden%20Brick%20CRM`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-neutral-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:border-brand-gold/50"
            >
              <Apple size={28} className="text-white" />
              <div className="text-left">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider">
                  Download on the
                </div>
                <div className="text-sm font-bold text-white tracking-tight">
                  Apple App Store (iOS)
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Please%20send%20me%20the%20Google%20Play%20Store%20link%20for%20Golden%20Brick%20CRM`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black hover:bg-neutral-900 border border-white/20 text-white px-6 py-3 rounded-xl transition-all duration-200 shadow-lg hover:border-brand-gold/50"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a2.222 2.222 0 0 1-.61-.926V2.74c0-.336.082-.66.236-.948l.373.022zm11.235 11.238l2.637 2.638-12.82 7.398 10.183-10.036zm0-2.104L4.661.912l12.82 7.399-2.637 2.637zm1.488 1.488l3.18 1.834c.895.516.895 1.358 0 1.874l-3.18 1.834-2.122-2.122 2.122-2.22z" fill="#3DDC84"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-slate-300 uppercase tracking-wider">
                  Get it on
                </div>
                <div className="text-sm font-bold text-white tracking-tight">
                  Google Play (Android)
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* 3 App Screenshots In-Depth Feature Walkthrough */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-goldDark bg-brand-goldBg px-3 py-1 rounded-full border border-brand-gold/30">
              Verified Screen Flow
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mt-4">
              Explore The Mobile User Experience
            </h2>
            <p className="text-slate-600 text-sm md:text-base mt-3">
              Built natively using React Native and Expo, providing instant reactivity, offline caching, and biometric protection.
            </p>
          </div>

          <div className="space-y-24 max-w-5xl mx-auto">
            {appScreenshots.map((item, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div 
                  key={idx}
                  className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-16`}
                >
                  {/* Phone Mockup Frame */}
                  <div className="w-full lg:w-5/12 flex justify-center">
                    <div className="phone-mockup w-full max-w-[300px]">
                      <div className="phone-mockup-inner aspect-[9/19.5] relative overflow-hidden bg-slate-950">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Feature Content */}
                  <div className="w-full lg:w-7/12">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-goldDark bg-brand-goldBg border border-brand-gold/30 px-3 py-1 rounded-full mb-3">
                      {item.badge}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-slate-900 mb-5">
                      {item.title}
                    </h3>

                    <div className="space-y-3.5 mb-8">
                      {item.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base text-slate-700 leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20want%20to%20know%20more%20about%20the%20${encodeURIComponent(item.title)}%20in%20Golden%20Brick%20CRM`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold text-sm"
                      >
                        Request Demonstration
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Architecture Strip */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-brand-gold/20">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-brand-goldLight mb-1">AWS ALB</div>
              <div className="text-xs text-slate-400">High-Availability Routing</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-brand-goldLight mb-1">PostgreSQL</div>
              <div className="text-xs text-slate-400">Encrypted Inventory DB</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-brand-goldLight mb-1">256-Bit SSL</div>
              <div className="text-xs text-slate-400">Bank-Grade Data Security</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl font-bold text-brand-goldLight mb-1">HRERA Escrow</div>
              <div className="text-xs text-slate-400">Direct Milestone Tracking</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
