import { Metadata } from 'next';
import { examMetadata } from '../examData';
import { generateSeoPayload } from '../../../utils/seoDataGenerator';
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
  const seoPayload = generateSeoPayload(activeExamId, subpage);

  return {
    title: seoPayload.metaTitle,
    description: seoPayload.metaDescription,
    keywords: seoPayload.secondaryKeywords.join(', ')
  };
}

export default async function ExamSubpageDetail({ params }: ParamsProps) {
  const resolvedParams = await params;
  const examId = resolvedParams.examId;
  const subpage = resolvedParams.subpage;

  // Fallback to rrb-ntpc database content if not found, or use the active exam id
  const activeExamId = examMetadata[examId] ? examId : 'rrb-ntpc';
  const activeExamStats = examMetadata[activeExamId];
  const seoPayload = generateSeoPayload(activeExamId, subpage);

  // Formatted title for displaying in breadcrumbs and header
  const examDisplayName = activeExamStats.name;

  // Generate JSON-LD Schemas
  const baseUrl = 'https://www.railgrind.in';
  const currentUrl = `${baseUrl}/${activeExamId}/${subpage}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": seoPayload.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": seoPayload.metaTitle,
    "description": seoPayload.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Railgrind Education"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Railgrind",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": currentUrl
    },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString()
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
      { "@type": "ListItem", "position": 2, "name": examDisplayName, "item": `${baseUrl}/${activeExamId}` },
      { "@type": "ListItem", "position": 3, "name": seoPayload.primaryKeyword, "item": currentUrl }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ExamSubpageClient 
        examId={activeExamId}
        subpage={subpage}
        examDisplayName={examDisplayName}
        activeExamStats={activeExamStats}
        seoPayload={seoPayload}
      />
    </>
  );
}
