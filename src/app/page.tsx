import Link from "next/link";
import { BookOpen, FileText, MonitorPlay, PenTool, LayoutList, Flame, ArrowRight, BellRing, Calendar, Quote, Users, Trophy, Award, Star } from "lucide-react";
import Marquee from "@/components/Marquee";

export default function Home() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PrepGrind",
    "alternateName": "PrepGrind AI",
    "image": "https://prepgrind.com/logo.png",
    "url": "https://prepgrind.com",
    "telephone": "9325216364",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Makhmalabad road, Panchavati, Nashik",
      "addressLocality": "Nashik",
      "postalCode": "422003",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.9975,
      "longitude": 73.7898
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:30",
      "closes": "18:30"
    }
  };

  const productSchema = {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "Free SSC, Banking & Railway Mock Test to Achieve Top Rank - PrepGrind",
    "url": "https://prepgrind.com",
    "image": "https://prepgrind.com/logo.png",
    "sameAs": ["https://twitter.com/prepgrind", "https://facebook.com/prepgrind", "https://youtube.com/prepgrind"],
    "description": "PrepGrind's Free AI-powered mock tests to help you rank among toppers. Practice with the most accurate AI-scored mock tests online.",
    "sku": "PG-001",
    "brand": { "name": "PrepGrind" },
    "review": {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "4.8", "bestRating": "5.0" },
      "author": { "@type": "Person", "name": "PrepGrind Team" }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5.0",
      "reviewCount": "15420"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PrepGrind",
    "url": "https://prepgrind.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://prepgrind.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      {/* SEO Structured JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <h1>Your Ultimate Guide to<br />Railway Exam Success</h1>
          <p>
            The definitive single spot for all your railway exam needs. Discover the latest updates, read expert blogs and preparation tips, and supercharge your ranking with full-length mock exams, sectional practice tests, and premium study materials.
          </p>
          <div className="hero-actions">
            <Link href="/exams" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
              Explore Exams
            </Link>
            <a href="https://prepgrind.com" target="_blank" rel="noopener noreferrer" className="btn-secondary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
              Start Preparation <ArrowRight size={20} />
            </a>
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

      <section className="section" style={{ padding: '3.5rem 0', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Users size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>1 Lac+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Students Enrolled</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Trophy size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>25,000+</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Total Selections</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Award size={40} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>Exam Wise</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Dedicated Preparation</p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.75rem', color: '#f59e0b', gap: '0.2rem' }}>
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
                <Star fill="#f59e0b" size={36} />
              </div>
              <h3 style={{ fontSize: '2.5rem', margin: '0', color: 'var(--text-main)', fontFamily: 'Outfit' }}>4.9/5</h3>
              <p style={{ color: 'var(--text-muted)', fontWeight: '600', fontSize: '1.1rem' }}>Student Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Popular Railway Exams</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Select an exam below to explore syllabus, eligibility, and preparation guides.
            </p>
          </div>
          
          <Marquee>
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>RRB NTPC</h3>
              <p>Non-Technical Popular Categories for various zonal railways.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>35,000+ Vacancies</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>12th / Grad</span>
              </div>
              <Link href="/rrb-ntpc" className="card-link">View Details <ArrowRight size={16} /></Link>
            </div>
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>RRB Group D</h3>
              <p>Level 1 posts in various departments of Indian Railways.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>1,00,000+ Vacancies</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>10th / ITI</span>
              </div>
              <Link href="/rrb-group-d" className="card-link">View Details <ArrowRight size={16} /></Link>
            </div>
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>RRB ALP</h3>
              <p>Assistant Loco Pilot and Technician posts across zones.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>CBT 1 & 2</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>Tech / Engg</span>
              </div>
              <Link href="/rrb-alp" className="card-link">View Details <ArrowRight size={16} /></Link>
            </div>
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>RPF Constable</h3>
              <p>Constable posts in Railway Protection Force.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>Physical Test</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>10th Pass</span>
              </div>
              <Link href="/rpf-constable" className="card-link">View Details <ArrowRight size={16} /></Link>
            </div>
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>RRB JE</h3>
              <p>Junior Engineer posts across different engineering domains.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>High Salary</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>Diploma / B.Tech</span>
              </div>
              <Link href="/rrb-je" className="card-link">View Details <ArrowRight size={16} /></Link>
            </div>
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>RPF SI</h3>
              <p>Sub Inspector posts in Railway Protection Force.</p>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--primary)', fontWeight: '600' }}>Officer Grade</span>
                <span style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontWeight: '600' }}>Graduate</span>
              </div>
              <Link href="/rpf-si" className="card-link">View Details <ArrowRight size={16} /></Link>
            </div>
          </Marquee>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Resources We Provide</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              A complete toolkit to master your railway exams, from mock tests to expert blogs.
            </p>
          </div>
          
          <Marquee>
            <div className="card">
              <div className="card-icon"><FileText size={24} /></div>
              <h3>Test Series</h3>
              <p style={{ marginBottom: '0.75rem' }}>Sectional and full-length test series to evaluate your preparation level accurately.</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Detailed solutions & analytics</li>
                <li>Latest exam pattern based</li>
              </ul>
              <Link href="/test-series" className="card-link">Practice Now <ArrowRight size={16} /></Link>
            </div>

            <div className="card">
              <div className="card-icon"><MonitorPlay size={24} /></div>
              <h3>Live Tests</h3>
              <p style={{ marginBottom: '0.75rem' }}>Participate in All India Live Tests and compete with thousands of aspirants in real-time.</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>All India Rank & Percentile</li>
                <li>Real exam environment</li>
              </ul>
              <Link href="/live-tests" className="card-link">Join Live Test <ArrowRight size={16} /></Link>
            </div>

            <div className="card">
              <div className="card-icon"><BookOpen size={24} /></div>
              <h3>Study Material</h3>
              <p style={{ marginBottom: '0.75rem' }}>High-quality, curated study notes and PDFs covering all subjects comprehensively.</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Downloadable PDFs</li>
                <li>Topic-wise formula sheets</li>
              </ul>
              <Link href="/study-material" className="card-link">Get Materials <ArrowRight size={16} /></Link>
            </div>

            <div className="card">
              <div className="card-icon"><Flame size={24} /></div>
              <h3>Previous Year Questions</h3>
              <p style={{ marginBottom: '0.75rem' }}>Practice with previous year questions to keep you ahead of the curve.</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Shift-wise real papers</li>
                <li>Subject-wise breakdown</li>
              </ul>
              <Link href="/pyqs" className="card-link">Explore PYQs <ArrowRight size={16} /></Link>
            </div>
            
            <div className="card">
              <div className="card-icon"><PenTool size={24} /></div>
              <h3>Expert Blogs</h3>
              <p style={{ marginBottom: '0.75rem' }}>Strategies, tips, and insights from toppers to help you crack the exams with high ranks.</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Topper interviews</li>
                <li>Time management tips</li>
              </ul>
              <Link href="/blogs" className="card-link">Read Blogs <ArrowRight size={16} /></Link>
            </div>
            
            <div className="card">
              <div className="card-icon"><LayoutList size={24} /></div>
              <h3>Current Updates</h3>
              <p style={{ marginBottom: '0.75rem' }}>Stay informed with the latest notifications, admit cards, and results.</p>
              <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                <li>Instant notifications</li>
                <li>Exam date announcements</li>
              </ul>
              <Link href="/current-updates" className="card-link">View Updates <ArrowRight size={16} /></Link>
            </div>
          </Marquee>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <BellRing color="var(--primary)" size={32} />
              Latest Notifications & Updates
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Stay updated with the latest news, exam dates, and official announcements from RRB and RPF.
            </p>
          </div>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { date: "May 12, 2026", title: "RRB NTPC 2026 Official Notification Released for 35,000+ Vacancies.", badge: "New" },
              { date: "April 28, 2026", title: "RPF Constable Admit Card 2026 Download Link Activated.", badge: "Admit Card" },
              { date: "April 15, 2026", title: "RRB Group D Exam Dates 2026 Announced. Exams start from July.", badge: "Exam Date" },
              { date: "March 22, 2026", title: "RRB ALP CBT 1 Results Declared. Check your scorecard now.", badge: "Result" }
            ].map((update, index) => (
              <a href="https://indianrailways.gov.in/" target="_blank" rel="noopener noreferrer" key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                flexWrap: 'nowrap',
                gap: '1rem',
                padding: '1.25rem 1.5rem', 
                backgroundColor: 'var(--bg-color)', 
                border: '1px solid var(--border-color)', 
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-sm)',
                textDecoration: 'none',
                overflow: 'hidden'
              }}
              className="card-hover-effect"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'nowrap', overflow: 'hidden', flexGrow: 1 }}>
                  <div style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.875rem', fontWeight: '600', minWidth: '120px', flexShrink: 0 }}>
                    <Calendar size={16} /> {update.date}
                  </div>
                  <div style={{ fontWeight: '500', color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {update.title}
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: update.badge === 'New' ? '#ef4444' : 'var(--primary-light)', 
                    color: update.badge === 'New' ? 'white' : 'var(--primary)', 
                    borderRadius: '999px', 
                    fontWeight: '700' 
                  }}>
                    {update.badge}
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/current-updates" className="btn-secondary">View All Updates <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="section pattern-dots">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Success Stories</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Hear from our top achievers who cracked their dream railway exams using our platform.
            </p>
          </div>
          
          <Marquee>
            {[
              { name: "Rahul Sharma", exam: "RRB NTPC 2024", text: "The test series provided exact exam-like questions which boosted my confidence immensely. Secured AIR 124!" },
              { name: "Priya Singh", exam: "RRB Group D", text: "The study materials were crisp and the live tests helped me manage my time perfectly during the real exam." },
              { name: "Amit Kumar", exam: "RRB ALP", text: "Sectional mocks were a game changer. I could identify my weak areas in Technical section and improve." },
              { name: "Neha Gupta", exam: "RPF Constable", text: "Regular PYQs practice on PrepGrind made the final exam feel like just another mock test. Highly recommended!" }
            ].map((story, index) => (
              <div key={index} className="card" style={{ padding: '2rem', minHeight: '220px' }}>
                <Quote size={32} color="var(--primary-light)" style={{ marginBottom: '1rem' }} />
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>"{story.text}"</p>
                <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: '700', color: 'var(--primary)' }}>{story.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>Cleared {story.exam}</div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: 'var(--primary-light)', padding: '4rem 2rem', borderRadius: 'var(--radius-xl)' }}>
            <h2 style={{ color: 'var(--primary)' }}>Ready to accelerate your preparation?</h2>
            <p style={{ color: 'var(--text-main)', maxWidth: '600px', margin: '1rem auto 2rem', fontSize: '1.125rem' }}>
              Take the next step towards your dream railway job. Practice with the most authentic mock tests on PrepGrind.
            </p>
            <a href="https://prepgrind.com" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1.125rem' }}>
              Visit PrepGrind.com
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-color)', borderTop: '1px solid var(--border-color)', paddingBottom: '5rem' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Got questions? We've got answers. Explore our comprehensive FAQs to clear your doubts about Railway Exams and PrepGrind.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {[
              {
                q: "What is the age limit for RRB NTPC exams?",
                a: "Typically, it is 18 to 30 years for undergraduate posts and 18 to 33 years for graduate posts. There are age relaxations for OBC (3 years), SC/ST (5 years), and other reserved categories as per government norms."
              },
              {
                q: "Can a 12th pass candidate apply for RRB NTPC?",
                a: "Yes! Several popular posts under RRB NTPC such as Junior Clerk cum Typist, Accounts Clerk cum Typist, Junior Time Keeper, Trains Clerk, and Commercial cum Ticket Clerk only require a 12th standard pass qualification."
              },
              {
                q: "What is the educational qualification required for RRB Group D?",
                a: "Candidates must have cleared 10th standard (Matriculation) or possess an ITI credential from an institution recognized by NCVT/SCVT, or hold a National Apprenticeship Certificate (NAC) granted by NCVT."
              },
              {
                q: "Is there any negative marking in RRB exams?",
                a: "Yes, there is negative marking in most RRB exams (NTPC, Group D, ALP, JE). For every incorrect answer, 1/3rd (0.33) of the marks assigned to that question will be deducted."
              },
              {
                q: "How many stages are there in the RRB ALP recruitment process?",
                a: "The Assistant Loco Pilot (ALP) recruitment consists of 5 stages: First Stage CBT (CBT 1), Second Stage CBT (CBT 2), Computer-Based Aptitude Test (CBAT), Document Verification (DV), and a comprehensive Medical Examination."
              },
              {
                q: "What is the exam syllabus and pattern for RPF Constable?",
                a: "The RPF Constable exam consists of 120 multiple-choice questions to be completed in 90 minutes. It tests three subjects: General Awareness (50 questions), Arithmetic (35 questions), and General Intelligence & Reasoning (35 questions)."
              },
              {
                q: "Is the RRB JE exam held in offline mode?",
                a: "No, the Junior Engineer (JE) exam, like all major modern Railway exams, is conducted entirely online as a Computer-Based Test (CBT)."
              },
              {
                q: "What physical standards are required for RPF SI (Sub Inspector)?",
                a: "For General/OBC males, the minimum height required is 165 cm (chest 80 cm unexpanded, 85 cm expanded). For females, the minimum height is 157 cm. There are relaxations for SC/ST and hill area candidates."
              },
              {
                q: "How and when can I download the Railway Exam admit card?",
                a: "Admit cards are generally released on the official regional RRB websites exactly 4 days before your scheduled exam date. You will need your registration number and password/date of birth to download it."
              },
              {
                q: "How many regional RRBs are there and which one should I apply to?",
                a: "There are 21 regional Railway Recruitment Boards (like RRB Chandigarh, RRB Mumbai, RRB Bangalore, etc.). You can apply to only one RRB for a specific notification. It is recommended to choose based on vacancy distributions and your regional preference."
              },
              {
                q: "Can I change my chosen exam language after submitting the application form?",
                a: "No, the medium of exam chosen during the application submission is final and cannot be modified. However, questions are typically visible in English as well as your selected regional language during the CBT."
              },
              {
                q: "How does PrepGrind help in cracking Railway Exams?",
                a: "PrepGrind offers a comprehensive preparation ecosystem: high-quality full-length mock tests based on the latest patterns, sectional tests, downloadable study PDFs, All India live tests with accurate percentile rankings, and shift-wise PYQ practices."
              }
            ].map((faq, idx) => (
              <details key={idx} className="faq-details">
                <summary className="faq-summary">
                  {faq.q}
                </summary>
                <div className="faq-content">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
