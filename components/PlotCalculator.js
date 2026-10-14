'use client';

import { useState } from 'react';
import { Sliders, Calculator, Share2, CheckCircle2, ShieldCheck, Sparkles, Phone, ArrowRight, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, TRIDENT_HILLS } from '../data/projectData';

const formatINR = (val) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(val);
};

const formatCrores = (val) => {
  const cr = val / 10000000;
  return `₹${cr.toFixed(2)} Cr`;
};

export default function PlotCalculator() {
  const [size, setSize] = useState(310.96);
  const [enclave, setEnclave] = useState('forest-vista');
  const [isCornerPlot, setIsCornerPlot] = useState(false);

  const ratePerSqYd = TRIDENT_HILLS.pricingRules.ratePerSqYd; // 139,000
  const allotmentRate = TRIDENT_HILLS.pricingRules.allotmentRatePerSqYd; // 90,000
  
  // Base Calculations
  const baseCost = Math.round(size * ratePerSqYd);
  const allotmentCost = Math.round(size * allotmentRate);
  const premiumCost = baseCost - allotmentCost;
  
  // Corner PLC (5% PLC if selected)
  const plcCharge = isCornerPlot ? Math.round(allotmentCost * 0.05) : 0;
  const grandTotal = baseCost + plcCharge;

  // Milestone Calculations (8 Steps)
  const milestones = TRIDENT_HILLS.pricingRules.paymentMilestones.map((m) => {
    const amount = Math.round((grandTotal * m.percentage) / 100);
    return {
      ...m,
      amount
    };
  });

  const handleWhatsAppQuote = () => {
    const enclaveName = enclave === 'forest-vista' ? 'Forest Vista (Panoramic Views)' : 'Central Vista (Grand Boulevard)';
    const text = `*Golden Brick — Trident Hills Plot Quotation*
---------------------------------------
• Project: Trident Hills, Sector-4 PKUC, Pinjore-Panchkula
• Selected Enclave: ${enclaveName}
• Plot Area: ${size} Sq. Yds.
• Preferential Location: ${isCornerPlot ? 'Corner / Park Facing (+5% PLC)' : 'Standard Location'}
• Official Rate: ₹1,39,000 / Sq. Yd.
---------------------------------------
*FINANCIAL BREAKDOWN*
• Allotment Value (Base Rate ₹90k): ${formatINR(allotmentCost)}
• Location Premium Value: ${formatINR(premiumCost)}
${isCornerPlot ? `• PLC Charge (5% on Base): ${formatINR(plcCharge)}\n` : ''}• *Total Indicative Plot Price:* ${formatCrores(grandTotal)} (${formatINR(grandTotal)})
---------------------------------------
*CONSTRUCTION LINKED SCHEDULE (8 Milestones)*
1. Application / Token (10%): ${formatINR(milestones[0].amount)}
2. Within 30 Days (15%): ${formatINR(milestones[1].amount)}
3. Within 90 Days (15%): ${formatINR(milestones[2].amount)}
4. Within 150 Days (15%): ${formatINR(milestones[3].amount)}
5. Sewer & Water Works (15%): ${formatINR(milestones[4].amount)}
6. Laying Electric Cables (10%): ${formatINR(milestones[5].amount)}
7. Road Construction (10%): ${formatINR(milestones[6].amount)}
8. Possession (10%): ${formatINR(milestones[7].amount)}
---------------------------------------
Please confirm current inventory availability and schedule a VIP site tour.`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="card-luxury" style={{ padding: '0', overflow: 'hidden' }}>
      {/* Top Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #081410 0%, #153828 100%)',
        color: '#ffffff',
        padding: '24px 32px',
        borderBottom: '2px solid #c8801f',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <div>
          <div className="badge-gold" style={{ marginBottom: '8px' }}>
            <Sparkles size={12} /> Official Licence-3 Limited Plots Payment Engine
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '24px', fontWeight: 800 }}>
            Trident Hills Plot &amp; Milestone Estimator
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>
            Transparent financial breakdown based on official promoter allotment sheets.
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', color: '#c8801f' }}>
            Official Rate
          </div>
          <div style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff' }}>
            ₹1,39,000 <span style={{ fontSize: '14px', fontWeight: 500, color: '#94a3b8' }}>/ Sq. Yd.</span>
          </div>
        </div>
      </div>

      <div style={{ padding: '32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '36px' }} className="calc-responsive-grid">
          {/* Left Column: Interactive Controls */}
          <div>
            {/* Enclave Selector */}
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                1. Select Enclave
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <button
                  type="button"
                  onClick={() => setEnclave('forest-vista')}
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    border: enclave === 'forest-vista' ? '2px solid #c8801f' : '1px solid #e2e8f0',
                    background: enclave === 'forest-vista' ? 'var(--accent-gold-bg)' : '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontWeight: 700, color: enclave === 'forest-vista' ? 'var(--accent-gold-dark)' : 'var(--text-dark)', fontSize: '15px' }}>
                    Forest Vista
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    Verdant Hillside &bull; Panoramic Ridge
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setEnclave('central-vista')}
                  style={{
                    padding: '14px',
                    borderRadius: '12px',
                    border: enclave === 'central-vista' ? '2px solid #c8801f' : '1px solid #e2e8f0',
                    background: enclave === 'central-vista' ? 'var(--accent-gold-bg)' : '#ffffff',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ fontWeight: 700, color: enclave === 'central-vista' ? 'var(--accent-gold-dark)' : 'var(--text-dark)', fontSize: '15px' }}>
                    Central Vista
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    Grand Avenues &bull; Near Entrance Canopy
                  </div>
                </button>
              </div>
            </div>

            {/* Plot Size Selector */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  2. Select Plot Area
                </label>
                <div style={{ fontSize: '18px', fontWeight: 800, color: 'var(--accent-gold-dark)', background: '#fff9ed', padding: '4px 12px', borderRadius: '8px', border: '1px solid rgba(200, 128, 31, 0.3)' }}>
                  {size} Sq. Yds.
                </div>
              </div>

              {/* Quick Pick Buttons */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                {[200, 250, 310.96, 400, 500].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setSize(preset)}
                    style={{
                      padding: '6px 14px',
                      fontSize: '12px',
                      fontWeight: 600,
                      borderRadius: '6px',
                      border: size === preset ? '1.5px solid #c8801f' : '1px solid #cbd5e1',
                      background: size === preset ? '#c8801f' : '#f8fafc',
                      color: size === preset ? '#ffffff' : '#475569',
                      cursor: 'pointer'
                    }}
                  >
                    {preset === 310.96 ? '310.96 (Official Base)' : `${preset} Sq. Yd.`}
                  </button>
                ))}
              </div>

              <input
                type="range"
                min="150"
                max="500"
                step="5"
                value={size}
                onChange={(e) => setSize(parseFloat(e.target.value))}
                className="calc-slider"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#64748b' }}>
                <span>150 Sq. Yds. (approx 1,350 sq.ft.)</span>
                <span>500 Sq. Yds. (approx 4,500 sq.ft.)</span>
              </div>
            </div>

            {/* Preferential Location Checkbox */}
            <div style={{
              background: '#f8fafc',
              padding: '16px',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              marginBottom: '28px'
            }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={isCornerPlot}
                  onChange={(e) => setIsCornerPlot(e.target.checked)}
                  style={{ width: '18px', height: '18px', accentColor: '#c8801f' }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text-dark)' }}>
                    Corner / Park Facing Plot (+5% Allotment PLC)
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>
                    Select if your preferred plot borders a park or 24m wide avenue.
                  </div>
                </div>
              </label>
            </div>

            {/* Trust Assurance Badge */}
            <div style={{
              background: 'var(--forest-tag-bg)',
              border: '1px solid rgba(24, 66, 50, 0.2)',
              borderRadius: '12px',
              padding: '16px',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              <ShieldCheck size={22} color="var(--forest-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '13px', color: 'var(--forest-tag-text)' }}>
                  Statutory RERA Verification Guaranteed
                </div>
                <div style={{ fontSize: '12px', color: '#335c4b', marginTop: '2px' }}>
                  Haryana RERA Registration No. HRERA-PKL-PKL-355-2022 &amp; HRERA-PKL-PKL-782-2025. Every payment is routed to designated escrow accounts.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing & Milestone Sheet */}
          <div style={{
            background: '#faf9f6',
            borderRadius: '16px',
            border: '1.5px solid rgba(200, 128, 31, 0.25)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#64748b', fontWeight: 600 }}>
                  Indicative Total Investment
                </span>
                <span style={{ fontSize: '28px', fontWeight: 800, color: '#081410', fontFamily: 'var(--font-heading)' }}>
                  {formatCrores(grandTotal)}
                </span>
              </div>

              {/* Breakdown Table */}
              <div style={{ background: '#ffffff', borderRadius: '10px', padding: '14px', border: '1px solid #e2e8f0', marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '13px' }}>
                  <span style={{ color: '#64748b' }}>Allotment Component (@ ₹90k/yd)</span>
                  <span style={{ fontWeight: 600, color: '#0f172a' }}>{formatINR(allotmentCost)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '13px' }}>
                  <span style={{ color: '#64748b' }}>Location Premium Component</span>
                  <span style={{ fontWeight: 600, color: '#c8801f' }}>{formatINR(premiumCost)}</span>
                </div>
                {isCornerPlot && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f1f5f9', fontSize: '13px' }}>
                    <span style={{ color: '#64748b' }}>Preferential Location Charge (5%)</span>
                    <span style={{ fontWeight: 600, color: '#0f172a' }}>{formatINR(plcCharge)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0 0 0', fontSize: '14px', fontWeight: 800 }}>
                  <span style={{ color: '#0f172a' }}>Total Sale Consideration</span>
                  <span style={{ color: '#0f172a' }}>{formatINR(grandTotal)}</span>
                </div>
              </div>

              {/* 8-Milestone Snapshot */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-dark)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '10px' }}>
                  Construction-Linked 8 Milestones (Preview)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '200px', overflowY: 'auto', paddingRight: '4px' }}>
                  {milestones.map((m) => (
                    <div
                      key={m.step}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: '12px',
                        padding: '6px 10px',
                        borderRadius: '6px',
                        background: '#ffffff',
                        border: '1px solid #eef2f6'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#e2e8f0',
                          color: '#334155',
                          fontSize: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700
                        }}>
                          {m.step}
                        </span>
                        <span style={{ color: '#334155', fontWeight: 500 }}>
                          {m.title} ({m.percentage}%)
                        </span>
                      </div>
                      <span style={{ fontWeight: 700, color: '#0f172a' }}>
                        {formatINR(m.amount)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="btn-gold"
                style={{ width: '100%', boxSizing: 'border-box' }}
              >
                <Share2 size={16} />
                <span>Receive Official Quote on WhatsApp</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-outline-gold"
                style={{ width: '100%', boxSizing: 'border-box', textAlign: 'center' }}
              >
                <Phone size={15} />
                <span>Consult Relationship Manager</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 868px) {
          .calc-responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
