"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Globe, Users, BookOpen, FileText, Search, Share2, Clock, Award } from 'lucide-react';
import Marquee from '@/components/Marquee';

// Dynamic generator to provide exactly 20 Full Mocks, 45 Sectional, and 80 Practice Tests per exam
// Total 145 tests per exam across 5 exams = 725 total tests in the database!
const generateTests = () => {
  const exams = ["RRB NTPC", "RRB Group D", "RPF Constable", "RRB JE", "RRB ALP"];
  const list = [];
  let id = 1;

  exams.forEach(exam => {
    // 1. Generate 20 Full Mocks
    for (let i = 1; i <= 20; i++) {
      list.push({
        id: id++,
        exam: exam,
        type: "Full Mocks",
        title: `${exam} CBT 1 - Full Mock Test ${i}`,
        duration: "90 min",
        questions: "100 Qs",
        marks: "100 Marks",
        languages: "English / Hindi",
        difficulty: i % 3 === 1 ? "EASY" : i % 3 === 2 ? "MEDIUM" : "HARD",
        isFree: i <= 2, // First 2 mocks are free
        isPopular: i === 1 || i === 5 || i === 10
      });
    }

    // 2. Generate 45 Sectional Tests
    const subjects = ["Mathematics", "General Intelligence & Reasoning", "General Awareness", "General Science"];
    for (let i = 1; i <= 45; i++) {
      const subject = subjects[(i - 1) % subjects.length];
      list.push({
        id: id++,
        exam: exam,
        type: "Sectional Tests",
        title: `${exam} - Sectional Test ${i} (${subject})`,
        duration: "30 min",
        questions: "30 Qs",
        marks: "30 Marks",
        languages: "English / Hindi",
        difficulty: i % 3 === 1 ? "EASY" : i % 3 === 2 ? "MEDIUM" : "HARD",
        isFree: i <= 3, // First 3 are free
        isPopular: i % 7 === 0
      });
    }

    // 3. Generate 80 Practice Sets
    for (let i = 1; i <= 80; i++) {
      const topic = i % 4 === 1 ? "Arithmetic" : i % 4 === 2 ? "Data Interpretation" : i % 4 === 3 ? "Reasoning Ability" : "Static GK";
      list.push({
        id: id++,
        exam: exam,
        type: "Practice Sets",
        title: `${exam} - Topic Practice Set ${i} (${topic})`,
        duration: "20 min",
        questions: "20 Qs",
        marks: "20 Marks",
        languages: "English / Hindi",
        difficulty: i % 3 === 1 ? "EASY" : i % 3 === 2 ? "MEDIUM" : "HARD",
        isFree: i <= 4, // First 4 are free
        isPopular: false
      });
    }
  });

  return list;
};

export default function TestSeriesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Generate the database of 725 mock tests
  const mockTests = useMemo(() => generateTests(), []);

  // Filtering logic
  const filteredTests = useMemo(() => {
    return mockTests.filter(test => {
      const matchesCategory = selectedCategory === 'All' || test.exam === selectedCategory;
      const matchesType = selectedType === 'All' || test.type === selectedType;
      const matchesQuery = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || test.exam.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesType && matchesQuery;
    });
  }, [mockTests, selectedCategory, selectedType, searchQuery]);

  // Reset pagination on filter change
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(6);
  };

  const handleTypeChange = (typeId: string) => {
    setSelectedType(typeId);
    setVisibleCount(6);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(6);
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ textAlign: 'left', padding: '5rem 0', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/test-series" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Test Series</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: '600' }}>Structured Preparation</span>
          </div>

          {/* Structured Preparation Capsule Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <BookOpen size={14} /> Structured Preparation
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>
                Best Online Test Series & Mock Tests for <span style={{ color: '#facc15' }}>Railway Exams</span> | 500+ Exams
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Looking for the best test series to crack competitive railway exams? You've come to the right place. Our comprehensive test series covers all major railway exams with mock tests designed by expert educators and exam toppers.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Whether you're preparing for RRB NTPC, Group D, ALP, Constable, SI, or JE, we have a dedicated test series tailored to your needs. Our test series combines comprehensive content, realistic exam simulations, and detailed performance analysis to help you achieve your goals.
              </p>
            </div>

            {/* Float Stats inside Hero on the right */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>500+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Test Series</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>2L+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Aspirants</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>10K+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ 
        backgroundColor: 'var(--primary)', 
        padding: '0.6rem 0', 
        overflow: 'hidden', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'inset 0 2px 6px rgba(0, 0, 0, 0.05)'
      }}>
        <Marquee speed="45s">
          {[
            "RRB NTPC", "RRB Group D", "RRB ALP", "RPF Constable", "RRB JE", "RPF SI", 
            "RRB SSE", "RRB Paramedical", "RRB NTPC Graduate", "RRB NTPC Undergraduate"
          ].map((exam, i) => (
            <div key={i} style={{ 
              color: '#fff', 
              fontWeight: '800', 
              fontSize: '1.15rem', 
              letterSpacing: '1px',
              padding: '0 2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              whiteSpace: 'nowrap',
              fontFamily: 'Outfit'
            }}>
              <span>{exam}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.35)', fontSize: '1.5rem' }}>•</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Popular Test Series Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', padding: '5rem 0 3rem 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.75rem', marginBottom: '2rem', color: 'var(--text-main)', borderLeft: '4px solid var(--primary)', paddingLeft: '0.75rem', fontFamily: 'Outfit', fontWeight: '800' }}>
            Popular Test Series
          </h2>

          <div className="grid-4-cols">
            {[
              {
                category: "Railways",
                title: "RRB NTPC (CBT 1 + CBT 2) 2026 Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "34 Tests Free",
                attempts: "1,10,481 Attempts",
                rating: "4.8",
                reviews: "1,964",
                languages: "English + 7 Languages",
                link: "https://prepgrind.com"
              },
              {
                category: "Railways",
                title: "RRB Group D 2026 Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "25 Tests Free",
                attempts: "1,84,321 Attempts",
                rating: "4.7",
                reviews: "3,842",
                languages: "English + 9 Languages",
                link: "https://prepgrind.com"
              },
              {
                category: "Railways",
                title: "RPF Constable 2026 Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "18 Tests Free",
                attempts: "72,145 Attempts",
                rating: "4.6",
                reviews: "1,104",
                languages: "English + 5 Languages",
                link: "https://prepgrind.com"
              },
              {
                category: "Railways",
                title: "RRB JE 2026 Mock Test Series",
                fullMocks: "20 Full Mocks",
                sectionals: "45 Sectionals",
                practice: "80+ Practice Tests",
                free: "12 Tests Free",
                attempts: "45,920 Attempts",
                rating: "4.8",
                reviews: "852",
                languages: "English + 4 Languages",
                link: "https://prepgrind.com"
              }
            ].map((item, index) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={index} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              className="card-hover-effect"
              >
                <div>
                  {/* Header: Icon & Category */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                    <div style={{ 
                      width: '2.5rem', 
                      height: '2.5rem', 
                      backgroundColor: 'var(--primary-light)', 
                      color: 'var(--primary)', 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <BookOpen size={18} />
                    </div>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      padding: '0.25rem 0.6rem', 
                      backgroundColor: 'var(--primary-light)', 
                      color: 'var(--primary)', 
                      borderRadius: 'var(--radius-sm)', 
                      fontWeight: '700' 
                    }}>
                      {item.category}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '800', lineHeight: '1.4', marginBottom: '1.25rem', color: 'var(--text-main)', fontFamily: 'Outfit' }}>
                    {item.title}
                  </h3>

                  {/* Specific Mock Details list */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600' }}>
                      <FileText size={16} color="var(--primary)" />
                      <span>{item.fullMocks}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600' }}>
                      <FileText size={16} color="var(--primary)" />
                      <span>{item.sectionals}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)', fontWeight: '600' }}>
                      <FileText size={16} color="var(--primary)" />
                      <span>{item.practice}</span>
                    </div>
                  </div>

                  {/* Free Badge */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.8rem', padding: '0.25rem 0.6rem', backgroundColor: '#def7ec', borderRadius: 'var(--radius-sm)', color: '#03543f', fontWeight: '700' }}>
                      {item.free}
                    </span>
                  </div>

                  {/* Attempts, Languages & Rating Info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)' }}>
                        <Users size={15} color="var(--primary)" />
                        <span>{item.attempts}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#f59e0b', fontWeight: '700' }}>
                        <Star size={15} fill="#f59e0b" color="#f59e0b" /> {item.rating} <span style={{ color: 'var(--text-muted)', fontWeight: '400' }}>({item.reviews})</span>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <Globe size={15} color="var(--primary)" />
                      <span>{item.languages}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button: Beautiful Solid Terracotta Button */}
                <div className="btn-primary" style={{ 
                  width: '100%', 
                  padding: '0.85rem', 
                  borderRadius: 'var(--radius-md)', 
                  fontWeight: '700', 
                  fontSize: '0.95rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 12px rgba(212, 83, 63, 0.2)',
                }}>
                  View Test Series
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Explorer Section (Categories left, Cards right) */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-color)', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '2.5rem', position: 'relative' }}>
            
            {/* Sidebar Column (Left, 3 units wide on large screens) - STABLE / STICKY */}
            <div style={{ 
              gridColumn: 'span 3', 
              position: 'sticky', 
              top: '6rem', 
              alignSelf: 'start',
              zIndex: 10
            }} className="explorer-sidebar">
              
              {/* Category selector panel */}
              <div style={{ 
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-lg)', 
                padding: '1.5rem',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <h4 style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: '700', 
                  color: 'var(--text-muted)', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px', 
                  marginBottom: '1rem',
                  borderBottom: '1px solid var(--border-color)',
                  paddingBottom: '0.5rem'
                }}>
                  Exam Category
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {[
                    { id: 'All', name: 'All Exams' },
                    { id: 'RRB NTPC', name: 'RRB NTPC' },
                    { id: 'RRB Group D', name: 'RRB Group D' },
                    { id: 'RPF Constable', name: 'RPF Constable' },
                    { id: 'RRB JE', name: 'RRB JE' },
                    { id: 'RRB ALP', name: 'RRB ALP' }
                  ].map((category) => (
                    <div 
                      key={category.id} 
                      className={`sidebar-category ${selectedCategory === category.id ? 'active' : ''}`}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      <span>{category.name}</span>
                      <ArrowRight size={14} style={{ opacity: selectedCategory === category.id ? 1 : 0, transition: 'opacity 0.2s' }} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic PrepGrind Sidebar Promotion Ad (fills the whitespace perfectly) */}
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
                  marginTop: '1.5rem', 
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
                    Access 50,000+ Mocks
                  </h5>

                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    lineHeight: '1.4', 
                    marginBottom: '1rem' 
                  }}>
                    Unlock bilingual tests, sectional strategies, and full detailed solution keys. Register now!
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    color: '#facc15' 
                  }}>
                    <span>Get Free Access</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>

            </div>

            {/* Content Column (Right, 9 units wide on large screens) */}
            <div style={{ gridColumn: 'span 9' }} className="explorer-content">
              {/* Search & Tabs Top Bar */}
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.5rem', 
                marginBottom: '2rem' 
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  backgroundColor: 'var(--surface)', 
                  border: '1px solid var(--border-color)', 
                  borderRadius: 'var(--radius-lg)', 
                  padding: '0.5rem 1.25rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <Search size={20} color="var(--text-muted)" style={{ marginRight: '0.75rem', flexShrink: 0 }} />
                  <input 
                    type="text" 
                    placeholder="Search test series by exam, subject..." 
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    style={{ 
                      border: 'none', 
                      outline: 'none', 
                      width: '100%', 
                      fontSize: '1rem', 
                      backgroundColor: 'transparent',
                      color: 'var(--text-main)',
                      padding: '0.5rem 0'
                    }}
                  />
                </div>

                {/* Filter Tabs */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[
                    { id: 'All', name: 'All' },
                    { id: 'Full Mocks', name: 'Full Mocks (20)' },
                    { id: 'Sectional Tests', name: 'Sectional Tests (45)' },
                    { id: 'Practice Sets', name: 'Practice Sets (80)' }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      className={`explorer-tab ${selectedType === tab.id ? 'active' : ''}`}
                      onClick={() => handleTypeChange(tab.id)}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Header */}
              <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                Showing <span style={{ color: 'var(--primary)' }}>{Math.min(filteredTests.length, visibleCount)}</span> of <span style={{ color: 'var(--text-main)' }}>{filteredTests.length}</span> test series
              </div>

              {/* Grid of Explorer Cards */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '1.5rem' 
              }}>
                {filteredTests.slice(0, visibleCount).map((test) => (
                  <a 
                    href="https://prepgrind.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={test.id} 
                    style={{ 
                      backgroundColor: 'var(--surface)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: 'var(--radius-xl)', 
                      padding: '1.5rem', 
                      display: 'flex', 
                      flexDirection: 'column', 
                      justifyContent: 'space-between',
                      boxShadow: 'var(--shadow-sm)',
                      textDecoration: 'none',
                      position: 'relative',
                      transition: 'all 0.3s ease'
                    }}
                    className="card-hover-effect"
                  >
                    <div>
                      {/* Badges & Share Row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                          {test.isFree && (
                            <span style={{ 
                              fontSize: '0.7rem', 
                              padding: '0.25rem 0.5rem', 
                              backgroundColor: '#def7ec', 
                              color: '#03543f', 
                              borderRadius: '4px', 
                              fontWeight: '700' 
                            }}>
                              FREE
                            </span>
                          )}
                          {test.isPopular && (
                            <span style={{ 
                              fontSize: '0.7rem', 
                              padding: '0.25rem 0.5rem', 
                              backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                              color: 'var(--primary)', 
                              borderRadius: '4px', 
                              fontWeight: '700' 
                            }}>
                              POPULAR
                            </span>
                          )}
                          <span style={{ 
                            fontSize: '0.7rem', 
                            padding: '0.25rem 0.5rem', 
                            backgroundColor: 'var(--primary-light)', 
                            color: 'var(--primary)', 
                            borderRadius: '4px', 
                            fontWeight: '700' 
                          }}>
                            {test.type === 'Full Mocks' ? 'FULL MOCK' : test.type === 'Sectional Tests' ? 'SECTIONAL' : 'PRACTICE SET'}
                          </span>
                        </div>
                        <Share2 size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                      </div>

                      {/* Mock Test Title */}
                      <h4 style={{ 
                        fontSize: '1.05rem', 
                        fontWeight: '800', 
                        lineHeight: '1.4', 
                        marginBottom: '1.5rem', 
                        color: 'var(--text-main)',
                        fontFamily: 'Outfit'
                      }}>
                        {test.title}
                      </h4>

                      {/* 2x2 Details Grid */}
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '0.8rem', 
                        marginBottom: '1.5rem',
                        borderBottom: '1px solid var(--border-color)',
                        paddingBottom: '1.25rem'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <Clock size={14} color="var(--primary)" />
                          <span>{test.duration}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <FileText size={14} color="var(--primary)" />
                          <span>{test.questions}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <Award size={14} color="var(--primary)" />
                          <span>{test.marks}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                          <Globe size={14} color="var(--primary)" />
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{test.languages}</span>
                        </div>
                      </div>

                      {/* Difficulty & Tests count row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <span style={{ 
                          fontSize: '0.8rem', 
                          fontWeight: '700', 
                          color: test.difficulty === 'EASY' ? '#0e9f6e' : test.difficulty === 'MEDIUM' ? '#d03801' : '#c21807',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.25rem'
                        }}>
                          <span style={{ fontSize: '1.1rem' }}>•</span> {test.difficulty}
                        </span>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                          1 Test
                        </span>
                      </div>
                    </div>

                    {/* Action Button: Start Now */}
                    <div className="btn-primary" style={{ 
                      width: '100%', 
                      padding: '0.8rem', 
                      borderRadius: 'var(--radius-md)', 
                      fontWeight: '700', 
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      boxShadow: '0 4px 10px rgba(212, 83, 63, 0.15)'
                    }}>
                      Start Now
                    </div>
                  </a>
                ))}

                {filteredTests.length === 0 && (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)' }}>
                    <BookOpen size={48} color="var(--primary)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>No Mock Tests Found</h4>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>
                      Try selecting a different exam category or filtering by another test type.
                    </p>
                  </div>
                )}
              </div>

              {/* See More Expandable Button */}
              {filteredTests.length > visibleCount && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button 
                    onClick={loadMore}
                    className="btn-primary" 
                    style={{ 
                      padding: '0.875rem 2rem', 
                      fontSize: '1rem', 
                      fontWeight: '700',
                      cursor: 'pointer',
                      border: 'none',
                      boxShadow: '0 4px 12px rgba(212, 83, 63, 0.25)'
                    }}
                  >
                    See More Mock Tests
                  </button>
                </div>
              )}

              {/* Extra conversion note once everything is loaded */}
              {filteredTests.length > 0 && visibleCount >= filteredTests.length && (
                <div style={{ 
                  textAlign: 'center', 
                  marginTop: '4rem', 
                  padding: '2.5rem 2rem', 
                  backgroundColor: 'var(--primary-light)', 
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(212, 83, 63, 0.15)'
                }}>
                  <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: '800' }}>
                    Looking for more practice?
                  </h4>
                  <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '500' }}>
                    Access our full database of over 50,000+ mock tests, custom sectional challenges, and premium study materials on PrepGrind!
                  </p>
                  <a 
                    href="https://prepgrind.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                    style={{ textDecoration: 'none', padding: '0.75rem 1.75rem', fontSize: '0.9rem' }}
                  >
                    Explore 50,000+ Tests <ArrowRight size={16} />
                  </a>
                </div>
              )}

            </div>
            
          </div>
        </div>
      </section>

      {/* 1. Railgrind Test Series: Structured Preparation Detailed Info */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-color)', padding: '5.5rem 0' }}>
        <div className="container">
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
              Structured Preparation
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Railgrind Test Series: Comprehensive Features
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Cracking railway competitive exams requires highly specific practice. The Railgrind Test Series is meticulously organized into different formats to mirror the real CBT exam experience.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ 
              backgroundColor: 'var(--bg-color)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-xl)', 
              padding: '2rem', 
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.3s ease'
            }} className="card-hover-effect">
              <div style={{ 
                width: '45px', 
                height: '45px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.25rem'
              }}>
                <FileText size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Full-Length Mocks (FLTs)
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                Complete mocks with 100% accurate time distribution, exam constraints, and scoring matrices tailored specifically for RRB NTPC, Group D, ALP, JE, and RPF Exams.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'var(--bg-color)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-xl)', 
              padding: '2rem', 
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.3s ease'
            }} className="card-hover-effect">
              <div style={{ 
                width: '45px', 
                height: '45px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.25rem'
              }}>
                <Award size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Sectional & Speed Boosters
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                Focus heavily on specific areas like General Science, General Intelligence & Reasoning, Mathematics, or General Awareness to supercharge speed and target tricky areas.
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'var(--bg-color)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-xl)', 
              padding: '2rem', 
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.3s ease'
            }} className="card-hover-effect">
              <div style={{ 
                width: '45px', 
                height: '45px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(212, 83, 63, 0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: 'var(--primary)',
                marginBottom: '1.25rem'
              }}>
                <Globe size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Bilingual & Regional Support
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                Take mocks seamlessly in English, Hindi, and regional languages. Practice using original, translation-error-free questions matching local zonal boards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Railgrind: Why Choose Our Tests */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
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
                Unmatched Quality
              </span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.25' }}>
                Why Choose Railgrind Online Test Series?
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Not all test series are built equal. We do not just copy-paste questions. Our tests are custom-tailored with detailed analytical insights, mirroring the precise CBT (Computer Based Test) layout of the Railway Recruitment Boards (RRB).
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0', listStyle: 'none', margin: '0 0 2rem 0' }}>
                {[
                  "Curated exclusively by Senior Railway Educators and previous exam toppers.",
                  "100% authentic CBT interface replica so you don't feel lost on exam day.",
                  "Smart score analytics with time tracking down to every single second.",
                  "In-depth shortcut solutions and regional language translations."
                ].map((item, index) => (
                  <li key={index} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>
                    <span style={{ 
                      width: '18px', 
                      height: '18px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(212, 83, 63, 0.15)', 
                      color: 'var(--primary)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      fontSize: '0.7rem',
                      fontWeight: '900',
                      flexShrink: 0,
                      marginTop: '0.15rem'
                    }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://prepgrind.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary" 
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.875rem 2rem', fontSize: '1rem' }}
              >
                Get Started on PrepGrind <ArrowRight size={18} />
              </a>
            </div>

            <div style={{ 
              backgroundColor: 'var(--surface)', 
              border: '1px solid var(--border-color)', 
              borderRadius: 'var(--radius-2xl)', 
              padding: '2.5rem', 
              boxShadow: 'var(--shadow-md)',
              position: 'relative'
            }}>
              <h3 style={{ fontSize: '1.4rem', fontFamily: 'Outfit', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--text-main)' }}>
                PrepGrind Success Metric
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    <span>CBT Layout Authenticity</span>
                    <span style={{ color: 'var(--primary)' }}>99.8%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '99.8%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    <span>Topper Recommended Ratio</span>
                    <span style={{ color: 'var(--primary)' }}>96.5%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '96.5%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    <span>Solution Step-By-Step Detailing</span>
                    <span style={{ color: 'var(--primary)' }}>98.4%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '98.4%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>
              </div>

              <div style={{ 
                marginTop: '2.5rem', 
                padding: '1.25rem', 
                backgroundColor: 'var(--primary-light)', 
                borderRadius: 'var(--radius-xl)', 
                borderLeft: '4px solid var(--primary)' 
              }}>
                <p style={{ color: 'var(--text-main)', fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.5', margin: '0' }}>
                  "I attempted all 20 Railgrind FLTs for RRB ALP. The CBT timer interface and GK sectional questions were an exact mirror of what I faced on the actual day!"
                </p>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', marginTop: '0.5rem' }}>
                  — Sandeep Kumar, Selected in RRB ALP (Mumbai Zone)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How to Maximize Your Test Score */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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
              Prep Guide
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
              How to Maximize Your Railway Test Scores
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Simply taking mock tests without a structured strategy is a waste of time. Follow this proven 4-step topper's roadmap to push your scores past the selection cutoffs.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                step: "01",
                title: "Build Topic Mastery",
                desc: "Start with short 10-15 minute daily practice sets. Clear your foundational shortcuts in Quant and Reasoning before attempting full mock grids."
              },
              {
                step: "02",
                title: "Sectional Speedups",
                desc: "Focus on subject mocks under tight time constraints. This builds immediate cognitive agility and teaches you which questions to instantly skip."
              },
              {
                step: "03",
                title: "Simulate Real CBT Mocks",
                desc: "Set aside a silent 90-minute slot. Treat it like a real exam hall. Do not check answers, stand up, or browse other tabs during the live countdown."
              },
              {
                step: "04",
                title: "Spend 2X Time on Analysis",
                desc: "Spend double the time reviewing your mistakes. Study the step-by-step short solutions for incorrect questions, and log weak items in your review diary."
              }
            ].map((road, index) => (
              <div key={index} style={{ position: 'relative' }}>
                <div style={{ 
                  fontSize: '3.5rem', 
                  fontFamily: 'Outfit', 
                  fontWeight: '900', 
                  color: 'rgba(212, 83, 63, 0.1)', 
                  lineHeight: '1', 
                  marginBottom: '1rem' 
                }}>
                  {road.step}
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.75rem', fontFamily: 'Outfit' }}>
                  {road.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                  {road.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-color)', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4.5rem' }}>
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
              Support FAQs
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Everything you need to know about the Railgrind and PrepGrind Test Series, subscription models, and smart scoring analytics.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: "Are these mock tests based on the latest 2026 Railway pattern?",
                a: "Yes, absolutely! All full-length, sectional, and practice tests are fully updated according to the latest notification schemas, marks distribution, and syllabus guidelines released by the Railway Recruitment Boards (RRB)."
              },
              {
                q: "Will I get step-by-step solutions for mathematics and reasoning questions?",
                a: "Yes. Every single question comes with comprehensive, step-by-step written solutions. Wherever applicable, our senior educators have added premium short tricks and logical methods to help you solve questions within 30 seconds."
              },
              {
                q: "Can I attempt the mock tests in both Hindi and English?",
                a: "Yes! All mock tests on Railgrind & PrepGrind are fully bilingual (English and Hindi). We also provide support for multiple regional languages for specific zonal exams to match local boards."
              },
              {
                q: "How does the All India Rank (AIR) leaderboard work?",
                a: "When you submit a live test or popular test series mock, our system compares your scores, accuracy, and speed with thousands of other candidates currently preparing for the same exam, displaying an accurate percentile and AIR."
              },
              {
                q: "What is the difference between Sectional Mocks and Practice Sets?",
                a: "Practice Sets focus on individual sub-topics (e.g. Percentage, Blood Relations) to build basic conceptual strength. Sectional Mocks contain complete subject-wide question sheets (e.g. entire 30 Qs of Math) matching real time-slots."
              },
              {
                q: "Are there any free mock tests available?",
                a: "Yes, every exam category (RRB NTPC, Group D, ALP, RPF Constable, JE) has multiple high-quality mock tests available 100% free of cost, allowing you to try our CBT interface before buying a premium plan."
              },
              {
                q: "Can I pause a mock test and resume it later?",
                a: "For actual All India Live Tests, you cannot pause as the counter runs globally in real-time. For standard popular test series, you can pause the mock test and resume exactly from where you left off without any issue."
              },
              {
                q: "How do I redirect to my test series on PrepGrind?",
                a: "By clicking on any of the popular mock test cards, you will be instantly taken to PrepGrind's dedicated register and dashboard portal where your selected packages will load automatically."
              }
            ].map((faq, index) => (
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
        </div>
      </section>
    </>
  );
}
