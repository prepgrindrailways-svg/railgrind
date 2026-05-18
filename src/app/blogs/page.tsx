import { Metadata } from 'next';
import BlogsClient from './BlogsClient';

export const metadata: Metadata = {
  title: 'Official Railway Preparation Blogs & Guides | RailGrind',
  description: 'Access expert analysis, 6-month study blueprints, dynamic ocular visual standards charts, and math shortcuts curated by senior railway educators.',
};

export default function BlogsPage() {
  return (
    <BlogsClient />
  );
}
