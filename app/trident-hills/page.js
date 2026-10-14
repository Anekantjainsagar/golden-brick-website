'use client';

import { ShieldCheck, Compass, Trees, Building2, Calendar, Phone, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, TRIDENT_HILLS } from '../../data/projectData';

export default function TridentHillsPage() {
  const triggerSiteVisit = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-site-visit'));
    }
  };

  return (
    <div>
      {/* Hero Header */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(9, 14, 23, 0.90) 0%, rgba(15, 23, 42, 0.97) 100%), url("/images/nature-reflection-sunglasses.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '100px 0 70px',
        borderBottom: '2px solid rgba(200, 128, 31, 0.3)'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <div className="badge-gold" style={{ marginBottom: '16px' }}>
            <Sparkles size={13} /> Integrated Foothill Township &bull; Panchkula
          </div>
          <h1 style={{ fontSize: '48px', fontWeight: 800, color: '#ffffff', marginBottom: '18px', fontFamily: 'var(--font-heading)' }}>
            Trident Hills, Panchkula
          </h1>
          <p style={{ fontSize: '18px', color: '#e2e8f0', lineHeight: 1.7, fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>
            &ldquo;Premium. Pristine. Panoramic.&rdquo;
          </p>
          <p style={{ fontSize: '15px', color: '#94a3b8', marginTop: '12px', lineHeight: 1.7 }}>
            Sector-4, PKUC, Pinjore-Panchkula Urban Complex, Haryana (India)
          </p>
        </div>
      </section>

      {/* Overview & Key Highlights */}
      <section style={{ padding: '80px 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '50px', alignItems: 'center' }} className="detail-grid">
            <div>
              <div className="badge-gold" style={{ marginBottom: '12px' }}>
                <Trees size={13} /> The Foothills Sanctuary
              </div>
              <h2 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '18px' }}>
                A Master-Planned 350+ Acre Low-Density Community
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
                Nestled along the pristine Shivalik ridges, Trident Hills is designed for those who refuse to compromise between the untouched beauty of nature and urban sophistication. Situated in Sector-4 of the Pinjore-Kalka Urban Complex (PKUC), it commands panoramic hill slopes, clean mountain breeze, and immediate access to the 6-lane Himalayan Expressway.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.8, marginBottom: '30px' }}>
                Whether you select the elevated forest sanctuary of <strong>Forest Vista</strong> or the grand gated boulevards of <strong>Central Vista</strong>, each plot is endowed with 100% underground utilities, wide internal roads, and access to world-class sports &amp; wellness clubhouses.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button type="button" onClick={triggerSiteVisit} className="btn-gold">
                  <Calendar size={16} />
                  <span>Book VIP Site Visit</span>
                </button>
                <a href={`tel:${COMPANY_INFO.phone}`} className="btn-outline-gold">
                  <Phone size={16} />
                  <span>Call: {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>

            {/* Visual Highlight Card */}
            <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1.5px solid rgba(200, 128, 31, 0.3)', boxShadow: 'var(--shadow-card)' }}>
              <img
                src="/images/forest-vista-sunrise.jpg"
                alt="Trident Hills Sunrise"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{ background: '#090e17', color: '#ffffff', padding: '20px' }}>
                <div style={{ fontSize: '12px', color: '#c8801f', fontWeight: 700, textTransform: 'uppercase' }}>
                  Actual Site Perspective
                </div>
                <div style={{ fontSize: '16px', fontWeight: 700, marginTop: '2px' }}>
                  Uninterrupted Shivalik Foothill Horizons
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enclaves Deep Dive */}
      <section style={{ padding: '80px 0', background: 'var(--surface-cream)' }} id="enclaves">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px' }}>
            <div className="badge-gold" style={{ marginBottom: '12px' }}>
              <Compass size={13} /> Distinct Sectors
            </div>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '14px' }}>
              Explore the Signature Enclaves
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
            {/* Enclave 1: Forest Vista */}
            <div id="forest-vista" className="card-luxury" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', overflow: 'hidden' }} className="enclave-subgrid">
              <div style={{ minHeight: '340px', position: 'relative' }}>
                <img
                  src="/images/forest-vista-walkway.jpg"
                  alt="Forest Vista Plots"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge-gold" style={{ marginBottom: '12px' }}>
                    HRERA-PKL-PKL-355-2022
                  </div>
                  <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Forest Vista Residential Plots
                  </h3>
                  <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold-dark)', fontSize: '16px', marginBottom: '16px' }}>
                    &ldquo;A promise of bringing nature to your doorstep&rdquo;
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    Forest Vista is designed as a peaceful sanctuary for health, wellness, and rejuvenation. Located on gently sloping terrain directly bordering protected green ridgelines, morning jogs and evening walks are framed by lush foliage and cool Himalayan air.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                    <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Plot Dimensions</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>250 to 500+ Sq. Yds.</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Landscape Feature</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Nature Trails &amp; Mist Ridge</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={triggerSiteVisit} className="btn-gold" style={{ flex: 1 }}>
                    Schedule Forest Vista Tour
                  </button>
                  <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20am%20interested%20in%20Trident%20Hills%20Forest%20Vista%20Plots`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Enclave 2: Central Vista */}
            <div id="central-vista" className="card-luxury" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', overflow: 'hidden' }} className="enclave-subgrid">
              <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div className="badge-gold" style={{ marginBottom: '12px' }}>
                    HRERA-PKL-PKL-782-2025
                  </div>
                  <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Central Vista Residential Plots
                  </h3>
                  <div style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: 'var(--accent-gold-dark)', fontSize: '16px', marginBottom: '16px' }}>
                    &ldquo;Where every arrival feels grand&rdquo;
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
                    Central Vista commands the primary spine of Trident Hills. Defined by monumental architectural entrance portals, tree-shaded multi-lane avenues, and immediate walking distance to the multi-sport clubhouse, Central Vista provides prestige, convenience, and elevated architectural presence.
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
                    <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Plot Dimensions</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>200 to 450 Sq. Yds.</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>Boulevard Feature</div>
                      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Grand Entry &amp; Clubhouse Access</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button type="button" onClick={triggerSiteVisit} className="btn-gold" style={{ flex: 1 }}>
                    Schedule Central Vista Tour
                  </button>
                  <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20am%20interested%20in%20Trident%20Hills%20Central%20Vista%20Plots`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold">
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>

              <div style={{ minHeight: '340px', position: 'relative' }}>
                <img
                  src="/images/central-vista-grand-entrance.jpg"
                  alt="Central Vista Grand Entry"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory RERA Table */}
      <section style={{ padding: '70px 0', background: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="badge-gold" style={{ marginBottom: '8px' }}>
              <ShieldCheck size={13} /> Full Legal Compliance
            </div>
            <h3 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-dark)' }}>
              Statutory Haryana RERA Registrations
            </h3>
          </div>

          <div style={{ background: '#f8fafc', borderRadius: '16px', border: '1.5px solid #e2e8f0', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
              <thead>
                <tr style={{ background: '#090e17', color: '#ffffff' }}>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Phase &amp; Project Name</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>HRERA Registration Number</th>
                  <th style={{ padding: '16px 20px', fontWeight: 700 }}>Statutory Validity</th>
                </tr>
              </thead>
              <tbody>
                {TRIDENT_HILLS.rera.map((r, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '16px 20px', fontWeight: 700, color: '#0f172a' }}>{r.name}</td>
                    <td style={{ padding: '16px 20px', color: '#c8801f', fontWeight: 600 }}>{r.number}</td>
                    <td style={{ padding: '16px 20px', color: '#0f172a', fontWeight: 600 }}>{r.validity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .detail-grid {
            grid-template-columns: 1fr !important;
          }
          .enclave-subgrid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
