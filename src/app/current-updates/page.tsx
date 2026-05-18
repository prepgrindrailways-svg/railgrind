import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Current Updates | RailGrind',
  description: 'Latest notifications, admit cards, and results for railway exams.',
};

export default function CurrentUpdatesPage() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>Current Updates</h1>
      <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Latest notifications, admit cards, and results for railway exams.
      </p>
      
      <div className="card" style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--surface)' }}>
        <h2>Content Coming Soon</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
          We are working hard to bring you the best current updates for your railway exam preparation. Stay tuned!
        </p>
      </div>
    </div>
  );
}
