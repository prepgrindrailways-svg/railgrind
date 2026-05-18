import { Metadata } from 'next';
import { examMetadata } from './examData';
import ExamBaseClient from './ExamBaseClient';

type ParamsProps = {
  params: Promise<{ examId: string }>;
};

export async function generateMetadata({ params }: ParamsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const examId = resolvedParams.examId;

  const activeExamId = examMetadata[examId] ? examId : 'rrb-ntpc';
  const meta = examMetadata[activeExamId];

  return {
    title: `${meta.name} 2026 Portal Hub | Official RailGrind`,
    description: `Complete deep-dive repository for the ${meta.fullName}. Browse dates, eligibility limits, ocular fitness matrices, solved shift papers, and simulated mock test packs.`
  };
}

export default async function ExamPortalHubPage({ params }: ParamsProps) {
  const resolvedParams = await params;
  const examId = resolvedParams.examId;

  // Fallback to rrb-ntpc database content if not found, or use the active exam id
  const activeExamId = examMetadata[examId] ? examId : 'rrb-ntpc';
  const activeExamStats = examMetadata[activeExamId];

  const examDisplayName = activeExamStats.name;

  return (
    <ExamBaseClient 
      examId={activeExamId}
      examDisplayName={examDisplayName}
      activeExamStats={activeExamStats}
    />
  );
}
