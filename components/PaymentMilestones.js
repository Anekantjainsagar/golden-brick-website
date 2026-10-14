import { TRIDENT_HILLS } from '../data/projectData';
import { CheckCircle2, ShieldCheck, Clock, FileCheck, Layers } from 'lucide-react';

export default function PaymentMilestones() {
  const milestones = TRIDENT_HILLS.pricingRules.paymentMilestones;

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {milestones.map((m) => (
          <div
            key={m.step}
            className="card-luxury"
            style={{
              padding: '24px',
              borderTop: '3px solid #c8801f',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              background: '#ffffff'
            }}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'var(--accent-gold-bg)',
                  color: 'var(--accent-gold-dark)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '14px',
                  border: '1px solid var(--accent-gold-border)'
                }}>
                  0{m.step}
                </span>

                <span style={{
                  fontSize: '15px',
                  fontWeight: 800,
                  color: 'var(--accent-gold-dark)',
                  background: 'var(--accent-gold-bg)',
                  border: '1px solid var(--accent-gold-border)',
                  padding: '4px 10px',
                  borderRadius: '6px'
                }}>
                  {m.percentage}%
                </span>
              </div>

              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px', lineHeight: 1.3 }}>
                {m.title}
              </h4>

              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.6 }}>
                {m.timing}
              </p>
            </div>

            <div style={{ marginTop: '18px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#94a3b8' }}>
              <ShieldCheck size={13} color="var(--accent-gold)" /> RERA Escrow Governed
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
