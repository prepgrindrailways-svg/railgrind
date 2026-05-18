import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Railway Exams | RailGrind',
  description: 'Detailed information on various railway exams like RRB NTPC, Group D, ALP.',
};

export default function ExamsPage() {
  const examsList = [
    { id: 'rrb-ntpc', name: 'RRB NTPC', desc: 'Non-Technical Popular Categories for various zonal railways and production units.' },
    { id: 'rrb-group-d', name: 'RRB Group D', desc: 'Level 1 posts in various departments of Indian Railways.' },
    { id: 'rrb-alp', name: 'RRB ALP', desc: 'Assistant Loco Pilot and Technician posts.' },
    { id: 'rrb-je', name: 'RRB JE', desc: 'Junior Engineer posts across different engineering domains.' },
    { id: 'rpf-si', name: 'RPF SI', desc: 'Sub Inspector posts in Railway Protection Force.' },
    { id: 'rpf-constable', name: 'RPF Constable', desc: 'Constable posts in Railway Protection Force.' },
  ];

  return (
    <div className="container section">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Railway Exams</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Select an exam below to view detailed information, syllabus, eligibility criteria, and preparation resources.
        </p>
      </div>
      
      <div className="grid">
        {examsList.map(exam => (
          <div key={exam.id} className="card">
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exam.name}</h2>
            <p style={{ color: 'var(--text-muted)', flexGrow: 1, marginBottom: '1.5rem' }}>{exam.desc}</p>
            <Link href={`/${exam.id}/notification`} className="card-link">
              View Details <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
