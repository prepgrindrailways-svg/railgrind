import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

type ParamsProps = {
  params: Promise<{ examId: string; subpage: string }>;
};

export async function generateMetadata({ params }: ParamsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const examName = (resolvedParams.examId || '').replace(/-/g, ' ').toUpperCase();
  const subpageName = (resolvedParams.subpage || '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return {
    title: `${examName} ${subpageName} | RailGrind`,
    description: `Detailed ${subpageName.toLowerCase()} for the ${examName} railway exam.`,
  };
}

export default async function SubpageDetail({ params }: ParamsProps) {
  const resolvedParams = await params;
  const examName = (resolvedParams.examId || '').replace(/-/g, ' ').toUpperCase();
  const subpageName = (resolvedParams.subpage || '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return (
    <div className="container section">
      <Link href={`/exams/${resolvedParams.examId}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Back to {examName}
      </Link>
      
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>
        {examName} - {subpageName}
      </h1>
      
      <div className="card" style={{ marginTop: '2rem', padding: '3rem' }}>
        <h2>Information on {subpageName}</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem', lineHeight: '1.8' }}>
          This page contains detailed information about the {subpageName.toLowerCase()} for the {examName} exam. 
          Our experts regularly update this section to ensure you have the latest and most accurate information for your preparation.
        </p>
        
        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--bg-color)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Preparation Resources</h3>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>
            Boost your chances of success with PrepGrind's premium mock tests tailored specifically for the {examName}.
          </p>
          <a href="https://prepgrind.com/mock-tests" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Attempt {examName} Mocks
          </a>
        </div>
      </div>
    </div>
  );
}
