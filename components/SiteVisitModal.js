'use client';

import { useState } from 'react';
import { X, Calendar, Clock, MapPin, User, Phone, Mail, Car, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, TRIDENT_HILLS } from '../data/projectData';

export default function SiteVisitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'Trident Hills (Forest Vista)',
    date: '',
    time: '11:00 AM',
    needPickup: false,
    pickupLocation: 'Chandigarh Airport (IXC)'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `*VIP Site Visit Booking Request — Golden Brick*
-----------------------------------------
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'N/A'}
• Preferred Project: ${formData.project}
• Preferred Date: ${formData.date}
• Time Slot: ${formData.time}
• Chauffeur Pickup Needed: ${formData.needPickup ? `YES (${formData.pickupLocation})` : 'NO (Self Drive)'}
-----------------------------------------
Please confirm my VIP site pass and allocate a Relationship Manager.`;

    setTimeout(() => {
      window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
    }, 600);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(8, 20, 16, 0.75)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: '#ffffff',
        borderRadius: '20px',
        maxWidth: '560px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
        border: '1.5px solid rgba(200, 128, 31, 0.3)',
        position: 'relative'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #090e17 0%, #0f172a 100%)',
          color: '#ffffff',
          padding: '24px 28px',
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px',
          borderBottom: '2px solid #c8801f',
          position: 'relative'
        }}>
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>

          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#f3c178', fontSize: '11px', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.8px', marginBottom: '6px' }}>
            <Calendar size={13} /> Exclusive Experience
          </div>
          <h3 style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800 }}>
            Schedule VIP Site Visit
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>
            Experience actual foothills plot views, master-plan layouts &amp; sample enclaves.
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '28px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--accent-gold-bg)', color: 'var(--accent-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <CheckCircle2 size={36} />
              </div>
              <h4 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px' }}>
                Visit Request Dispatched!
              </h4>
              <p style={{ color: '#64748b', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                Your relationship manager has been alerted. We are opening your pre-filled confirmation ticket on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="btn-gold"
                style={{ width: '100%' }}
              >
                Close &amp; Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                  Select Preferred Project
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
                    Full Name *
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
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Phone Number *
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
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#334155', textTransform: 'uppercase', marginBottom: '6px' }}>
                    Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '8px',
                      border: '1px solid #cbd5e1',
                      fontSize: '14px',
                      outline: 'none'
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
                      background: '#f8fafc'
                    }}
                  >
                    <option value="10:00 AM">10:00 AM (Morning Air)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM (Sunset Vista)</option>
                  </select>
                </div>
              </div>

              {/* Pickup Option */}
              <div style={{ background: '#f8fafc', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                  <input
                    type="checkbox"
                    checked={formData.needPickup}
                    onChange={(e) => setFormData({ ...formData, needPickup: e.target.checked })}
                    style={{ width: '16px', height: '16px', accentColor: '#c8801f' }}
                  />
                  <span style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>
                    Complimentary Chauffeur Pickup (Chandigarh / Panchkula)
                  </span>
                </label>

                {formData.needPickup && (
                  <div style={{ marginTop: '10px' }}>
                    <input
                      type="text"
                      placeholder="Pickup point: e.g. Airport Terminal / Sector 17 Hotel"
                      value={formData.pickupLocation}
                      onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '6px',
                        border: '1px solid #cbd5e1',
                        fontSize: '13px'
                      }}
                    />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="btn-gold"
                style={{ width: '100%', marginTop: '6px', padding: '14px' }}
              >
                Confirm VIP Site Visit Pass
              </button>

              <div style={{ textAlign: 'center', fontSize: '11px', color: '#64748b' }}>
                No obligations &bull; Dedicated Relationship Manager escorted tour
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
