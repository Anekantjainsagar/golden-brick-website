export const COMPANY_INFO = {
  name: "Golden Brick Ventures",
  legalName: "Golden Brick Real Estate LLP",
  tagline: "Your Gateway to Foothills & Luxury Real Estate",
  experienceYears: 10,
  phone: "+91 7838493904",
  whatsapp: "917838493904",
  email: "rshibatra@gmail.com",
  adminEmail: "admin@goldenbrickventures.com",
  crmPackage: "com.reos.goldenbrick",
  crmAppTitle: "Golden Brick CRM",
  address: "DLF The Valley / Sector-4 PKUC Pinjore, Panchkula-134102, Haryana, India",
  website: "https://goldenbrick.biz",
  officeTiming: "Monday – Sunday: 9:30 AM to 7:00 PM IST"
};

export const TRIDENT_HILLS = {
  name: "Trident Hills",
  developer: "Trident Realty",
  developerTagline: "Building the Nation",
  location: "Sector-4, PKUC, Pinjore, Panchkula-134102, Haryana",
  subLocation: "Shivalik Foothills / Pinjore-Kalka Urban Complex",
  tagline: "Premium. Pristine. Panoramic.",
  description: "Trident Hills is an exclusive 350+ acre integrated foothills township nestled at the scenic convergence of the Shivalik range and Pinjore. Offering Special Edition Residential Plots across Forest Vista and Central Vista enclaves, this community pairs undisturbed natural tranquility with 6-lane urban connectivity just 15 minutes from Chandigarh.",
  rera: [
    {
      name: "Trident Hills Phase 1 & 2",
      number: "HRERA-PKL-PKL-355-2022 & HRERA-PKL-PKL-356-2022",
      validity: "Valid up to 17.08.2027",
      authority: "Haryana Real Estate Regulatory Authority (Panchkula)"
    },
    {
      name: "Trident Hills Phase 3 (Central Vista)",
      number: "HRERA-PKL-PKL-782-2025",
      validity: "Valid up to 31.10.2025",
      authority: "Haryana Real Estate Regulatory Authority (Panchkula)"
    }
  ],
  enclaves: [
    {
      id: "forest-vista",
      name: "Forest Vista",
      subtitle: "Where Nature Finds Its Reflection",
      headline: "A Promise of Bringing Nature to Your Doorstep",
      description: "Elevated residential plots framed against protected lush hills, natural ridges, and serene morning valley mist. Designed for discerning owners who seek an unhurried, restorative sanctuary surrounded by dense foliage.",
      image: "/images/forest-vista-walkway.jpg",
      sunriseImage: "/images/forest-vista-sunrise.jpg",
      plotSizes: "250 to 500+ Sq. Yd.",
      status: "Special Edition Plots — Pre-launch Enclave"
    },
    {
      id: "central-vista",
      name: "Central Vista",
      subtitle: "Where Every Arrival Feels Grand",
      headline: "The Grand Avenues of Trident Hills",
      description: "Positioned along the central spine with architectural canopy security gates, tree-shaded boulevards, manicured community lawns, and prompt access to the signature sports club.",
      image: "/images/central-vista-grand-entrance.jpg",
      lifestyleImage: "/images/central-vista-children.jpeg",
      plotSizes: "200 to 450 Sq. Yd.",
      status: "Booking Fast — Price Revision Announced"
    }
  ],
  pricingRules: {
    basePlotSize: 310.96, // Official benchmark plot size
    ratePerSqYd: 139000,   // ₹1,39,000 per sq yd
    allotmentRatePerSqYd: 90000, // ₹90,000 allotment rate
    // Official milestone percentages from Licence-3 Limited Plots Payment Plan
    paymentMilestones: [
      { step: 1, title: "Application Money / Token", percentage: 10, timing: "At the time of Booking Application" },
      { step: 2, title: "Allotment Milestone", percentage: 15, timing: "Within 30 Days of Booking" },
      { step: 3, title: "Second Installment", percentage: 15, timing: "Within 90 Days of Booking" },
      { step: 4, title: "Third Installment", percentage: 15, timing: "Within 150 Days of Booking" },
      { step: 5, title: "Sewer & Water Works Milestone", percentage: 15, timing: "Completion of Sewer/Water Works in front of plot or 180 Days (whichever later)" },
      { step: 6, title: "Underground Electric Cables Laying", percentage: 10, timing: "Laying of electric cables in front of plot or 240 Days (whichever later)" },
      { step: 7, title: "Internal Road Construction", percentage: 10, timing: "Road construction in front of plot or 300 Days (whichever later)" },
      { step: 8, title: "Offer of Physical Possession", percentage: 10, timing: "Upon Offer of Possession and Statutory Clearances" }
    ]
  },
  amenities: [
    { title: "Grand Architectural Canopy", desc: "Access-controlled entrance plazas with automated boom barriers and biometric visitor logs.", icon: "ShieldCheck" },
    { title: "Clubhouse & Wellness Spa", desc: "Over 50,000 sq.ft. of world-class recreation, all-weather temperature controlled pool & spa.", icon: "Sparkles" },
    { title: "Shivalik Nature Walking Trails", desc: "Dedicated jogging tracks and elevated boardwalks meandering through forested hills.", icon: "Trees" },
    { title: "Multi-Sport Arena & Courts", desc: "Professional tennis, badminton, squash courts, cricket nets and skate parks.", icon: "Trophy" },
    { title: "Underground Services", desc: "100% concealed electrical conduits, high-speed fiber optics, dual pipeline water system.", icon: "Zap" },
    { title: "Children's Sensory Play Parks", desc: "Modern rubberized play equipment, interactive water splash pads and sand pits.", icon: "Heart" },
    { title: "24/7 Monitored Smart Security", desc: "CCTV surveillance towers, perimeter beam sensors and mobile-linked e-passes.", icon: "Video" },
    { title: "Eco-Lakes & Water Harvesting", desc: "Rainwater harvesting network, STP recycled green belt irrigation and solar street lighting.", icon: "Droplets" }
  ],
  connectivity: [
    { landmark: "Chandigarh Transport Underpass / Border", time: "12 mins", dist: "11 km" },
    { landmark: "Chandigarh International Airport (IXC)", time: "30 mins", dist: "28 km" },
    { landmark: "Panchkula Golf Club & Sector 5 Hub", time: "15 mins", dist: "14 km" },
    { landmark: "Pinjore Heritage Gardens & Forest Reserve", time: "5 mins", dist: "3.5 km" },
    { landmark: "Chandigarh Railway Station", time: "20 mins", dist: "18 km" },
    { landmark: "Timber Trail & Kasauli Hills", time: "25 mins", dist: "24 km" }
  ]
};

export const FEATURED_PROPERTIES = [
  {
    id: "trident-hills-plots",
    title: "Trident Hills — Special Edition Plots",
    project: "Trident Hills (Forest & Central Vista)",
    category: "Residential Plots",
    location: "Sector-4, PKUC, Pinjore, Panchkula",
    area: "200 – 500 Sq. Yd.",
    price: "₹1.39 Lakh / Sq. Yd.",
    startingPrice: "₹2.78 Cr*",
    status: "Pre-Launch Privilege",
    image: "/images/nature-reflection-sunglasses.jpg",
    tags: ["RERA Approved", "Foothill Views", "Flexible Payment"],
    highlights: ["Shivalik Ridge Panorama", "8-Phase Construction Plan", "Underground Infrastructure"]
  },
  {
    id: "the-valley-gardens-4bhk",
    title: "The Valley Gardens — 4 BHK + Study Luxury",
    project: "DLF The Valley Gardens",
    category: "Low Rise Floors",
    location: "The Valley Gardens, Panchkula",
    area: "500 m² (approx 5,380 sq.ft.)",
    price: "₹3.35 Cr*",
    startingPrice: "₹3.35 Cr",
    status: "Ready for Delivery",
    image: "/images/take-the-centrestage.jpg",
    tags: ["DLF Benchmark", "Basement + Stilt + Terrace", "Private Lift Lobby"],
    highlights: ["Spacious 4 BHK + Maid Room", "Exclusive Terrace Rights", "Covered Stilt Parking"]
  },
  {
    id: "the-valley-orchard-3bhk",
    title: "The Valley Orchard (DLF) — 3 BHK Residences",
    project: "DLF The Valley Orchard",
    category: "Luxury Residences",
    location: "DLF The Valley, Panchkula",
    area: "350 m² (approx 3,760 sq.ft.)",
    price: "₹2.02 Cr*",
    startingPrice: "₹2.02 Cr",
    status: "Ready to Move",
    image: "/images/central-vista-morning.jpeg",
    tags: ["DLF Quality", "Immediate Handover", "Prime Sector"],
    highlights: ["Modular Italian Kitchen", "Uninterrupted Mountain Air", "Club Access"]
  },
  {
    id: "trident-parktown-panipat",
    title: "Trident Parktown — 1st Integrated Township",
    project: "Trident Parktown",
    category: "Township Plots & Floors",
    location: "Prime Sector Corridor, Panipat",
    area: "150 – 350 Sq. Yd.",
    price: "₹48 Lakhs onwards*",
    startingPrice: "₹48 Lakhs",
    status: "Bookings Open",
    image: "/images/trident-parktown.jpeg",
    tags: ["RERA Approved", "High Growth Corridor", "Integrated Living"],
    highlights: ["HRERA-PKL-PNP-819-2026", "Direct Highway Access", "Theme Parks & High Street"]
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Sharma",
    role: "HNI Investor & Business Owner",
    location: "Sector 9, Chandigarh",
    text: "Golden Brick made our acquisition of a 310 sq. yd. plot in Trident Hills Forest Vista remarkably seamless. Their relationship manager coordinated site tours, transparently explained the 8-milestone payment plan, and handled paperwork flawlessly.",
    property: "Trident Hills (Forest Vista)"
  },
  {
    name: "Dr. Vikramaditya Sen",
    role: "Senior Consultant Surgeon",
    location: "Panchkula",
    text: "The tranquility of living right under the Shivaliks while being just 15 minutes away from our clinic in Sector 5 Panchkula is priceless. Golden Brick’s honest counsel and direct RERA verification gave my family total peace of mind.",
    property: "Trident Hills (Central Vista)"
  },
  {
    name: "Neha & Amit Gupta",
    role: "NRI Tech Executives",
    location: "London / Chandigarh",
    text: "As NRIs, managing property purchases remotely is usually daunting. With the Golden Brick CRM mobile app and our dedicated manager, we tracked unit hold, booking agreement status, and milestone receipts on our phone in real time.",
    property: "DLF The Valley Gardens"
  }
];

export const FAQS = [
  {
    q: "What makes Trident Hills Panchkula unique compared to other plotted townships?",
    a: "Trident Hills is set directly at the base of the Shivalik hills in Sector-4 PKUC Pinjore-Panchkula. Unlike crowded urban sectors, it preserves over 60% of open greenery with natural slopes, mountain views, underground utilities, and low-density planning, while retaining seamless 6-lane connectivity to Chandigarh."
  },
  {
    q: "Is Trident Hills RERA registered?",
    a: "Yes. Phase 1 & 2 are registered under HRERA-PKL-PKL-355-2022 & HRERA-PKL-PKL-356-2022 (valid up to 17.08.2027). Phase 3 (Central Vista) is registered under HRERA-PKL-PKL-782-2025 (valid up to 31.10.2025). All statutory certificates can be inspected via Golden Brick."
  },
  {
    q: "What is the official plot pricing and payment plan?",
    a: "The official price for Special Edition Plots is ₹1,39,000 / Sq. Yd. (Allotment base rate ₹90,000 / Sq. Yd.). The construction-linked payment plan is structured across 8 verifiable milestones: from 10% booking money up to road and infrastructure completion before final offer of possession."
  },
  {
    q: "Can I hold a plot before making a final payment?",
    a: "Yes. Through the Golden Brick CRM engine, prospective buyers can place a soft 24 to 48-hour Unit Hold on a shortlisted plot while completing their legal due diligence and banking approvals."
  },
  {
    q: "How does the Golden Brick CRM Mobile App work for buyers?",
    a: "The Golden Brick Mobile App allows buyers to inspect real-time plot availability, review construction progress photos, track milestone payment schedules, download payment receipts, and stay in direct one-tap touch with their assigned Relationship Manager."
  }
];
