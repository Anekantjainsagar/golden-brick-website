'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Sparkles, 
  Compass, 
  MapPin, 
  Calendar, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Sliders, 
  Clock, 
  Trees, 
  Building2, 
  ExternalLink,
  ChevronDown,
  Trophy,
  Zap,
  Heart,
  Video,
  Droplets
} from 'lucide-react';
import { COMPANY_INFO, TRIDENT_HILLS, FEATURED_PROPERTIES, TESTIMONIALS, FAQS } from '../data/projectData';
import PlotCalculator from '../components/PlotCalculator';
import PaymentMilestones from '../components/PaymentMilestones';
import CrmMobileFeature from '../components/CrmMobileFeature';

export default function HomePage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const triggerSiteVisit = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-site-visit'));
    }
  };

  const getAmenityIcon = (name) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck size={24} color="#c8801f" />;
      case 'Sparkles': return <Sparkles size={24} color="#c8801f" />;
      case 'Trees': return <Trees size={24} color="#c8801f" />;
      case 'Trophy': return <Trophy size={24} color="#c8801f" />;
      case 'Zap': return <Zap size={24} color="#c8801f" />;
      case 'Heart': return <Heart size={24} color="#c8801f" />;
      case 'Video': return <Video size={24} color="#c8801f" />;
      case 'Droplets': return <Droplets size={24} color="#c8801f" />;
      default: return <Sparkles size={24} color="#c8801f" />;
    }
  };

  return (
    <div>
      {/* 1. CINEMATIC HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '88vh',
        background: 'linear-gradient(180deg, rgba(8, 20, 16, 0.78) 0%, rgba(8, 20, 16, 0.92) 100%), url("/images/take-the-centrestage.jpg") center/cover no-repeat',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 0 60px',
        color: '#ffffff',
        borderBottom: '2px solid rgba(200, 128, 31, 0.3)'
      }}>
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
            {/* Price Urgency Banner */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(200, 128, 31, 0.2)',
              border: '1px solid #c8801f',
              padding: '6px 16px',
              borderRadius: '9999px',
              fontSize: '13px',
              color: '#fef08a',
              fontWeight: 700,
              marginBottom: '24px',
              letterSpacing: '0.4px'
            }}>
              <Clock size={14} color="#fef08a" />
              <span>OFFICIAL UPDATE: LIMITED LICENCE-3 PLOTS &bull; CURRENT RATE ₹1.39L / SQ. YD.</span>
            </div>

            <h1 style={{
              fontSize: '52px',
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#ffffff',
              letterSpacing: '-0.5px',
              marginBottom: '20px'
            }} className="hero-title">
              Take the Centrestage.<br />
              <span style={{ color: '#df9e38', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 600 }}>
                Where Nature Finds Its Reflection.
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#e2e8f0',
              lineHeight: 1.7,
              marginBottom: '36px',
              fontWeight: 400
            }}>
              Special Edition Residential Plots nestled in the lush Shivalik foothills at <strong>Trident Hills, Panchkula</strong>. Presented by <strong>Golden Brick</strong> with complete RERA statutory transparency, 8-milestone construction escrow, and live CRM tracking.
            </p>

            {/* Hero Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="#calculator" className="btn-gold" style={{ padding: '16px 32px', fontSize: '16px' }}>
                <Sliders size={18} />
                <span>Calculate Plot Investment</span>
              </a>

              <button
                type="button"
                onClick={triggerSiteVisit}
                className="btn-outline-gold"
                style={{ padding: '16px 32px', fontSize: '16px', color: '#ffffff', borderColor: '#c8801f' }}
              >
                <Calendar size={18} />
                <span>Schedule VIP Site Tour</span>
              </button>
            </div>

            {/* 4 Trust Metrics Ribbon */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              background: 'rgba(8, 20, 16, 0.75)',
              backdropFilter: 'blur(12px)',
              padding: '20px',
              borderRadius: '16px',
              border: '1px solid rgba(200, 128, 31, 0.25)'
            }} className="hero-metrics">
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '12px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f3c178' }}>350+ Acres</div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Masterplan Township</div>
              </div>
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '12px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f3c178' }}>15 Mins</div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>From Chandigarh</div>
              </div>
              <div style={{ borderRight: '1px solid rgba(255, 255, 255, 0.1)', paddingRight: '12px' }}>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f3c178' }}>100%</div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>HRERA Compliant</div>
              </div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#f3c178' }}>8 Steps</div>
                <div style={{ fontSize: '12px', color: '#cbd5e1', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Milestone Escrow</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL ENCLAVE SPOTLIGHT: FOREST VISTA & CENTRAL VISTA */}
      <section style={{ padding: '90px 0', background: 'var(--surface-cream)' }} id="enclaves">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="badge-forest" style={{ marginBottom: '12px' }}>
              <Compass size={13} /> Exclusive Enclaves at Trident Hills
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
              Two Distinct Sanctuaries. One Foothill Address.
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              Choose between the elevated pristine serenity of <strong>Forest Vista</strong> or the grand tree-lined avenues of <strong>Central Vista</strong>.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="enclave-grid">
            {/* Forest Vista Card */}
            <div className="card-luxury" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                <img
                  src="/images/forest-vista-walkway.jpg"
                  alt="Forest Vista Panchkula"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(8, 20, 16, 0.85)',
                  color: '#f3c178',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: '1px solid #c8801f'
                }}>
                  Panoramic Shivalik Views
                </div>
              </div>

              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Forest Vista
                  </h3>
                  <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold-dark)', fontSize: '16px', marginBottom: '14px' }}>
                    &ldquo;A promise of bringing nature to your doorstep&rdquo;
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    Flanked by dense greenery, morning mountain mist, and pristine walking trails. Forest Vista features generously proportioned plots (250 – 500+ Sq. Yds.) oriented towards virgin ridge views.
                  </p>

                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                      <span style={{ color: '#64748b' }}>Plot Sizes:</span>
                      <strong style={{ color: '#0f172a' }}>250 to 500+ Sq. Yds.</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#64748b' }}>RERA Registration:</span>
                      <strong style={{ color: '#143728' }}>HRERA-PKL-PKL-355-2022</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link href="/trident-hills#forest-vista" className="btn-forest" style={{ flex: 1, textAlign: 'center' }}>
                    Explore Enclave
                  </Link>
                  <button type="button" onClick={triggerSiteVisit} className="btn-outline-gold" style={{ padding: '12px 18px' }}>
                    <Calendar size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Central Vista Card */}
            <div className="card-luxury" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', height: '320px', overflow: 'hidden' }}>
                <img
                  src="/images/central-vista-grand-entrance.jpg"
                  alt="Central Vista Panchkula"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(8, 20, 16, 0.85)',
                  color: '#f3c178',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: 700,
                  border: '1px solid #c8801f'
                }}>
                  Grand Architectural Boulevard
                </div>
              </div>

              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '26px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Central Vista
                  </h3>
                  <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold-dark)', fontSize: '16px', marginBottom: '14px' }}>
                    &ldquo;Where every arrival feels grand&rdquo;
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    The prime boulevard sector anchored by a monumental geometric entrance canopy, palm-lined avenues, proximity to the multi-sport clubhouse, and Special Edition plot layouts (200 – 450 Sq. Yds.).
                  </p>

                  <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #e2e8f0', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                      <span style={{ color: '#64748b' }}>Plot Sizes:</span>
                      <strong style={{ color: '#0f172a' }}>200 to 450 Sq. Yds.</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#64748b' }}>RERA Registration:</span>
                      <strong style={{ color: '#143728' }}>HRERA-PKL-PKL-782-2025</strong>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <Link href="/trident-hills#central-vista" className="btn-forest" style={{ flex: 1, textAlign: 'center' }}>
                    Explore Enclave
                  </Link>
                  <button type="button" onClick={triggerSiteVisit} className="btn-outline-gold" style={{ padding: '12px 18px' }}>
                    <Calendar size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE PLOT CALCULATOR SECTION */}
      <section style={{ padding: '90px 0', background: 'var(--surface-alabaster)' }} id="calculator">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div className="badge-gold" style={{ marginBottom: '12px' }}>
              <Sliders size={13} /> Live Financial Transparency
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
              Interactive Plot &amp; Milestone Estimator
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              Configure your plot dimensions, calculate exact allotment components, and inspect the verified 8-phase construction linked payment schedule.
            </p>
          </div>

          <PlotCalculator />
        </div>
      </section>

      {/* 4. 8-MILESTONE PAYMENT ASSURANCE */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e9ecef', borderBottom: '1px solid #e9ecef' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <div className="badge-forest" style={{ marginBottom: '10px' }}>
                <ShieldCheck size={13} /> 100% Construction-Linked
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)' }}>
                Official Licence-3 Payment Plan
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '6px' }}>
                Every installment is tied directly to verified civil, water, electrical, and road milestones.
              </p>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Please%20send%20me%20the%20official%20Trident%20Hills%20payment%20plan%20PDF`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
            >
              Request Official Price Sheet PDF
            </a>
          </div>

          <PaymentMilestones />
        </div>
      </section>

      {/* 5. GOLDEN BRICK VERIFIED PROPERTIES PORTFOLIO */}
      <section style={{ padding: '90px 0', background: 'var(--surface-cream)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <div className="badge-gold" style={{ marginBottom: '12px' }}>
                <Building2 size={13} /> Golden Brick Portfolio
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)' }}>
                Curated Luxury Living Spaces
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginTop: '6px' }}>
                Verified residential plots, luxury floors, and integrated township properties in Panchkula &amp; North India.
              </p>
            </div>

            <Link href="/properties" className="btn-outline-gold">
              <span>View All Properties</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {FEATURED_PROPERTIES.map((prop) => (
              <div key={prop.id} className="card-luxury" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                  <img
                    src={prop.image}
                    alt={prop.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--primary-slate)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {prop.category}
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'var(--accent-gold)',
                    color: '#ffffff',
                    fontSize: '13px',
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: '6px'
                  }}>
                    {prop.price}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '12px', marginBottom: '6px' }}>
                      <MapPin size={13} color="#c8801f" />
                      <span>{prop.location}</span>
                    </div>

                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '14px', lineHeight: 1.3 }}>
                      {prop.title}
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                      {prop.highlights.map((h, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#475569' }}>
                          <CheckCircle2 size={13} color="#184232" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      type="button"
                      onClick={triggerSiteVisit}
                      className="btn-gold"
                      style={{ flex: 1, padding: '10px', fontSize: '13px' }}
                    >
                      Book Tour
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20am%20interested%20in%20${encodeURIComponent(prop.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-gold"
                      style={{ padding: '10px 14px' }}
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LIFESTYLE AMENITIES GRID */}
      <section style={{ padding: '90px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 54px' }}>
            <div className="badge-forest" style={{ marginBottom: '12px' }}>
              <Trees size={13} /> Integrated Foothill Living
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
              Signature Infrastructure &amp; Club Amenities
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              Designed to international master-planning standards with underground utility networks and multi-tier clubhouses.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {TRIDENT_HILLS.amenities.map((amenity, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--surface-alabaster)',
                  border: '1px solid var(--surface-border)',
                  padding: '28px 24px',
                  borderRadius: '16px',
                  transition: 'transform 0.2s ease, border-color 0.2s ease'
                }}
                className="amenity-card"
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '12px',
                  background: 'var(--accent-gold-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                  border: '1px solid var(--accent-gold-border)'
                }}>
                  {getAmenityIcon(amenity.icon)}
                </div>

                <h4 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                  {amenity.title}
                </h4>

                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. GOLDEN BRICK CRM MOBILE APP ENGINE */}
      <CrmMobileFeature />

      {/* 8. FOOTHILL CONNECTIVITY MATRIX */}
      <section style={{ padding: '90px 0', background: 'var(--surface-alabaster)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center' }} className="connectivity-grid">
            <div>
              <div className="badge-gold" style={{ marginBottom: '12px' }}>
                <MapPin size={13} /> Prime Foothills Corridor
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                Minutes From Chandigarh, Miles From The Noise
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '24px' }}>
                Trident Hills is positioned directly on the 6-lane Himalayan Expressway corridor in Sector-4 PKUC, Pinjore. Experience pure mountain breeze while being a short drive from Chandigarh&apos;s corporate centers and the international airport.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button type="button" onClick={triggerSiteVisit} className="btn-gold">
                  <Calendar size={16} />
                  <span>Request Route Guidance Tour</span>
                </button>
              </div>
            </div>

            {/* Travel Time Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {TRIDENT_HILLS.connectivity.map((c, i) => (
                <div
                  key={i}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '14px',
                    padding: '20px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.03)'
                  }}
                >
                  <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--forest-green)', marginBottom: '4px' }}>
                    {c.time}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '4px' }}>
                    {c.landmark}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>
                    Distance: {c.dist}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS & BUYER REVIEWS */}
      <section style={{ padding: '90px 0', background: '#ffffff', borderTop: '1px solid #e9ecef' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 50px' }}>
            <div className="badge-forest" style={{ marginBottom: '12px' }}>
              <Heart size={13} /> Verified Buyer Confidence
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
              What Our Discerning Clients Say
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px' }}>
              Read authentic feedback from homebuyers and investors who partnered with Golden Brick.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="card-luxury" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <p style={{ color: '#334155', fontSize: '14px', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '24px' }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h5 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)' }}>
                      {t.name}
                    </h5>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                      {t.role} &bull; {t.location}
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-gold-dark)', background: 'var(--accent-gold-bg)', padding: '4px 8px', borderRadius: '4px' }}>
                    {t.property}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQS ACCORDION */}
      <section style={{ padding: '80px 0', background: 'var(--surface-cream)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-gold" style={{ marginBottom: '10px' }}>
              <ShieldCheck size={13} /> Buyer Queries Answered
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  style={{
                    background: '#ffffff',
                    borderRadius: '12px',
                    border: isOpen ? '1.5px solid #c8801f' : '1px solid #e2e8f0',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      padding: '18px 24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-dark)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      color="#c8801f"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 20px', color: '#475569', fontSize: '14px', lineHeight: 1.7, borderTop: '1px solid #f8fafc' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11. FINAL VIP INVITATION BANNER */}
      <section style={{
        background: 'linear-gradient(135deg, #081410 0%, #153828 100%)',
        color: '#ffffff',
        padding: '80px 0',
        textAlign: 'center',
        borderTop: '2px solid #c8801f'
      }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} /> Exclusive Foothills Privilege
          </div>
          <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#ffffff', marginBottom: '16px' }}>
            Your Foothills Sanctuary Awaits
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '16px', lineHeight: 1.7, marginBottom: '36px' }}>
            Connect directly with Golden Brick’s senior relationship management team. Review available plot numbers, arrange a private chauffeured site visit, and lock in pre-revision pricing.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={triggerSiteVisit}
              className="btn-gold"
              style={{ padding: '16px 36px', fontSize: '16px' }}
            >
              <Calendar size={18} />
              <span>Schedule Private Site Tour</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-outline-gold"
              style={{ padding: '16px 32px', fontSize: '16px', color: '#ffffff', borderColor: '#c8801f' }}
            >
              <Phone size={18} />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-title {
            fontSize: 38px !important;
          }
          .hero-metrics {
            grid-template-columns: 1fr 1fr !important;
          }
          .enclave-grid {
            grid-template-columns: 1fr !important;
          }
          .connectivity-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
