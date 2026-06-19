"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';

interface SeoPayload {
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  quickFacts: { label: string; value: string }[];
  bluf: string;
  sections: {
    heading: string;
    content: string[];
    listType?: 'ordered' | 'unordered';
    listItems?: string[];
    hasTable?: boolean;
    tableHeaders?: string[];
    tableData?: string[][];
    proTip?: string;
  }[];
  internalLinks: { text: string; url: string }[];
  faqs: { q: string; a: string }[];
}

export default function SeoContentRenderer({ payload }: { payload: SeoPayload }) {
  return (
    <article className="seo-article" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      
      {/* Title & BLUF Intro */}
      <div style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
        <h1 style={{ fontSize: '2rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
          {payload.primaryKeyword}
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: '1.8', fontWeight: '600' }}>
          {payload.bluf}
        </p>
      </div>

      {/* Quick Facts Snapshot Box */}
      <div style={{ 
        backgroundColor: 'var(--primary-light)', 
        border: '1px solid rgba(212, 83, 63, 0.2)', 
        borderRadius: 'var(--radius-lg)', 
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--primary)' }}></div>
        <h3 style={{ fontSize: '1.2rem', fontFamily: 'Outfit', fontWeight: '800', color: 'var(--primary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Info size={18} /> Quick Facts Snapshot
        </h3>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0, margin: 0 }}>
          {payload.quickFacts.map((fact, idx) => (
            <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-muted)', fontWeight: '700' }}>{fact.label}</span>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontWeight: '600' }}>{fact.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic Sections */}
      {payload.sections.map((section, idx) => (
        <section key={idx} style={{ backgroundColor: 'var(--surface)', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '1.6rem', fontFamily: 'Outfit', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            {section.heading}
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx} style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.75' }}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Ordered/Unordered Lists */}
          {section.listItems && (
            <div style={{ marginTop: '1.5rem', paddingLeft: '1rem' }}>
              {section.listType === 'ordered' ? (
                <ol style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {section.listItems.map((item, iIdx) => <li key={iIdx}><strong>Step {iIdx + 1}:</strong> {item}</li>)}
                </ol>
              ) : (
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', listStyle: 'none', padding: 0 }}>
                  {section.listItems.map((item, iIdx) => (
                    <li key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '0.15rem' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* Comparison Tables */}
          {section.hasTable && section.tableHeaders && section.tableData && (
            <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--bg-color)', borderBottom: '2px solid var(--border-color)' }}>
                    {section.tableHeaders.map((head, hIdx) => (
                      <th key={hIdx} style={{ padding: '1rem', textAlign: 'left', fontWeight: '800', fontSize: '0.85rem', color: 'var(--text-main)' }}>
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.tableData.map((row, rIdx) => (
                    <tr key={rIdx} style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: rIdx % 2 === 0 ? 'var(--surface)' : 'rgba(255,255,255,0.02)' }}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} style={{ padding: '1rem', fontSize: '0.9rem', fontWeight: cIdx === 0 ? '700' : '500', color: cIdx === 0 ? 'var(--text-main)' : 'var(--text-muted)' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Expert Pro Tip Blockquote */}
          {section.proTip && (
            <blockquote style={{ 
              marginTop: '2rem', 
              padding: '1.5rem', 
              backgroundColor: 'rgba(250, 204, 21, 0.1)', 
              borderLeft: '4px solid #facc15',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              margin: '2rem 0 0 0'
            }}>
              <strong style={{ display: 'block', color: '#b4900b', marginBottom: '0.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                &gt; Pro Tip:
              </strong>
              <span style={{ fontSize: '0.95rem', color: 'var(--text-main)', fontStyle: 'italic', lineHeight: '1.6' }}>
                {section.proTip}
              </span>
            </blockquote>
          )}
        </section>
      ))}

      {/* Internal Links Section */}
      <section style={{ backgroundColor: 'var(--bg-color)', padding: '2rem', borderRadius: 'var(--radius-xl)', border: '1px dashed var(--border-color)' }}>
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'Outfit', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.25rem' }}>
          Also Explore on Railgrind
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          {payload.internalLinks.map((link, idx) => (
            <Link key={idx} href={link.url} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between',
              padding: '1rem', 
              backgroundColor: 'var(--surface)', 
              borderRadius: 'var(--radius-md)', 
              textDecoration: 'none', 
              color: 'var(--primary)',
              fontWeight: '600',
              fontSize: '0.9rem',
              border: '1px solid var(--border-color)',
              transition: 'all 0.2s ease'
            }}
            className="card-hover-effect"
            >
              {link.text} <ArrowRight size={14} />
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontFamily: 'Outfit', fontWeight: '850', color: 'var(--text-main)', marginBottom: '2rem', textAlign: 'center' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {payload.faqs.map((faq, idx) => (
            <div key={idx} style={{ 
              backgroundColor: 'var(--surface)', 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-lg)', 
              border: '1px solid var(--border-color)'
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                Q: {faq.q}
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.65' }}>
                <strong>A:</strong> {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

    </article>
  );
}
