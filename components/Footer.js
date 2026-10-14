import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, Smartphone, ExternalLink, ArrowRight } from 'lucide-react';
import { COMPANY_INFO, TRIDENT_HILLS } from '../data/projectData';

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #081410 0%, #050d0a 100%)',
      color: '#cbd5e1',
      borderTop: '2px solid #c8801f',
      paddingTop: '64px',
      paddingBottom: '32px',
      fontSize: '14px'
    }}>
      <div className="container">
        {/* Top 4-Column Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr', gap: '40px', marginBottom: '56px' }} className="footer-grid">
          {/* Col 1: About Golden Brick */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px' }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px',
                border: '1px solid #c8801f'
              }}>
                <img
                  src="/images/goldenbrick-logo.png"
                  alt="Golden Brick"
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', color: '#ffffff', letterSpacing: '1px' }}>
                  GOLDEN BRICK
                </div>
                <div style={{ fontSize: '11px', color: '#c8801f', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Ventures &bull; Real Estate
                </div>
              </div>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: 1.7, marginBottom: '20px' }}>
              Golden Brick is a premier real estate advisory firm specializing in high-value foothill developments across Panchkula, Haryana. Delivering verified inventory, transparent milestone structures, and integrated CRM technology for discerning home buyers and investors.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f3c178', fontSize: '12px', fontWeight: 600 }}>
              <ShieldCheck size={16} /> Haryana RERA Accredited Partner
            </div>
          </div>

          {/* Col 2: Flagship Projects */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.5px' }}>
              Flagship Portfolios
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/trident-hills" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Trident Hills Panchkula
                </Link>
              </li>
              <li>
                <Link href="/trident-hills#forest-vista" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Forest Vista Residential Plots
                </Link>
              </li>
              <li>
                <Link href="/trident-hills#central-vista" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Central Vista Special Plots
                </Link>
              </li>
              <li>
                <Link href="/properties#dlf-valley" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> DLF The Valley Gardens
                </Link>
              </li>
              <li>
                <Link href="/properties#trident-parktown" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Trident Parktown Panipat
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.5px' }}>
              Buyer Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link href="/pricing" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Official Plot Price Calculator
                </Link>
              </li>
              <li>
                <Link href="/pricing#payment-plan" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> 8-Milestone Payment Schedule
                </Link>
              </li>
              <li>
                <Link href="/crm-app" style={{ color: '#f3c178', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Smartphone size={13} /> Golden Brick CRM App
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Schedule VIP Site Tour
                </Link>
              </li>
              <li>
                <a href={COMPANY_INFO.website} target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ color: '#c8801f' }}>&bull;</span> Golden Brick Portal <ExternalLink size={11} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Contact */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '16px', fontWeight: 700, marginBottom: '18px', letterSpacing: '0.5px' }}>
              Relationship Desk
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#c8801f" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} color="#c8801f" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="#c8801f" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#cbd5e1' }}>
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div style={{ marginTop: '8px' }}>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Golden%20Brick%2C%20I%20am%20interested%20in%20Trident%20Hills%20Plots`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                  style={{ padding: '10px 18px', fontSize: '13px', width: '100%', boxSizing: 'border-box' }}
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* HRERA Statutory Disclaimers */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          paddingBottom: '24px',
          fontSize: '11px',
          lineHeight: 1.8,
          color: '#64748b'
        }}>
          <p style={{ marginBottom: '8px' }}>
            <strong style={{ color: '#94a3b8' }}>Statutory Disclosures &amp; HRERA Registrations:</strong> Project Trident Hills Phase 1 &amp; 2: HRERA-PKL-PKL-355-2022 &amp; HRERA-PKL-PKL-356-2022 dated 30.09.2022 valid up to 17.08.2027. Trident Hills Phase 3 (Central Vista): HRERA-PKL-PKL-782-2025 dated 31.10.2025. Official HARERA portal: haryanarera.gov.in. Promoter: Trident Hills Private Limited. Marketing and sales facilitation by Golden Brick Real Estate.
          </p>
          <p>
            Disclaimer: Visual representations, renders, maps, and photographic materials are artistic impressions intended for illustrative orientation. Actual plots, architectural elements, and dimensions are subject to the approved master plans and statutory government sanctions.
          </p>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: '#94a3b8'
        }}>
          <div>
            &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/privacy-policy" style={{ color: '#94a3b8' }}>Privacy Policy</Link>
            <Link href="/crm-privacy-policy" style={{ color: '#c8801f' }}>CRM App Privacy (Google Play)</Link>
            <Link href="/terms" style={{ color: '#94a3b8' }}>Terms &amp; Conditions</Link>
            <Link href="/contact" style={{ color: '#94a3b8' }}>Support &amp; Feedback</Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
