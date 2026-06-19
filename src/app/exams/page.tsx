import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Users, Briefcase, ChevronRight, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Railway Exams 2026 | Railgrind Directory',
  description: 'Complete directory of upcoming Indian Railway recruitment exams including RRB NTPC, Group D, ALP, JE, and RPF.',
};

export default function ExamsPage() {
  const examsList = [
    { 
      id: 'rrb-ntpc', 
      name: 'RRB NTPC', 
      desc: 'Non-Technical Popular Categories for Station Masters, Guards, and Clerks.',
      vacancies: '11,558',
      status: 'Live',
      applicants: '1.2Cr+'
    },
    { 
      id: 'rrb-group-d', 
      name: 'RRB Group D', 
      desc: 'Level 1 Track Maintainers, Assistants, and Helpers across all zones.',
      vacancies: '1,03,769',
      status: 'Upcoming',
      applicants: '1.8Cr+'
    },
    { 
      id: 'rrb-alp', 
      name: 'RRB ALP', 
      desc: 'Assistant Loco Pilot and Technician posts for running crew operations.',
      vacancies: '18,799',
      status: 'Live',
      applicants: '40L+'
    },
    { 
      id: 'rrb-je', 
      name: 'RRB JE', 
      desc: 'Junior Engineer recruitment across Civil, Electrical, and Mechanical.',
      vacancies: '7,951',
      status: 'Closed',
      applicants: '20L+'
    },
    { 
      id: 'rpf-si', 
      name: 'RPF Sub Inspector', 
      desc: 'Executive supervisory roles in the Railway Protection Force.',
      vacancies: '452',
      status: 'Live',
      applicants: '15L+'
    },
    { 
      id: 'rpf-constable', 
      name: 'RPF Constable', 
      desc: 'Railway station security and train escort protection units.',
      vacancies: '4,208',
      status: 'Live',
      applicants: '50L+'
    },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '6rem' }}>
      
      {/* Premium Hero Section */}
      <section className="hero" style={{ textAlign: 'center', padding: '6rem 1rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-bg"></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: 'var(--radius-xl)', color: '#fff', fontSize: '0.9rem', fontWeight: '700', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.15)' }}>
            <Zap size={14} color="#facc15" /> CEN 2026 Examination Cycles
          </div>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: '#fff', fontFamily: 'Outfit', fontWeight: '850', lineHeight: '1.2' }}>
            Railway Examination Directory
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', fontWeight: '500' }}>
            Select your target examination below to unlock the complete SEO-optimized data vault. We provide exhaustive details covering vacancies, official syllabus topics, previous year cut-offs, and step-by-step preparation roadmaps.
          </p>
        </div>
      </section>

      {/* Modern Grid Layout */}
      <section className="container" style={{ marginTop: '-3rem', position: 'relative', zIndex: 2 }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {examsList.map(exam => (
            <Link key={exam.id} href={`/${exam.id}/notification`} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden'
              }} className="card-hover-effect">
                
                {/* Status Badge */}
                <span style={{ 
                  position: 'absolute', 
                  top: '1.5rem', 
                  right: '1.5rem', 
                  fontSize: '0.75rem', 
                  fontWeight: '800', 
                  textTransform: 'uppercase', 
                  padding: '0.3rem 0.8rem', 
                  borderRadius: '20px',
                  backgroundColor: exam.status === 'Live' ? 'rgba(34, 197, 94, 0.1)' : exam.status === 'Upcoming' ? 'rgba(234, 179, 8, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  color: exam.status === 'Live' ? '#16a34a' : exam.status === 'Upcoming' ? '#ca8a04' : '#dc2626'
                }}>
                  {exam.status}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <BookOpen size={24} />
                  </div>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: '850', fontFamily: 'Outfit', color: 'var(--text-main)', margin: '0' }}>{exam.name}</h2>
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', flexGrow: 1, marginBottom: '2rem' }}>
                  {exam.desc}
                </p>

                {/* Stats Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Briefcase size={16} color="var(--primary)" />
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Vacancies</div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '800' }}>{exam.vacancies}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Users size={16} color="var(--primary)" />
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '700' }}>Applicants</div>
                      <div style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '800' }}>{exam.applicants}</div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                  <span>Access Exam Hub</span>
                  <ChevronRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
