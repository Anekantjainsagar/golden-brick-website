import Link from 'next/link';
import { ShieldCheck, Smartphone, Mail, Phone, Lock, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/projectData';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 bg-brand-alabaster min-h-screen">
      <div className="container max-w-4xl mx-auto bg-white p-8 md:p-14 rounded-2xl border border-slate-200 shadow-sm">
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-goldBg border border-brand-gold/30 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck size={14} className="text-brand-gold" />
            Official Legal &amp; Google Play Compliance
          </div>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-3">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs md:text-sm text-slate-500 font-medium">
            <span>Golden Brick Ventures &bull; Golden Brick CRM</span>
            <span>&bull;</span>
            <span>Application ID: <code className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-mono">com.reos.goldenbrick</code></span>
            <span>&bull;</span>
            <span>Effective Date: October 14, 2026</span>
          </div>
        </div>

        {/* Content Body */}
        <div className="text-slate-700 text-sm md:text-base leading-relaxed space-y-7">
          <p>
            <strong>Golden Brick Ventures</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates the <strong>Golden Brick CRM</strong> mobile application (the &ldquo;App&rdquo;) and associated web services at <strong>goldenbrick.biz</strong>. This Privacy Policy outlines how we collect, use, process, and protect user data in strict compliance with enterprise standards and <strong>Google Play Developer Policies</strong>.
          </p>

          {/* Section 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-gold text-white text-xs flex items-center justify-center font-bold">1</span>
              Information We Collect
            </h2>
            <p className="mb-4">
              Golden Brick CRM is an enterprise customer relationship management and real estate booking platform. We collect the following categories of information:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 list-disc list-inside">
              <li><strong>Account Details:</strong> Name, enterprise email address (<code className="bg-white px-1.5 py-0.5 rounded border text-xs">admin@company.com</code>), contact phone number, and access credentials provisioned by your organization.</li>
              <li><strong>CRM &amp; Booking Data:</strong> Prospective buyer details, client communication notes, plot/unit inventory reservations, 48-hour soft holds, and payment milestone records.</li>
              <li><strong>Uploaded KYC &amp; Verification Documents:</strong> Identity proofs, allotment contracts, and photographs uploaded directly by authorized sales agents or buyers for property transaction records.</li>
              <li><strong>Device Diagnostics &amp; Telemetry:</strong> Device model, operating system version, and anonymous crash telemetry strictly for app performance, bug fixing, and platform security.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-forestGreen text-white text-xs flex items-center justify-center font-bold">2</span>
              How We Use Data
            </h2>
            <p className="mb-3">
              Collected information is processed solely for legitimate business operations and service delivery:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Managing leads, scheduling site visits, and holding plot inventory.</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Tracking 8-milestone construction escrow &amp; issuing digital receipts.</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Facilitating developer coordination with Trident Realty &amp; DLF.</span>
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                <span>Maintaining role-based workspace authorization and audit logs.</span>
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-emerald-50/60 border border-emerald-200 rounded-xl p-6">
            <h2 className="text-xl font-heading font-bold text-emerald-950 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-emerald-700 text-white text-xs flex items-center justify-center font-bold">3</span>
              Advertising and Tracking Declaration
            </h2>
            <p className="text-emerald-900 text-sm leading-relaxed">
              <strong>Strictly No Commercial Advertising:</strong> The Golden Brick CRM application contains <strong>NO third-party advertisements</strong>. We do not integrate the Google Advertising ID (AAID), ad networks, behavioral trackers, or data broker SDKs.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-bold">4</span>
              Data Sharing and Security Infrastructure
            </h2>
            <ul className="space-y-2.5 text-sm list-disc list-inside">
              <li><strong>No Data Brokering:</strong> We never sell, lease, or monetize user data under any circumstance.</li>
              <li><strong>End-to-End Encryption:</strong> All communications between the mobile app, web platform, and AWS backend servers are strictly encrypted in transit using modern <strong>TLS / HTTPS (256-bit encryption)</strong>.</li>
              <li><strong>Secure Cloud Architecture:</strong> Stored on isolated cloud servers with role-based access control and regular automated security backups.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-6">
            <h2 className="text-xl font-heading font-bold text-amber-950 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-gold text-white text-xs flex items-center justify-center font-bold">5</span>
              Data Retention &amp; Account Deletion Policy
            </h2>
            <p className="text-amber-900 text-sm leading-relaxed mb-3">
              In accordance with Google Play Developer Policies and data protection regulations, users and enterprise organizations have full control over their records:
            </p>
            <p className="text-amber-900 text-sm leading-relaxed">
              To request permanent deletion of your account, associated lead records, or uploaded KYC files, contact your organization admin or email our compliance desk at <strong className="text-black">{COMPANY_INFO.adminEmail}</strong>. Deletion requests are processed within 7 business days following statutory audit retention rules.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-2 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-slate-800 text-white text-xs flex items-center justify-center font-bold">6</span>
              Children&apos;s Privacy
            </h2>
            <p className="text-sm">
              Golden Brick CRM is an enterprise professional application designed solely for business users and adult home buyers aged 18 and older. We do not knowingly collect or solicit personal information from individuals under the age of 18.
            </p>
          </div>

          {/* Section 7 */}
          <div className="border-t border-slate-200 pt-6 mt-8">
            <h2 className="text-xl font-heading font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-7 h-7 rounded-full bg-brand-gold text-white text-xs flex items-center justify-center font-bold">7</span>
              Contact Our Privacy Compliance Desk
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm space-y-2">
              <div className="font-bold text-slate-900">{COMPANY_INFO.name}</div>
              <div><strong>Application Name:</strong> Golden Brick CRM</div>
              <div><strong>Package ID:</strong> <code className="font-mono bg-white px-2 py-0.5 rounded border">{COMPANY_INFO.crmPackage}</code></div>
              <div><strong>Email:</strong> <a href={`mailto:${COMPANY_INFO.adminEmail}`} className="text-brand-goldDark font-semibold hover:underline">{COMPANY_INFO.adminEmail}</a></div>
              <div><strong>Support Hotline:</strong> <a href={`tel:${COMPANY_INFO.phone}`} className="text-slate-900 font-semibold">{COMPANY_INFO.phone}</a></div>
              <div><strong>Corporate Address:</strong> {COMPANY_INFO.address}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
