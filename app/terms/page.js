import { COMPANY_INFO } from '../../data/projectData';

export default function TermsPage() {
  return (
    <div style={{ padding: '80px 0', background: 'var(--surface-alabaster)', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-subtle)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
          Terms &amp; Conditions
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
          Effective: October 2026 &bull; {COMPANY_INFO.name}
        </p>

        <div style={{ fontSize: '15px', color: '#334155', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>
            By accessing and utilizing the web platform of <strong>{COMPANY_INFO.name}</strong>, you acknowledge and agree to abide by the following terms, conditions, and statutory notices.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            1. Real Estate Representation &amp; Facilitation
          </h3>
          <p>
            Golden Brick operates as an accredited real estate sales facilitator and authorized advisory partner for leading developers including Trident Realty and DLF. All plot allotments, sale agreements, and statutory compliance are subject to developer terms and Haryana RERA governance.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            2. Price Quotations &amp; Milestones
          </h3>
          <p>
            Price estimates calculated via our online tools and CRM are indicative and based on official promoter price sheets (e.g., ₹1,39,000 / Sq. Yd. for Special Edition plots). Final consideration, taxes, preferential location charges, and statutory registry charges are confirmed upon official allotment.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            3. Unit Holds Policy
          </h3>
          <p>
            A 24 to 48-hour soft hold placed on the Golden Brick CRM mobile application is provisional and expires automatically unless backed by token application advance.
          </p>
        </div>
      </div>
    </div>
  );
}
