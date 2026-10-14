'use client';

import { MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/projectData';

export default function WhatsAppFloat() {
  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      right: '24px',
      zIndex: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      alignItems: 'flex-end'
    }}>
      {/* Direct Call Button (Mobile & Desktop) */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        style={{
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          background: '#081410',
          border: '1.5px solid #c8801f',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          transition: 'all 0.2s ease'
        }}
        aria-label="Call Relationship Manager"
      >
        <Phone size={18} color="#c8801f" />
      </a>

      {/* Main WhatsApp Pill */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Golden%20Brick%20team%2C%20I%20am%20interested%20in%20Trident%20Hills%20Panchkula%20Plots`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          background: '#25D366',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: '9999px',
          fontWeight: 700,
          fontSize: '14px',
          boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
          transition: 'all 0.25s ease',
          textDecoration: 'none'
        }}
        className="pulse-gold"
      >
        <MessageSquare size={18} />
        <span className="hidden-sm">Chat with Relationship Manager</span>
        <span className="visible-sm">Chat</span>
      </a>

      <style jsx>{`
        .hidden-sm {
          display: inline-block;
        }
        .visible-sm {
          display: none;
        }
        @media (max-width: 640px) {
          .hidden-sm {
            display: none;
          }
          .visible-sm {
            display: inline-block;
          }
        }
      `}</style>
    </div>
  );
}
