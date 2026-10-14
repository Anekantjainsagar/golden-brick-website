'use client';

import { Sliders, ShieldCheck, Sparkles, Phone, Download, CheckCircle2, ArrowRight } from 'lucide-react';
import PlotCalculator from '../../components/PlotCalculator';
import PaymentMilestones from '../../components/PaymentMilestones';
import { COMPANY_INFO, TRIDENT_HILLS } from '../../data/projectData';

export default function PricingPage() {
  const triggerSiteVisit = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-site-visit'));
    }
  };

  const plotTiers = [
    { size: 200, label: "200 Sq. Yds. (approx 1,800 sq.ft.)", allotment: "₹1.80 Cr", premium: "₹98.0 Lakh", total: "₹2.78 Cr", token: "₹27.8 Lakh" },
    { size: 250, label: "250 Sq. Yds. (approx 2,250 sq.ft.)", allotment: "₹2.25 Cr", premium: "₹1.22 Cr", total: "₹3.47 Cr", token: "₹34.7 Lakh" },
    { size: 310.96, label: "310.96 Sq. Yds. (Official Base Sheet)", allotment: "₹2.79 Cr", premium: "₹1.52 Cr", total: "₹4.32 Cr", token: "₹43.2 Lakh", highlighted: true },
    { size: 400, label: "400 Sq. Yds. (approx 3,600 sq.ft.)", allotment: "₹3.60 Cr", premium: "₹1.96 Cr", total: "₹5.56 Cr", token: "₹55.6 Lakh" },
    { size: 500, label: "500 Sq. Yds. (approx 4,500 sq.ft.)", allotment: "₹4.50 Cr", premium: "₹2.45 Cr", total: "₹6.95 Cr", token: "₹69.5 Lakh" }
  ];

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(8, 20, 16, 0.88) 0%, rgba(8, 20, 16, 0.96) 100%), url("/images/central-vista-grand-entrance.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '90px 0 60px',
        borderBottom: '2px solid #c8801f'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge-gold" style={{ marginBottom: '14px' }}>
            <Sparkles size={13} /> Official Licence-3 Price Transparency
          </div>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Plot Pricing &amp; Milestone Plans
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', lineHeight: 1.7 }}>
            Complete commercial clarity with verified promoter rate sheets, statutory escrow milestones, and instant quotation generator.
          </p>
        </div>
      </section>

      {/* Main Interactive Calculator */}
      <section style={{ padding: '80px 0', background: 'var(--surface-alabaster)' }}>
        <div className="container">
          <PlotCalculator />
        </div>
      </section>

      {/* Standard Size Comparison Matrix */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
            <div className="badge-forest" style={{ marginBottom: '10px' }}>
              <Sliders size={13} /> Standard Dimension Tiers
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
              Special Edition Plot Size Comparison
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
              Computed at the official promoter benchmark of <strong>₹1,39,000 / Sq. Yd.</strong> (Allotment Base Rate ₹90,000 + Location Premium ₹49,000).
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '16px', border: '1.5px solid #e2e8f0', boxShadow: 'var(--shadow-card)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#081410', color: '#ffffff' }}>
                  <th style={{ padding: '18px 20px', fontWeight: 700 }}>Plot Area</th>
                  <th style={{ padding: '18px 20px', fontWeight: 700 }}>Allotment Component (@ ₹90k)</th>
                  <th style={{ padding: '18px 20px', fontWeight: 700 }}>Location Premium Component</th>
                  <th style={{ padding: '18px 20px', fontWeight: 700 }}>Total Consideration</th>
                  <th style={{ padding: '18px 20px', fontWeight: 700 }}>Booking Token (10%)</th>
                  <th style={{ padding: '18px 20px', fontWeight: 700, textAlign: 'center' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {plotTiers.map((tier, idx) => (
                  <tr
                    key={idx}
                    style={{
                      background: tier.highlighted ? '#fffdf7' : '#ffffff',
                      borderBottom: '1px solid #e2e8f0',
                      borderLeft: tier.highlighted ? '4px solid #c8801f' : 'none'
                    }}
                  >
                    <td style={{ padding: '18px 20px', fontWeight: 700, color: '#0f172a' }}>
                      {tier.label}
                      {tier.highlighted && (
                        <span style={{ display: 'block', fontSize: '11px', color: '#c8801f', fontWeight: 600 }}>
                          Official Benchmark Extract
                        </span>
                      )}
                    </td>
                    <td style={{ padding: '18px 20px', color: '#475569' }}>{tier.allotment}</td>
                    <td style={{ padding: '18px 20px', color: '#c8801f', fontWeight: 600 }}>{tier.premium}</td>
                    <td style={{ padding: '18px 20px', fontWeight: 800, color: '#081410', fontSize: '16px' }}>{tier.total}</td>
                    <td style={{ padding: '18px 20px', color: 'var(--forest-green)', fontWeight: 700 }}>{tier.token}</td>
                    <td style={{ padding: '18px 20px', textAlign: 'center' }}>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20am%20interested%20in%20the%20${encodeURIComponent(tier.label)}%20Trident%20Hills%20plot`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gold"
                        style={{ padding: '8px 16px', fontSize: '12px' }}
                      >
                        Inquire
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 8-Milestone Explanation */}
      <section style={{ padding: '80px 0', background: 'var(--surface-cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <div className="badge-forest" style={{ marginBottom: '10px' }}>
              <ShieldCheck size={13} /> Civil Construction Linked
            </div>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '12px' }}>
              The 8 Verifiable Payment Milestones
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>
              Payments follow actual on-ground infrastructure stages verified by HRERA engineers.
            </p>
          </div>

          <PaymentMilestones />
        </div>
      </section>
    </div>
  );
}
