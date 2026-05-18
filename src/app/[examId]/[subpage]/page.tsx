import { Metadata } from 'next';
import { examMetadata, generateSubpageContent } from '../examData';
import ExamSubpageClient from './ExamSubpageClient';

type ParamsProps = {
  params: Promise<{ examId: string; subpage: string }>;
};

export async function generateMetadata({ params }: ParamsProps): Promise<Metadata> {
  const resolvedParams = await params;
  const examId = resolvedParams.examId;
  const subpage = resolvedParams.subpage;

  const activeExamId = examMetadata[examId] ? examId : 'rrb-ntpc';
  const meta = examMetadata[activeExamId];
  const pageTitle = subpage.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

  return {
    title: `${meta.name} ${pageTitle} | Official RailGrind Vault`,
    description: `Detailed informational guidelines regarding ${meta.name} ${pageTitle.toLowerCase()} recruitment updates. Check statistics, tables, and official patterns.`
  };
}

export default async function ExamSubpageDetail({ params }: ParamsProps) {
  const resolvedParams = await params;
  const examId = resolvedParams.examId;
  const subpage = resolvedParams.subpage;

  // Fallback to rrb-ntpc database content if not found, or use the active exam id
  const activeExamId = examMetadata[examId] ? examId : 'rrb-ntpc';
  const activeExamStats = examMetadata[activeExamId];
  const activeContent = generateSubpageContent(activeExamId, subpage);

  // Formatted title for displaying in breadcrumbs and header
  const examDisplayName = activeExamStats.name;

  return (
    <ExamSubpageClient 
      examId={activeExamId}
      subpage={subpage}
      examDisplayName={examDisplayName}
      activeExamStats={activeExamStats}
      activeContent={activeContent}
    />
  );
}
