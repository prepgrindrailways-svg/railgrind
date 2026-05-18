import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Online Test Series & Mock Tests for Railway Exams | RailGrind',
  description: 'Practice with the best test series for RRB NTPC, Group D, ALP, RPF Constable, RPF SI, and RRB JE. Expertly designed mock tests with detailed analysis.',
};

export default function TestSeriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
