'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Building2, MapPin, CheckCircle2, Calendar, Phone, Sparkles, Filter, Search } from 'lucide-react';
import { COMPANY_INFO, FEATURED_PROPERTIES } from '../../data/projectData';

export default function PropertiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const triggerSiteVisit = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-site-visit'));
    }
  };

  const categories = ['All', 'Residential Plots', 'Low Rise Floors', 'Luxury Residences', 'Township Plots & Floors'];

  const filtered = FEATURED_PROPERTIES.filter((prop) => {
    const matchesCat = selectedCategory === 'All' || prop.category === selectedCategory;
    const matchesSearch = prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prop.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prop.project.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div>
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(180deg, rgba(9, 14, 23, 0.92) 0%, rgba(15, 23, 42, 0.97) 100%), url("/images/take-the-centrestage.jpg") center/cover no-repeat',
        color: '#ffffff',
        padding: '90px 0 60px',
        borderBottom: '2px solid #c8801f'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <div className="badge-gold" style={{ marginBottom: '14px' }}>
            <Building2 size={13} /> Golden Brick Portfolios
          </div>
          <h1 style={{ fontSize: '44px', fontWeight: 800, color: '#ffffff', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
            Verified Real Estate Portfolio
          </h1>
          <p style={{ fontSize: '17px', color: '#cbd5e1', lineHeight: 1.7 }}>
            Explore handpicked foothill residential plots, premium low-rise builder floors, and integrated townships across Panchkula and Haryana.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section style={{ padding: '36px 0', background: '#ffffff', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: 600,
                    border: selectedCategory === cat ? '1.5px solid #c8801f' : '1px solid #cbd5e1',
                    background: selectedCategory === cat ? 'var(--accent-gold-bg)' : '#f8fafc',
                    color: selectedCategory === cat ? 'var(--accent-gold-dark)' : '#475569',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', minWidth: '280px' }}>
              <Search size={16} color="#94a3b8" style={{ position: 'absolute', top: '12px', left: '14px' }} />
              <input
                type="text"
                placeholder="Search by location, project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 38px',
                  borderRadius: '10px',
                  border: '1px solid #cbd5e1',
                  fontSize: '14px',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section style={{ padding: '70px 0', background: 'var(--surface-alabaster)' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '8px' }}>
                No Properties Found
              </h3>
              <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '20px' }}>
                Try adjusting your search query or selecting a different category.
              </p>
              <button type="button" onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} className="btn-gold">
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
              {filtered.map((prop) => (
                <div key={prop.id} className="card-luxury" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                    <img
                      src={prop.image}
                      alt={prop.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      background: 'var(--primary-slate)',
                      color: '#ffffff',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: '6px'
                    }}>
                      {prop.category}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '14px',
                      right: '14px',
                      background: 'var(--accent-gold)',
                      color: '#ffffff',
                      fontSize: '14px',
                      fontWeight: 800,
                      padding: '5px 14px',
                      borderRadius: '6px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
                    }}>
                      {prop.price}
                    </div>
                  </div>

                  <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b', fontSize: '13px', marginBottom: '8px' }}>
                        <MapPin size={14} color="#c8801f" />
                        <span>{prop.location}</span>
                      </div>

                      <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-dark)', marginBottom: '8px', lineHeight: 1.3 }}>
                        {prop.title}
                      </h3>

                      <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '16px' }}>
                        Area: <strong style={{ color: '#0f172a' }}>{prop.area}</strong>
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                        {prop.highlights.map((h, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#334155' }}>
                            <CheckCircle2 size={14} color="#c8801f" style={{ flexShrink: 0 }} />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        type="button"
                        onClick={triggerSiteVisit}
                        className="btn-gold"
                        style={{ flex: 1, padding: '12px', fontSize: '13px' }}
                      >
                        Book VIP Site Tour
                      </button>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20am%20interested%20in%20${encodeURIComponent(prop.title)}%20(${prop.location})`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline-gold"
                        style={{ padding: '12px 18px' }}
                      >
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
