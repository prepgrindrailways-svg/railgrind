"use client";

import Link from 'next/link';
import { 
  ArrowRight, 
  FileText, 
  BookOpen, 
  Award, 
  Clock, 
  Globe, 
  Download, 
  Calendar, 
  ChevronRight,
  Shield,
  Zap,
  TrendingUp,
  Briefcase,
  DollarSign,
  UserCheck,
  Eye,
  Settings,
  Flame,
  FileCheck,
  MapPin,
  AlertTriangle
} from 'lucide-react';

const subpagesList = [
  { id: 'notification', name: 'Notification 2026', icon: FileText },
  { id: 'vacancy', name: 'Vacancy Details', icon: Briefcase },
  { id: 'dates', name: 'Important Dates', icon: Calendar },
  { id: 'eligibility', name: 'Eligibility Criteria', icon: UserCheck },
  { id: 'medical', name: 'Medical Standards', icon: Eye },
  { id: 'pattern', name: 'Exam Pattern', icon: Settings },
  { id: 'syllabus', name: 'Official Syllabus', icon: BookOpen },
  { id: 'pyqs', name: 'Previous Year Papers', icon: Clock },
  { id: 'mocks', name: 'Mock Test Series', icon: Flame },
  { id: 'strategy', name: 'Preparation Strategy', icon: Shield },
  { id: 'job-profile', name: 'Job Profiles List', icon: Award },
  { id: 'salary', name: 'Salary & Pay Scale', icon: DollarSign },
  { id: 'preference', name: 'Post Preference Guide', icon: FileCheck },
  { id: 'centres', name: 'Exam Centres List', icon: MapPin },
  { id: 'admit-card', name: 'Admit Card Download', icon: Download },
  { id: 'day-rules', name: 'Exam Day Rules', icon: AlertTriangle },
  { id: 'normalization', name: 'Normalization Mark', icon: Zap },
  { id: 'answer-key', name: 'Answer Key PDF', icon: Globe },
  { id: 'cutoffs', name: 'Cut-off Trends', icon: TrendingUp },
  { id: 'result', name: 'Result & Merit List', icon: Award }
];

interface ExamSubpageClientProps {
  examId: string;
  subpage: string;
  examDisplayName: string;
  activeExamStats: {
    vacancies: string;
    applicants: string;
    salaryRange: string;
    faqList: { q: string; a: string }[];
  };
  activeContent: {
    title: string;
    description: string;
    badge?: string;
    tableHeaders?: string[];
    tableData?: string[][];
    bulletsTitle?: string;
    bullets?: string[];
    infoBox?: string;
  };
}

export default function ExamSubpageClient({
  examId,
  subpage,
  examDisplayName,
  activeExamStats,
  activeContent
}: ExamSubpageClientProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ textAlign: 'left', padding: '4.5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href={`/${examId}`} style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>{examDisplayName} Hub</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: '600' }}>{activeContent.title.split(' ')[0]} Section</span>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Zap size={14} color="#facc15" style={{ animation: 'bounce 1s infinite' }} /> 2026 Railway Board Official Updates
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>
                {examDisplayName} Premium Informational Vault
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                Access comprehensive parameters regarding the active {examDisplayName} examination cycles. Select your target information page directly from the left menu block below.
              </p>
            </div>
            
            {/* Authentic dynamic statistics cards */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.vacancies.split(' ')[0]}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Total Posts</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.applicants}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Applicants</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2rem', color: '#facc15', margin: '0.5rem 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.salaryRange.split(' ')[0]}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Scale Start</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Massive Content Grid Layout */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '5rem 0' }}>
        <div className="container">

          {/* TWO-COLUMN GRID: Left (20 subpage items scrollable list & PrepGrind Ad) | Right (Detailed content sheets) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', alignItems: 'start' }}>
            
            {/* LEFT COLUMN: Sticky scrollable directory menu featuring 20 pages + PrepGrind promotion ad */}
            <div style={{ 
              gridColumn: 'span 4', 
              position: 'sticky', 
              top: '6rem', 
              alignSelf: 'start',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }} className="explorer-sidebar">
              
              {/* 20 Subpage Scrollable Menu */}
              <div style={{
                maxHeight: '520px',
                overflowY: 'auto',
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }} className="scrollbar-styled">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                  <BookOpen size={18} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    Exam Navigation Menu
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {subpagesList.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = subpage === item.id;
                    return (
                      <Link 
                        key={item.id} 
                        href={`/${examId}/${item.id}`}
                        style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.75rem',
                          width: '100%',
                          textAlign: 'left',
                          padding: '0.75rem 1rem', 
                          border: '1px solid var(--border-color)', 
                          borderRadius: 'var(--radius-md)', 
                          backgroundColor: isActive ? 'var(--primary-light)' : 'var(--surface)',
                          color: isActive ? 'var(--primary)' : 'var(--text-main)',
                          fontWeight: '800',
                          fontSize: '0.85rem',
                          textDecoration: 'none',
                          cursor: 'pointer',
                          fontFamily: 'Outfit',
                          transition: 'all 0.3s ease'
                        }}
                        className="card-hover-effect"
                      >
                        <IconComponent size={14} style={{ flexShrink: 0 }} />
                        <span style={{ flexGrow: 1 }}>{item.name}</span>
                        <ChevronRight size={12} style={{ opacity: isActive ? 1 : 0.4 }} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* PrepGrind Ad Directly Below the 20 Subpage Menu inside left sticky column */}
              <a 
                href="https://prepgrind.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'block', 
                  background: 'linear-gradient(135deg, var(--primary) 0%, #a83c2c 100%)', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '1.25rem', 
                  color: '#fff', 
                  textDecoration: 'none', 
                  boxShadow: '0 4px 15px rgba(212, 83, 63, 0.25)', 
                  position: 'relative', 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                className="card-hover-effect"
              >
                {/* Glowing blur effects */}
                <div style={{
                  position: 'absolute',
                  top: '-40%',
                  right: '-40%',
                  width: '120px',
                  height: '120px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  borderRadius: '50%',
                  filter: 'blur(20px)',
                  zIndex: 0
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span style={{ 
                    fontSize: '0.65rem', 
                    padding: '0.2rem 0.5rem', 
                    backgroundColor: '#facc15', 
                    color: '#000', 
                    borderRadius: '4px', 
                    fontWeight: '850',
                    textTransform: 'uppercase',
                    display: 'inline-block',
                    marginBottom: '0.75rem',
                    letterSpacing: '0.5px'
                  }}>
                    PREPGRIND SPECIAL
                  </span>

                  <h5 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: '800', 
                    fontFamily: 'Outfit', 
                    lineHeight: '1.3', 
                    marginBottom: '0.5rem',
                    color: '#fff'
                  }}>
                    Unlock 50,000+ Mocks
                  </h5>

                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    lineHeight: '1.4', 
                    marginBottom: '1rem' 
                  }}>
                    Attempt standard CBT mock test packages, bilingual PYQ solved shift grids, and topper sheets. Register now!
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    color: '#facc15' 
                  }}>
                    <span>Access PrepGrind</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>

            </div>

            {/* RIGHT COLUMN: High-Density Premium Detailed Worksheets (Span 8) */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Detailed Content Card */}
              <div style={{ 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-sm)' 
              }}>
                
                {/* Header details */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>
                    {activeContent.title}
                  </h2>
                  {activeContent.badge && (
                    <span style={{ 
                      fontSize: '0.7rem', 
                      padding: '0.25rem 0.6rem', 
                      backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                      color: 'var(--primary)', 
                      borderRadius: '4px', 
                      fontWeight: '800' 
                    }}>
                      {activeContent.badge}
                    </span>
                  )}
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                  {activeContent.description}
                </p>

                {/* Table details (if exists) */}
                {activeContent.tableHeaders && activeContent.tableData && (
                  <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
                      <thead>
                        <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--border-color)' }}>
                          {activeContent.tableHeaders.map((head, hIdx) => (
                            <th key={hIdx} style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '800', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                              {head}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeContent.tableData.map((row, rIdx) => (
                          <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: rIdx % 2 === 0 ? 'var(--surface)' : 'rgba(255,255,255,0.02)' }}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: cIdx === 0 ? '800' : '600', color: cIdx === 0 ? 'var(--text-main)' : 'var(--text-muted)' }}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Bullets details (if exists) */}
                {activeContent.bulletsTitle && activeContent.bullets && (
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {activeContent.bulletsTitle}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                      {activeContent.bullets.map((bullet, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', lineHeight: '1.5' }}>
                          <span style={{ color: 'var(--primary)', fontWeight: '950', marginTop: '0.1rem' }}>✓</span>
                          <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* InfoBox (if exists) */}
                {activeContent.infoBox && (
                  <div style={{ 
                    padding: '1.25rem', 
                    backgroundColor: 'var(--primary-light)', 
                    borderRadius: 'var(--radius-md)', 
                    borderLeft: '4px solid var(--primary)',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: 'var(--text-main)',
                    fontWeight: '700'
                  }}>
                    {activeContent.infoBox}
                  </div>
                )}

              </div>

              {/* Direct Mock Test Simulator Card Integration */}
              <div style={{ 
                textAlign: 'center', 
                padding: '2.5rem 2rem', 
                backgroundColor: 'var(--primary-light)', 
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(212, 83, 63, 0.15)'
              }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: '850' }}>
                  Practice Mocks for {examDisplayName} on PrepGrind!
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '600' }}>
                  Boost your exam speeds. Attempt official solved shift previous papers and simulated full length mocks under real exam clocks.
                </p>
                <a 
                  href="https://prepgrind.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                  style={{ textDecoration: 'none', padding: '0.75rem 2rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Attempt Free Mocks <ArrowRight size={16} />
                </a>
              </div>

            </div>

          </div>

          {/* Zonal FAQs list at the end */}
          <section style={{ borderTop: '1px solid var(--border-color)', marginTop: '6rem', paddingTop: '5.5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span style={{ 
                fontSize: '0.8rem', 
                fontWeight: '800', 
                color: 'var(--primary)', 
                textTransform: 'uppercase', 
                letterSpacing: '2px',
                backgroundColor: 'var(--primary-light)',
                padding: '0.4rem 1rem',
                borderRadius: 'var(--radius-sm)',
                display: 'inline-block',
                marginBottom: '1rem'
              }}>
                {examDisplayName} FAQ Center
              </span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
                Frequently Asked Questions
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
                Everything you need to know about the official {examDisplayName} recruitment parameters.
              </p>
            </div>

            <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {activeExamStats.faqList.map((faq, index) => (
                <details 
                  key={index} 
                  className="faq-details"
                >
                  <summary className="faq-summary">
                    <span>{faq.q}</span>
                  </summary>
                  <div className="faq-content">
                    <p style={{ 
                      marginTop: '1rem', 
                      color: 'var(--text-muted)', 
                      fontSize: '0.95rem', 
                      lineHeight: '1.65', 
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '0.75rem',
                      cursor: 'default'
                    }}>
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

        </div>
      </section>
    </>
  );
}
