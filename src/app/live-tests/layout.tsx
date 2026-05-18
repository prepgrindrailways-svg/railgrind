import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All India Live Mock Tests & Rankings | RailGrind',
  description: 'Participate in live All India mock tests for RRB NTPC, Group D, ALP, Constable, and JE. Compete with thousands of aspirants and get real-time rankings.',
};

export default function LiveTestsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
