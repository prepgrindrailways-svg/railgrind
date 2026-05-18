import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Train, ExternalLink, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import PromoPopup from "@/components/PromoPopup";

export const metadata: Metadata = {
  title: "RailGrind | Railway Exam Preparation & Blogs",
  description: "Complete guide and resources for Indian Railway Exams including RRB NTPC, Group D, ALP, and more. Ranked top for railway exam prep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <PromoPopup />

        <main style={{ minHeight: 'calc(100vh - 4rem - 300px)' }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <Link href="/" className="logo" style={{ marginBottom: '1.5rem', display: 'flex' }}>
                  <Train size={24} /> RailGrind
                </Link>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '300px' }}>
                  Your ultimate destination for Railway exam preparation, blogs, and updates. Powered by PrepGrind.
                </p>
                <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-muted)', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                  <a href="https://youtube.com/prepgrind" target="_blank" rel="noopener noreferrer" title="YouTube" className="social-icon-link" style={{ transition: 'color 0.2s ease, transform 0.2s ease', display: 'inline-flex', alignItems: 'center' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                    </svg>
                  </a>
                  <a href="https://instagram.com/prepgrind" target="_blank" rel="noopener noreferrer" title="Instagram" className="social-icon-link" style={{ transition: 'color 0.2s ease, transform 0.2s ease', display: 'inline-flex', alignItems: 'center' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://twitter.com/prepgrind" target="_blank" rel="noopener noreferrer" title="Twitter" className="social-icon-link" style={{ transition: 'color 0.2s ease, transform 0.2s ease', display: 'inline-flex', alignItems: 'center' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="https://facebook.com/prepgrind" target="_blank" rel="noopener noreferrer" title="Facebook" className="social-icon-link" style={{ transition: 'color 0.2s ease, transform 0.2s ease', display: 'inline-flex', alignItems: 'center' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h4>Modules</h4>
                <ul className="footer-links">
                  <li><Link href="/exams">All Exams</Link></li>
                  <li><Link href="/test-series">Test Series</Link></li>
                  <li><Link href="/live-tests">Live Tests</Link></li>
                  <li><Link href="/study-material">Study Material</Link></li>
                  <li><Link href="/pyqs">Previous Year Papers</Link></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Resources</h4>
                <ul className="footer-links">
                  <li><Link href="/blogs">Railway Blogs</Link></li>
                  <li><Link href="/current-updates">Current Updates</Link></li>
                  <li><a href="https://prepgrind.com" target="_blank" rel="noopener noreferrer">Mock Exams (PrepGrind)</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <ul className="footer-links">
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/help-centre">Help Centre</Link></li>
                  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} RailGrind by PrepGrind. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
