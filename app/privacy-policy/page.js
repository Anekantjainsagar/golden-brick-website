import { COMPANY_INFO } from '../../data/projectData';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '80px 0', background: 'var(--surface-alabaster)', minHeight: '70vh' }}>
      <div className="container" style={{ maxWidth: '800px', background: '#ffffff', padding: '40px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: 'var(--shadow-subtle)' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>
          Last updated: October 2026 &bull; {COMPANY_INFO.name}
        </p>

        <div style={{ fontSize: '15px', color: '#334155', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <p>
            At <strong>{COMPANY_INFO.name}</strong>, accessible via goldenbrick.biz and our mobile platforms, your privacy is of paramount importance to us. This Privacy Policy document outlines the types of information that is collected and recorded by Golden Brick and how we use it.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            1. Information We Collect
          </h3>
          <p>
            When you schedule a site visit, submit an inquiry for Trident Hills or other properties, or use the Golden Brick CRM mobile app, we collect contact information including your full name, phone number, email address, preferred appointment time, and plot configuration requests.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            2. How We Use Your Information
          </h3>
          <p>
            We use the information we collect to provide personalized relationship management, facilitate chauffeured site visits, coordinate with developers (Trident Realty, DLF), verify HRERA escrow documentation, and maintain your 48-hour unit holds in our CRM database.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            3. Data Confidentiality &amp; Security
          </h3>
          <p>
            Your personal information is encrypted on secure servers. We never sell, rent, or trade your personal data to third-party telemarketers.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginTop: '12px' }}>
            4. Contact Our Privacy Officer
          </h3>
          <p>
            If you have questions about our privacy practices, please contact us at <strong>{COMPANY_INFO.email}</strong> or call <strong>{COMPANY_INFO.phone}</strong>.
          </p>
        </div>
      </div>
    </div>
  );
}
