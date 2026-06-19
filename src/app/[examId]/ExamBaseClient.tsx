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
  AlertTriangle,
  BarChart
} from 'lucide-react';

const subpagesList = [
  { id: 'notification', name: 'Notification', icon: FileText },
  { id: 'admit-card', name: 'Admit Card', icon: Download },
  { id: 'vacancy', name: 'Vacancy', icon: Briefcase },
  { id: 'syllabus', name: 'Syllabus', icon: BookOpen },
  { id: 'important-dates', name: 'Important Dates', icon: Calendar },
  { id: 'cut-off', name: 'Cut Off', icon: TrendingUp },
  { id: 'exam-pattern', name: 'Exam Pattern', icon: Settings },
  { id: 'eligibility', name: 'Eligibility', icon: UserCheck },
  { id: 'selection-process', name: 'Selection Process', icon: Award },
  { id: 'salary', name: 'Salary', icon: DollarSign },
  { id: 'mock-tests', name: 'RRB NTPC Mock Tests', icon: Flame },
  { id: 'english-sectional', name: 'English Language sectional tests', icon: FileCheck },
  { id: 'quant-tests', name: 'Quantitative Aptitude tests', icon: BarChart },
  { id: 'reasoning-tests', name: 'Reasoning Ability tests', icon: Zap },
  { id: 'study-plan', name: 'Study Plan', icon: Shield }
];

interface ExamBaseClientProps {
  examId: string;
  examDisplayName: string;
  activeExamStats: {
    fullName: string;
    vacancies: string;
    applicants: string;
    salaryRange: string;
    notificationCen: string;
    level: string;
    posts: string[];
    medicalStandard: string;
    faqList: { q: string; a: string }[];
  };
}

export default function ExamBaseClient({
  examId,
  examDisplayName,
  activeExamStats
}: ExamBaseClientProps) {
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
            <Link href="/exams" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Exams</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: '600' }}>{examDisplayName} Hub</span>
          </div>

          {/* Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Zap size={14} color="#facc15" style={{ animation: 'bounce 1s infinite' }} /> 2026 Railway Board Official Updates
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 className="exam-header-title" style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>
                {examDisplayName} Overview Hub
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '0.5rem' }}>
                Access the complete central repository for **{activeExamStats.fullName}**. Browse deep-dive guides for all 20 crucial sections from our directory on the left.
              </p>
            </div>
            
            {/* Authentic dynamic statistics cards */}
            <div className="exam-header-stats-container" style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <div className="exam-header-stats-item" style={{ textAlign: 'center', color: '#fff' }}>
                <h3 className="exam-header-stat-value" style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.vacancies.split(' ')[0]}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Total Posts</p>
              </div>
              <div className="exam-header-stats-item" style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 className="exam-header-stat-value" style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
                  {activeExamStats.applicants}
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Applicants</p>
              </div>
              <div className="exam-header-stats-item" style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 className="exam-header-stat-value" style={{ fontSize: '2rem', color: '#facc15', margin: '0.5rem 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>
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

          {/* TWO-COLUMN GRID: Left (20 subpage items scrollable list & PrepGrind Ad) | Right (Overview sheets) */}
          <div className="responsive-grid-12" style={{ gap: '2.5rem', alignItems: 'start'  }}>
            
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
                          backgroundColor: 'var(--surface)',
                          color: 'var(--text-main)',
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
                        <ChevronRight size={12} style={{ opacity: 0.4 }} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Railgrind Ad Directly Below the 15 Subpage Menu inside left sticky column */}
              <a 
                href="https://railgrind.in" 
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
                    RAILGRIND SPECIAL
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
                    <span>Access Railgrind</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>

            </div>

            {/* RIGHT COLUMN: General Overview sheets in identical format (Span 8) */}
            <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Overview Hub Card */}
              <div style={{ 
                backgroundColor: 'var(--surface)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-xl)', 
                padding: '2.5rem', 
                boxShadow: 'var(--shadow-sm)' 
              }}>
                
                <h2 style={{ fontSize: '1.6rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', marginBottom: '1.25rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
                  {examDisplayName} Recruitment Overview
                </h2>

                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.75', marginBottom: '2rem' }}>
                  The Railway Recruitment Boards (RRB) conduct highly competitive centralized examinations for <strong>{activeExamStats.fullName}</strong>. Selected candidates receive career paths across active zones, complete job security, and monthly medical and traveling allowances. 
                  Select any section from the menu on the left to review specific guidelines and solved files.
                </p>

                {/* General Parameters Table */}
                <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
                    <thead>
                      <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--border-color)' }}>
                        <th style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '800', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          Recruitment Parameter
                        </th>
                        <th style={{ padding: '0.9rem 1rem', textAlign: 'left', fontWeight: '800', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                          Official Board Specification
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '800', color: 'var(--text-main)' }}>
                          Official CEN Code
                        </td>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                          {activeExamStats.notificationCen}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '800', color: 'var(--text-main)' }}>
                          7th CPC Pay Scale Matrix
                        </td>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                          {activeExamStats.level}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '800', color: 'var(--text-main)' }}>
                          Ocular Visual Classification
                        </td>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                          {activeExamStats.medicalStandard}
                        </td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '800', color: 'var(--text-main)' }}>
                          Eligible Zonal Designations
                        </td>
                        <td style={{ padding: '0.9rem 1rem', fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                          {activeExamStats.posts.join(', ')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Quick Preparation Guidelines:
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: '950', marginTop: '0.1rem' }}>✓</span>
                      <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>
                        Browse all 20 categories on the left menu directory to view deep-dive checklists, dates, and patterns.
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span style={{ color: 'var(--primary)', fontWeight: '950', marginTop: '0.1rem' }}>✓</span>
                      <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>
                        Attempt previous solved shift papers across 2025, 2024, 2023, and 2022 to understand zonal exam trends.
                      </span>
                    </div>
                  </div>
                </div>

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
                  Practice Mocks for {examDisplayName} on Railgrind!
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '550px', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '600' }}>
                  Boost your exam speeds. Attempt official solved shift previous papers and simulated full length mocks under real exam clocks.
                </p>
                <a 
                  href="https://railgrind.in" 
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
