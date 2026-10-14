'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calendar, Menu, X, ShieldCheck, Smartphone, Sparkles, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';

export default function Navbar({ onOpenSiteVisit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Advisory Strip */}
      <div style={{
        background: 'linear-gradient(90deg, #090e17 0%, #141f32 50%, #090e17 100%)',
        borderBottom: '1px solid rgba(200, 128, 31, 0.25)',
        color: '#e2e8f0',
        fontSize: '12px',
        padding: '8px 0',
        fontWeight: 500
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f3c178' }}>
              <ShieldCheck size={14} /> HARERA Approved: PKL-PKL-355-2022 &amp; PKL-PKL-782-2025
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#cbd5e1' }}>
              <Sparkles size={14} color="#df9e38" /> Official Partner: Trident Hills &amp; DLF Panchkula
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <Link href="/crm-app" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#df9e38' }}>
              <Smartphone size={13} /> Golden Brick CRM App
            </Link>
            <a href={`tel:${COMPANY_INFO.phone}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#ffffff', fontWeight: 600 }}>
              <Phone size={13} color="#df9e38" /> RM Helpline: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(9, 14, 23, 0.96)' : 'rgba(9, 14, 23, 0.90)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(200, 128, 31, 0.3)' : '1px solid rgba(255, 255, 255, 0.08)',
        transition: 'all 0.3s ease'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
          {/* Logo & Brand Identity */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '4px',
              boxShadow: '0 4px 12px rgba(200, 128, 31, 0.25)',
              border: '1px solid #c8801f'
            }}>
              <img
                src="/images/goldenbrick-logo.png"
                alt="Golden Brick"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '20px',
                color: '#ffffff',
                letterSpacing: '1.5px',
                lineHeight: 1.1
              }}>
                GOLDEN BRICK
              </div>
              <div style={{
                fontSize: '11px',
                color: '#c8801f',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                fontWeight: 600
              }}>
                Ventures &bull; Trident Hills
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="hidden-mobile">
            <Link href="/" style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#ffffff',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}>
              Home
            </Link>
            <Link href="/trident-hills" style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#e2e8f0',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}>
              Trident Hills
            </Link>
            <Link href="/pricing" style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#e2e8f0',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}>
              Plot Calculator
            </Link>
            <Link href="/properties" style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#e2e8f0',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}>
              Properties
            </Link>
            <Link href="/crm-app" style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#f3c178',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.6px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8801f' }}></span>
              CRM App
            </Link>
            <Link href="/contact" style={{
              fontSize: '14px',
              fontWeight: 600,
              color: '#e2e8f0',
              transition: 'color 0.2s',
              textTransform: 'uppercase',
              letterSpacing: '0.6px'
            }}>
              Contact
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <button
              onClick={onOpenSiteVisit}
              className="btn-gold"
              style={{
                padding: '10px 20px',
                fontSize: '13px',
                borderRadius: '8px'
              }}
            >
              <Calendar size={15} />
              <span>Book Site Visit</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(200, 128, 31, 0.4)',
                borderRadius: '8px',
                color: '#ffffff',
                padding: '8px',
                cursor: 'pointer',
                display: 'none'
              }}
              className="visible-mobile"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: '#090e17',
            borderBottom: '2px solid #c8801f',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px'
          }}>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Home</span>
              <ChevronRight size={16} color="#c8801f" />
            </Link>
            <Link
              href="/trident-hills"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Trident Hills (Forest &amp; Central Vista)</span>
              <ChevronRight size={16} color="#c8801f" />
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Plot Calculator &amp; Payment Plan</span>
              <ChevronRight size={16} color="#c8801f" />
            </Link>
            <Link
              href="/properties"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Golden Brick Properties</span>
              <ChevronRight size={16} color="#c8801f" />
            </Link>
            <Link
              href="/crm-app"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#f3c178', fontWeight: 600, fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Golden Brick CRM App</span>
              <ChevronRight size={16} color="#c8801f" />
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{ color: '#ffffff', fontWeight: 600, fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span>Relationship Manager &amp; Contact</span>
              <ChevronRight size={16} color="#c8801f" />
            </Link>

            <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline-gold"
                style={{ width: '100%', boxSizing: 'border-box', textAlign: 'center' }}
              >
                <Phone size={16} /> Call Manager: {COMPANY_INFO.phone}
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenSiteVisit) onOpenSiteVisit();
                }}
                className="btn-gold"
                style={{ width: '100%' }}
              >
                <Calendar size={16} /> Schedule VIP Site Tour
              </button>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (max-width: 992px) {
          .hidden-mobile {
            display: none !important;
          }
          .visible-mobile {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
