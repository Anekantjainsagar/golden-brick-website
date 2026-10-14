'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Calendar, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, TRIDENT_HILLS } from '../../data/projectData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Trident Hills (Forest Vista)',
    date: '',
    time: '11:00 AM',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*Golden Brick — Inquiry / VIP Tour Request*
---------------------------------------
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Project: ${formData.project}
• Preferred Date: ${formData.date || 'Earliest Available'}
• Preferred Time: ${formData.time}
• Notes: ${formData.message || 'Please send plot details and brochure'}
---------------------------------------
Please connect me with a Senior Relationship Manager.`;

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
    }, 600);
  };

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(8, 20, 16, 0.88) 0%, rgba(8, 20, 16, 0.96) 100%), url("/images/nature-reflection-sunglasses.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '90px 0 60px',
        borderBottom: '2px solid #c8801f'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge-gold" style={{ marginBottom: '14px' }}>
            <Phone size={13} /> Relationship Management Desk
          </div>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Connect with Golden Brick
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', lineHeight: 1.7 }}>
            Schedule an exclusive private foothills site tour or consult our senior advisors regarding plot availability, HRERA approvals, and payment milestones.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ padding: '80px 0', background: 'var(--surface-alabaster)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '50px' }} className="contact-grid">
            {/* Left Column: Office & Direct Contact Info */}
            <div>
              <div className="badge-forest" style={{ marginBottom: '14px' }}>
                <MapPin size={13} /> Direct Contact Channels
              </div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '16px' }}>
                We Are Here to Guide You
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, marginBottom: '32px' }}>
                Golden Brick maintains direct developer affiliations with Trident Realty and DLF, ensuring genuine inventory allocation, zero broker friction, and transparent documentation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--accent-gold-bg)', color: 'var(--accent-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)' }}>Registered Office &amp; Lounge</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '2px', lineHeight: 1.6 }}>
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'var(--forest-tag-bg)', color: 'var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)' }}>Direct Relationship Helpline</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '2px' }}>
                      <a href={`tel:${COMPANY_INFO.phone}`} style={{ color: 'var(--accent-gold-dark)', fontWeight: 700 }}>
                        {COMPANY_INFO.phone}
                      </a>
                    </p>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>
                      {COMPANY_INFO.officeTiming}
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(15, 23, 42, 0.08)', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-dark)' }}>Official Email</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', marginTop: '2px' }}>
                      <a href={`mailto:${COMPANY_INFO.email}`} style={{ color: '#0f172a', fontWeight: 600 }}>
                        {COMPANY_INFO.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* RERA Badge Assurance */}
              <div style={{
                background: '#ffffff',
                border: '1.5px solid rgba(200, 128, 31, 0.3)',
                padding: '20px',
                borderRadius: '16px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                <ShieldCheck size={28} color="#c8801f" style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-dark)' }}>
                    Authorised Marketing Partner
                  </div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                    Haryana Real Estate Regulatory Authority (Panchkula) Verified.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Schedule & Inquiry Form */}
            <div className="card-luxury" style={{ padding: '36px' }}>
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '6px' }}>
                  Schedule VIP Tour or Request Call
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                  Fill in your preferred date and contact details to receive prompt priority assistance.
                </p>
              </div>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--forest-tag-bg)', color: 'var(--forest-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                    Request Submitted Successfully!
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6 }}>
                    Our relationship manager is reviewing your appointment. We are opening WhatsApp to share your confirmation receipt.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Interested Project *
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        background: '#f8fafc'
                      }}
                    >
                      <option value="Trident Hills (Forest Vista)">Trident Hills — Forest Vista Plots</option>
                      <option value="Trident Hills (Central Vista)">Trident Hills — Central Vista Plots</option>
                      <option value="DLF The Valley Gardens">DLF The Valley Gardens (4 BHK)</option>
                      <option value="DLF The Valley Orchard">DLF The Valley Orchard (3 BHK)</option>
                      <option value="Trident Parktown Panipat">Trident Parktown Integrated Township</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Preferred Tour Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '14px',
                          outline: 'none',
                          background: '#f8fafc',
                          boxSizing: 'border-box'
                        }}
                      >
                        <option value="10:00 AM">10:00 AM (Morning Air)</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="04:00 PM">04:00 PM (Sunset Vista)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                      Additional Requirements / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify preferred plot size, corner preference, or airport pickup request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '12px',
                        borderRadius: '8px',
                        border: '1px solid #cbd5e1',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '6px' }}
                  >
                    Submit VIP Site Visit Request
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>
                    Strict confidentiality &bull; No marketing spam guaranteed
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
