const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'Exams', path: 'exams', desc: 'Detailed information on various railway exams like RRB NTPC, Group D, ALP.' },
  { name: 'Test Series', path: 'test-series', desc: 'Comprehensive test series for all railway exams.' },
  { name: 'Live Tests', path: 'live-tests', desc: 'Participate in live All India mock tests for real-time ranking.' },
  { name: 'Study Material', path: 'study-material', desc: 'Top-quality study material, notes, and PDFs for railway exams.' },
  { name: 'Previous Year Questions', path: 'pyqs', desc: 'Practice with previous year question papers for RRB exams.' },
  { name: 'Current Updates', path: 'current-updates', desc: 'Latest notifications, admit cards, and results for railway exams.' },
  { name: 'Blogs', path: 'blogs', desc: 'Expert strategies, tips, and articles on cracking railway exams.' },
  { name: 'Privacy Policy', path: 'privacy-policy', desc: 'Privacy policy for RailGrind users.' },
  { name: 'Help Centre', path: 'help-centre', desc: 'Get support and answers to your queries at the RailGrind Help Centre.' },
  { name: 'About Us', path: 'about-us', desc: 'Learn more about RailGrind and our mission to help you succeed.' }
];

const basePath = path.join(__dirname, 'src', 'app');

pages.forEach(p => {
  const dirPath = path.join(basePath, p.path);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  const content = `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${p.name} | RailGrind',
  description: '${p.desc}',
};

export default function ${p.name.replace(/\s+/g, '')}Page() {
  return (
    <div className="container section">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>${p.name}</h1>
      <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        ${p.desc}
      </p>
      
      <div className="card" style={{ padding: '3rem', textAlign: 'center', backgroundColor: 'var(--surface)' }}>
        <h2>Content Coming Soon</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>
          We are working hard to bring you the best ${p.name.toLowerCase()} for your railway exam preparation. Stay tuned!
        </p>
      </div>
    </div>
  );
}
`;

  fs.writeFileSync(path.join(dirPath, 'page.tsx'), content);
  console.log("Created", p.path);
});
