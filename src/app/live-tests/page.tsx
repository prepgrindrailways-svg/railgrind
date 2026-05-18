"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Globe, Users, BookOpen, FileText, Search, Share2, Clock, Award, Calendar, AlertCircle } from 'lucide-react';
import Marquee from '@/components/Marquee';

export default function LiveTestsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  // Dynamic generator to provide exactly 2 Ongoing, 2 Upcoming, and 2 Completed live mocks per exam
  // Total 6 live tests per exam across 5 exams = 30 total live tests in the database!
  const generateLiveTests = () => {
    const exams = ["RRB NTPC", "RRB Group D", "RPF Constable", "RRB JE", "RRB ALP"];
    interface LiveTest {
  id: number;
  exam: string;
  status: string;
  title: string;
  closesIn: string;
  duration: string;
  questions: string;
  marks: string;
  participants: string;
  languages: string;
  isFree: boolean;
  avgScore?: string;
}

const list: LiveTest[] = [];
    let id = 1;

    exams.forEach(exam => {
      // 1. Generate 2 Ongoing live tests
      for (let i = 1; i <= 2; i++) {
        list.push({
          id: id++,
          exam: exam,
          status: "Ongoing",
          title: `${exam} CBT 1 - All India Live Mock Test ${i}`,
          closesIn: `Closes in ${i === 1 ? '6 hours' : '14 hours'}`,
          duration: "90 min",
          questions: "100 Qs",
          marks: "100 Marks",
          participants: `${10000 + (i * 4528)} registered`,
          languages: "English / Hindi",
          isFree: true
        });
      }

      // 2. Generate 2 Upcoming live tests
      for (let i = 1; i <= 2; i++) {
        list.push({
          id: id++,
          exam: exam,
          status: "Upcoming",
          title: `${exam} CBT 1 - All India Live Challenge Test ${i + 2}`,
          closesIn: `Starts in ${i === 1 ? '2 hr' : '18 hr'}`,
          duration: "90 min",
          questions: "100 Qs",
          marks: "100 Marks",
          participants: `${5000 + (i * 3241)}+ enrolled`,
          languages: "English / Hindi",
          isFree: true
        });
      }

      // 3. Generate 2 Completed live tests
      for (let i = 1; i <= 2; i++) {
        list.push({
          id: id++,
          exam: exam,
          status: "Completed",
          title: `${exam} CBT 1 - All India Live Mock Test ${i === 1 ? 'A' : 'B'}`,
          closesIn: `Ended ${i === 1 ? '1 day ago' : '3 days ago'}`,
          duration: "90 min",
          questions: "100 Qs",
          marks: "100 Marks",
          participants: `${15000 + (i * 6124)} takers`,
          languages: "English / Hindi",
          isFree: false,
          avgScore: `${55 + (i * 4.2)} Marks`
        });
      }
    });

    return list;
  };

  // Generate the database of 30 live tests
  const liveTests = useMemo(() => generateLiveTests(), []);

  // Filtering Logic
  const filteredLiveTests = useMemo(() => {
    return liveTests.filter(test => {
      const matchesCategory = selectedCategory === 'All' || test.exam === selectedCategory;
      const matchesStatus = selectedStatus === 'All' || test.status === selectedStatus;
      const matchesQuery = test.title.toLowerCase().includes(searchQuery.toLowerCase()) || test.exam.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [liveTests, selectedCategory, selectedStatus, searchQuery]);

  // Reset pagination on filter change
  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(6);
  };

  const handleStatusChange = (statusId: string) => {
    setSelectedStatus(statusId);
    setVisibleCount(6);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setVisibleCount(6);
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
            <Link href="/live-tests" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>Live Tests</Link>
            <span>/</span>
            <span style={{ color: '#fff', fontWeight: '600' }}>All India Live Challenges</span>
          </div>

          {/* Capsule Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 0.8rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.85rem', fontWeight: '600', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block', animation: 'pulse 1.5s infinite' }}></span> Live Competition Active
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '2.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '800' }}>
                All India <span style={{ color: '#facc15' }}>Live Mock Tests</span> | Real-time Rankings & Analysis
              </h1>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                Measure your preparation against thousands of real railway aspirants all over the country. Our live mock challenges replicate exact exam layouts and provide instant All India Rank (AIR), percentile scores, and dynamic accuracy reports.
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Ongoing and upcoming mock tests for RRB NTPC, Group D, ALP, RPF Constable, and JE are 100% free. Take the tests, receive performance diagnostics, and perfect your exam strategy.
              </p>
            </div>

            {/* Float Stats inside Hero on the right */}
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center', color: '#fff' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>150+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Live Mocks / Yr</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>50K+</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>Live Takers</p>
              </div>
              <div style={{ textAlign: 'center', color: '#fff', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '2.5rem', color: '#facc15', margin: '0 0 0.25rem 0', fontFamily: 'Outfit', fontWeight: '800' }}>₹0</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.85rem', margin: '0', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '600' }}>100% Free</p>
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

      {/* Explorer Section (Categories left, Cards right) */}
      <section className="section" style={{ backgroundColor: 'var(--surface)', padding: '5rem 0' }}>
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

              {/* Dynamic PrepGrind Sidebar Promotion Ad */}
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
                    PREPGRIND LIVE
                  </span>

                  <h5 style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: '800', 
                    fontFamily: 'Outfit', 
                    lineHeight: '1.3', 
                    marginBottom: '0.5rem',
                    color: '#fff'
                  }}>
                    All India Ranking
                  </h5>

                  <p style={{ 
                    fontSize: '0.75rem', 
                    color: 'rgba(255,255,255,0.9)', 
                    lineHeight: '1.4', 
                    marginBottom: '1rem' 
                  }}>
                    Attempt real-time active challenges and get ranked among lakhs of railway students.
                  </p>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.25rem', 
                    fontSize: '0.8rem', 
                    fontWeight: '700', 
                    color: '#facc15' 
                  }}>
                    <span>Register Now</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </a>

            </div>

            {/* Content Column (Right, 9 units wide on large screens) */}
            <div style={{ gridColumn: 'span 9' }} className="explorer-content">
              {/* Search & Status Filters */}
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
                    placeholder="Search live tests by exam name..." 
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
                    { id: 'All', name: 'All Live Tests' },
                    { id: 'Ongoing', name: 'Ongoing Mocks' },
                    { id: 'Upcoming', name: 'Upcoming Mocks' },
                    { id: 'Completed', name: 'Completed Mocks' }
                  ].map((tab) => (
                    <button 
                      key={tab.id}
                      className={`explorer-tab ${selectedStatus === tab.id ? 'active' : ''}`}
                      onClick={() => handleStatusChange(tab.id)}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Status Header */}
              <div style={{ marginBottom: '1.5rem', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                Showing <span style={{ color: 'var(--primary)' }}>{Math.min(filteredLiveTests.length, visibleCount)}</span> of <span style={{ color: 'var(--text-main)' }}>{filteredLiveTests.length}</span> live railway tests
              </div>

              {/* Grid of Live Mock Cards */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(285px, 1fr))', 
                gap: '1.5rem' 
              }}>
                {filteredLiveTests.slice(0, visibleCount).map((test) => (
                  <a 
                    href="https://prepgrind.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    key={test.id} 
                    style={{ 
                      backgroundColor: 'var(--surface)', 
                      border: '1px solid var(--border-color)', 
                      borderRadius: 'var(--radius-xl)', 
                      padding: '1.75rem', 
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
                      {/* Badge and Share Indicator */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
                          <span style={{ 
                            fontSize: '0.65rem', 
                            padding: '0.25rem 0.6rem', 
                            backgroundColor: test.status === 'Ongoing' ? 'rgba(239, 68, 68, 0.1)' : test.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(107, 114, 128, 0.1)', 
                            color: test.status === 'Ongoing' ? '#ef4444' : test.status === 'Upcoming' ? '#3b82f6' : '#6b7280', 
                            borderRadius: 'var(--radius-sm)', 
                            fontWeight: '800',
                            textTransform: 'uppercase',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.25rem'
                          }}>
                            {test.status === 'Ongoing' && (
                              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444', display: 'inline-block', animation: 'pulse 1s infinite' }}></span>
                            )}
                            {test.status}
                          </span>
                          {test.isFree && (
                            <span style={{ 
                              fontSize: '0.65rem', 
                              padding: '0.25rem 0.6rem', 
                              backgroundColor: '#def7ec', 
                              color: '#03543f', 
                              borderRadius: 'var(--radius-sm)', 
                              fontWeight: '800' 
                            }}>
                              FREE ENTRY
                            </span>
                          )}
                        </div>
                        <Share2 size={16} color="var(--text-muted)" style={{ flexShrink: 0 }} />
                      </div>

                      {/* Card Title */}
                      <h4 style={{ 
                        fontSize: '1.05rem', 
                        fontWeight: '800', 
                        lineHeight: '1.4', 
                        marginBottom: '1.25rem', 
                        color: 'var(--text-main)',
                        fontFamily: 'Outfit'
                      }}>
                        {test.title}
                      </h4>

                      {/* Ticking Timer/Info Banner */}
                      <div style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        backgroundColor: 'var(--bg-color)', 
                        border: '1px solid var(--border-color)',
                        borderRadius: 'var(--radius-md)', 
                        padding: '0.6rem 0.8rem', 
                        fontSize: '0.8rem', 
                        fontWeight: '700', 
                        color: test.status === 'Ongoing' ? '#d03801' : test.status === 'Upcoming' ? '#1e40af' : 'var(--text-muted)',
                        marginBottom: '1.25rem'
                      }}>
                        {test.status === 'Ongoing' ? (
                          <AlertCircle size={15} color="#d03801" />
                        ) : test.status === 'Upcoming' ? (
                          <Calendar size={15} color="#1e40af" />
                        ) : (
                          <Award size={15} color="var(--text-muted)" />
                        )}
                        <span>{test.closesIn}</span>
                      </div>

                      {/* Card Info Grid */}
                      <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: '1fr 1fr', 
                        gap: '0.8rem', 
                        marginBottom: '1.5rem',
                        borderBottom: '1px solid var(--border-color)',
                        paddingBottom: '1rem'
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

                      {/* Competitor count / stats row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.825rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                          <Users size={15} color="var(--primary)" />
                          <span>{test.participants}</span>
                        </div>
                        {test.status === 'Completed' && test.avgScore && (
                          <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>
                            Avg: <span style={{ color: 'var(--primary)' }}>{test.avgScore}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Dynamic Action Button */}
                    <div className="btn-primary" style={{ 
                      width: '100%', 
                      padding: '0.8rem', 
                      borderRadius: 'var(--radius-md)', 
                      fontWeight: '700', 
                      fontSize: '0.9rem',
                      textAlign: 'center',
                      backgroundColor: test.status === 'Ongoing' ? 'var(--primary)' : test.status === 'Upcoming' ? '#2563eb' : '#4b5563',
                      boxShadow: test.status === 'Ongoing' ? '0 4px 10px rgba(212, 83, 63, 0.15)' : 'none'
                    }}>
                      {test.status === 'Ongoing' ? 'Attempt Live Now' : test.status === 'Upcoming' ? 'Register for Free' : 'View Solutions'}
                    </div>
                  </a>
                ))}

                {filteredLiveTests.length === 0 && (
                  <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 2rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)' }}>
                    <BookOpen size={48} color="var(--primary)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
                    <h4 style={{ color: 'var(--text-main)', marginBottom: '0.5rem' }}>No Live Tests Found</h4>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '400px', margin: '0 auto' }}>
                      Try selecting a different exam category or active status tab.
                    </p>
                  </div>
                )}
              </div>

              {/* See More Expandable Button */}
              {filteredLiveTests.length > visibleCount && (
                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 6)}
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
                    See More
                  </button>
                </div>
              )}

              {/* Extra conversion note */}
              <div style={{ 
                textAlign: 'center', 
                marginTop: '4rem', 
                padding: '2.5rem 2rem', 
                backgroundColor: 'var(--primary-light)', 
                borderRadius: 'var(--radius-xl)',
                border: '1px solid rgba(212, 83, 63, 0.15)'
              }}>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '0.5rem', fontFamily: 'Outfit', fontWeight: '800' }}>
                  Want to practice at your own pace?
                </h4>
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto 1.5rem auto', lineHeight: '1.5', fontWeight: '500' }}>
                  Explore over 50,000+ solved practice sets, sectionals, and full mocks with bilingual support anytime on PrepGrind!
                </p>
                <Link 
                  href="/test-series" 
                  className="btn-primary"
                  style={{ textDecoration: 'none', padding: '0.75rem 1.75rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  Go to Test Series <ArrowRight size={16} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 1. Railgrind Live Tests: Detailed Info */}
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
              Live Challenges
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Railgrind Live Mock Ecosystem
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Participating in real-time online challenges is the ultimate reality check for your exam readiness. Our Live Test platform offers unique, time-bounded testing parameters designed to keep you ahead.
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
                <Clock size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                Global Scheduled Slots
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                Each live test operates on strict calendar slots. Ongoing mocks stay open for limited windows (usually 24-48 hours), ensuring everyone attempts under fresh parameters.
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
                <Users size={22} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'Outfit', marginBottom: '0.75rem', color: 'var(--text-main)' }}>
                All India Rankings
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                Instantly match your performance against 50,000+ candidates who take the tests simultaneously, generating precise All India percentiles and shift-wise standard curves.
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
                Zone-Wise Cutoff Analyses
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem', lineHeight: '1.6', margin: '0' }}>
                Compare your marks with specific regional board cutoffs (e.g. RRB Secunderabad, Mumbai, Ajmer) to get a hyper-realistic view of your placement chances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Railgrind Live Mocks */}
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
                National Competition
              </span>
              <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.25' }}>
                Why Attempt Railgrind Live Tests?
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Practicing offline or in isolated sheets will never prepare you for the psychological pressure of a real CBT timer. Railgrind Live Mocks offer the most authentic test atmosphere with detailed analytical comparisons.
              </p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0', listStyle: 'none', margin: '0 0 2rem 0' }}>
                {[
                  "Strict live time limits which simulate the stress of the actual exam hall.",
                  "Percentile analysis to measure your placement in real-time distributions.",
                  "Zero-latency scoreboards calculating rankings across zonal railway boards.",
                  "Detailed bilingual analysis with time-split diagnostics for each section."
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
                Register For Next Live Test <ArrowRight size={18} />
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
                Live Test Competition Stats
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    <span>Active Toppers Enrolled</span>
                    <span style={{ color: 'var(--primary)' }}>92.8%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '92.8%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    <span>Percentile Score Accuracy</span>
                    <span style={{ color: 'var(--primary)' }}>99.9%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '99.9%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>
                    <span>Post-Test Doubts Cleared</span>
                    <span style={{ color: 'var(--primary)' }}>95.4%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-color)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '95.4%', height: '100%', backgroundColor: 'var(--primary)', borderRadius: '4px' }}></div>
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
                  "I was scoring 72 in ALP, but the Live Test analysis showed I was taking 45 seconds on reasoning questions. Correcting that split pushed my final CBT score to 84!"
                </p>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '700', marginTop: '0.5rem' }}>
                  — Ramesh Chand, Selected in RRB ALP (Secunderabad Zone)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. How to Maximize Live Test Performance */}
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
              Live Mocks Guide
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
              How to Maximize Your Live Test Performance
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Treating a live mock like a casual practice sheet leads to poor evaluations. Follow this topper-recommended strategy to perform at your peak during active mock clocks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                step: "01",
                title: "Pre-Register Early",
                desc: "Check the 'Upcoming Mocks' list regularly and enroll in advance. Early registration gives you access to previous test trends and patterns."
              },
              {
                step: "02",
                title: "Login 5 Mins Before",
                desc: "Never start a live test with a rushed mindset. Open your browser, clear background processes, check your internet connectivity, and settle in."
              },
              {
                step: "03",
                title: "Attempt in Fast Waves",
                desc: "Do not get stuck on single complex equations. Attempt simple, factual questions first to build scoring confidence before circling back."
              },
              {
                step: "04",
                title: "Review Zonal Placement",
                desc: "Once completed mocks list opens, check solutions immediately. Map your zone rank carefully to determine if you clear regional cutoffs."
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
              Live Mocks FAQs
            </span>
            <h2 style={{ fontSize: '2.25rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1rem' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Everything you need to know about All India Live Mocks, timing slots, registration protocols, and bilingual solution sheets.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              {
                q: "When are the All India Live Tests held?",
                a: "All India Live challenges are typically scheduled every weekly cycle (usually starting Saturday morning at 10 AM and closing Sunday evening at 10 PM)."
              },
              {
                q: "Do I need to pay to participate in ongoing live tests?",
                a: "No! All active, ongoing All India Live Tests are 100% free of cost for all candidates. You only need a free registration on PrepGrind to attempt them."
              },
              {
                q: "What happens if my internet disconnects during a live mock test?",
                a: "For standard practice mocks you can pause, but since All India Live Mocks operate on strict synchronized clocks, the timer keeps ticking. Try to use a stable Wi-Fi or high-speed cellular backup during live attempts."
              },
              {
                q: "When can I view the solutions for a live mock test?",
                a: "Full step-by-step bilingual solutions and detailed zonal ranks are activated immediately after the mock test window ends globally (typically Sunday night)."
              },
              {
                q: "Can I re-attempt a live mock test once it is completed?",
                a: "You cannot re-attempt it in a 'live ranking' environment once submitted. However, the mock is permanently saved to your PrepGrind dashboard, allowing you to re-solve all questions as a practice set anytime."
              },
              {
                q: "What is the benefit of the 'Starts in 2 hr' countdown system?",
                a: "It gives you an immediate status report of upcoming live events, so you can plan your daily schedules and preparation runs around active mock windows."
              },
              {
                q: "Are the questions in Live Mocks different from the standard Test Series?",
                a: "Yes! Our live mocks feature highly-engineered, premium new questions designed from scratch by top educators, ensuring you encounter absolutely unique problems rather than repeated items."
              },
              {
                q: "How does Zone-Wise ranking help me evaluate my score?",
                a: "Since RRB applications are regional, a high rank in the Kolkata zone might clear cutoff while a similar score in Allahabad might not. Zonal filter statistics teach you exactly where your safe-zones lie."
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


