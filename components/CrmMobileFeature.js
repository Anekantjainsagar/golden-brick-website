'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Smartphone, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  QrCode, 
  ArrowRight, 
  Download, 
  Users, 
  FileText,
  BarChart3,
  Lock,
  Layers,
  Sparkles,
  Apple
} from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';

export default function CrmMobileFeature() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const screens = [
    {
      id: 'dashboard',
      title: 'Executive C-Suite Analytics',
      subtitle: 'Portfolio GDV & Live Priorities',
      image: '/images/app-screen-dashboard.png',
      caption: 'Live pipeline monitoring, collection health & site visit tracking'
    },
    {
      id: 'login',
      title: 'Enterprise Single Sign-On',
      subtitle: 'Bank-Grade 256-Bit Security',
      image: '/images/app-screen-login.png',
      caption: 'Direct role-based workspace for authorized relationship managers & buyers'
    },
    {
      id: 'profile',
      title: 'Account & Tenant Controls',
      subtitle: 'Real-Time Sync & Backup',
      image: '/images/app-screen-profile.png',
      caption: 'Cloud synchronization, push notifications & verified digital audit trails'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#081410] via-[#0d221a] to-[#081410] text-white py-24 border-t-2 border-b-2 border-brand-gold/30">
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-br from-brand-gold/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-brand-forestGreen/20 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-goldBg border border-brand-gold/30 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-4">
            <Smartphone size={14} className="text-brand-gold" />
            Official Golden Brick Mobile Platform
          </div>

          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight mb-5">
            Real Estate Intelligence on Your Phone
          </h2>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed">
            Golden Brick powers seamless plot inventory management and buyer transparency through our official enterprise app — available on both the <strong className="text-white">Apple App Store (iOS)</strong> and <strong className="text-white">Google Play Store (Android)</strong>.
          </p>
        </div>

        {/* 3 Real App Screens Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end max-w-6xl mx-auto mb-16">
          {screens.map((screen, idx) => (
            <div 
              key={screen.id} 
              className={`flex flex-col items-center transition-all duration-300 ${
                activeTab === screen.id ? 'transform -translate-y-2' : 'opacity-90 hover:opacity-100'
              }`}
              onClick={() => setActiveTab(screen.id)}
            >
              {/* Screen Tab Label */}
              <div className="mb-4 text-center">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-goldLight block">
                  {screen.subtitle}
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {screen.title}
                </h4>
              </div>

              {/* iPhone Realistic Frame */}
              <div className="phone-mockup w-full max-w-[290px] cursor-pointer">
                <div className="phone-mockup-inner aspect-[9/19.5] relative overflow-hidden bg-slate-900">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Caption */}
              <p className="text-xs text-slate-400 text-center mt-4 max-w-[260px] leading-relaxed">
                {screen.caption}
              </p>
            </div>
          ))}
        </div>

        {/* App Store & Google Play Official Download Strip */}
        <div className="max-w-4xl mx-auto bg-slate-950/70 backdrop-blur-md border border-brand-gold/30 rounded-2xl p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-lg border border-brand-gold flex-shrink-0">
                <img
                  src="/images/goldenbrick-logo.png"
                  alt="Golden Brick Mobile App"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-bold text-white font-heading">
                    Golden Brick CRM Mobile
                  </h3>
                  <span className="bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    v1.0.0 Live
                  </span>
                </div>
                <p className="text-sm text-slate-300">
                  Enterprise Inventory, 48-Hour Unit Holds &amp; Milestone Escrow Tracking
                </p>
                <div className="text-xs text-brand-goldLight mt-1 font-mono">
                  Package: {COMPANY_INFO.crmPackage}
                </div>
              </div>
            </div>

            {/* Store Download Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Apple App Store Badge */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Please%20send%20me%20the%20iOS%20App%20Store%20link%20for%20Golden%20Brick%20CRM`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-neutral-900 border border-white/20 text-white px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:border-brand-gold/50"
              >
                <Apple size={26} className="text-white flex-shrink-0" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider leading-none">
                    Download on the
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5">
                    Apple App Store
                  </div>
                </div>
              </a>

              {/* Google Play Store Badge */}
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Please%20send%20me%20the%20Google%20Play%20Store%20link%20for%20Golden%20Brick%20CRM`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-black hover:bg-neutral-900 border border-white/20 text-white px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:border-brand-gold/50"
              >
                <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a2.222 2.222 0 0 1-.61-.926V2.74c0-.336.082-.66.236-.948l.373.022zm11.235 11.238l2.637 2.638-12.82 7.398 10.183-10.036zm0-2.104L4.661.912l12.82 7.399-2.637 2.637zm1.488 1.488l3.18 1.834c.895.516.895 1.358 0 1.874l-3.18 1.834-2.122-2.122 2.122-2.22z" fill="#3DDC84"/>
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider leading-none">
                    Get it on
                  </div>
                  <div className="text-sm font-bold text-white tracking-tight leading-tight mt-0.5">
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
