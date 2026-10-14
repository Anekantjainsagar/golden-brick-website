'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SiteVisitModal from '../components/SiteVisitModal';
import WhatsAppFloat from '../components/WhatsAppFloat';
import './globals.css';

export default function RootLayout({ children }) {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setSiteVisitOpen(true);
    window.addEventListener('open-site-visit', handleOpenModal);
    return () => window.removeEventListener('open-site-visit', handleOpenModal);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Golden Brick &bull; Trident Hills Luxury Residential Plots Panchkula</title>
        <meta name="description" content="Discover Trident Hills Special Edition Residential Plots (Forest Vista & Central Vista) in Panchkula by Trident Realty. Verified by Golden Brick with live 8-milestone payment plans and CRM app integration." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/goldenbrick-logo.png" />
      </head>
      <body>
        <Navbar onOpenSiteVisit={() => setSiteVisitOpen(true)} />
        
        <main>
          {children}
        </main>

        <Footer />
        <WhatsAppFloat />
        <SiteVisitModal isOpen={siteVisitOpen} onClose={() => setSiteVisitOpen(false)} />
      </body>
    </html>
  );
}
