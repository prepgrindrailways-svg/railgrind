import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | RailGrind',
  description: 'Learn more about RailGrind and our mission to help you succeed.',
};

export default function AboutUsPage() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>About Us</h1>
      <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Learn more about RailGrind and our mission to help you succeed.
      </p>
      
      <div className="card" style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--surface)' }}>
        <h2>Content Coming Soon</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
          We are working hard to bring you the best about us for your railway exam preparation. Stay tuned!
        </p>
      </div>
    </div>
  );
}
