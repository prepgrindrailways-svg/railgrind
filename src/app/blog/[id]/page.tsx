"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  Zap, 
  ChevronRight, 
  Share2, 
  BookOpen,
  Printer,
  Sparkles
} from "lucide-react";
import { fetchBlogs, fetchBlogById, BlogArticle } from "@/data/blogsFetcher";
import fallbackBlogs from "@/data/blogs.json";

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [article, setArticle] = useState<BlogArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<BlogArticle[]>([]);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fetch article dynamically (falls back to blogs.json internally)
    fetchBlogById(id).then((found) => {
      if (found) {
        setArticle(found);
      }
    });

    // Fetch related articles dynamically
    fetchBlogs().then((all) => {
      let related = all.filter((b) => b.id !== id);
      
      // If there are fewer than 3 related articles from Supabase, fill the remaining with fallback blogs
      if (related.length < 3) {
        const fallbackList = (fallbackBlogs as BlogArticle[]).filter(
          (fb) => fb.id !== id && !related.some(r => r.id === fb.id)
        );
        related = [...related, ...fallbackList].slice(0, 3);
      }
      
      setRelatedArticles(related);
    });
  }, [id]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!article) {
    return (
      <div className="container section" style={{ textAlign: "center", padding: "6rem 2rem" }}>
        <BookOpen size={48} color="var(--primary)" style={{ marginBottom: "1.5rem" }} />
        <h2 style={{ fontSize: "2rem", fontFamily: "Outfit", fontWeight: "850", color: "var(--text-main)", marginBottom: "1rem" }}>
          Strategy Guide Not Found
        </h2>
        <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem auto" }}>
          The article you are looking for does not exist or has been relocated to another preparation category.
        </p>
        <Link href="/blogs" className="btn-primary" style={{ textDecoration: "none" }}>
          <ArrowLeft size={16} /> Back to Strategy Explorer
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#fbf7f7", minHeight: "100vh", padding: "3rem 0" }}>
      <div className="container">
        
        {/* Breadcrumbs & Navigation */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2.5rem" 
        }}>
          <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ textDecoration: "none", color: "var(--text-muted)", fontWeight: "600" }}>Home</Link>
            <span>/</span>
            <Link href="/blogs" style={{ textDecoration: "none", color: "var(--text-muted)", fontWeight: "600" }}>Blogs</Link>
            <span>/</span>
            <span style={{ color: "var(--primary)", fontWeight: "700" }}>{article.category}</span>
          </div>

          <Link 
            href="/blogs" 
            style={{ 
              fontSize: "0.9rem", 
              fontWeight: "800", 
              color: "var(--primary)", 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "0.4rem" 
            }}
          >
            <ArrowLeft size={16} /> Back to Strategy Explorer
          </Link>
        </div>

        {/* Two-Column Detail Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "0.75fr 2.25fr", gap: "3rem", alignItems: "flex-start" }} className="grid-responsive">
          
          {/* LEFT COLUMN: Sidebar (Mocks Promo + Related + Stats) */}
          <aside style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* High-Converting CBT Practice Promo Widget */}
            <div style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #a83c2c 100%)",
              borderRadius: "var(--radius-xl)",
              padding: "2.5rem 2rem",
              color: "#fff",
              border: "1px solid var(--border-color)",
              boxShadow: "0 10px 25px rgba(212, 83, 63, 0.15)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* decorative shine */}
              <div style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)"
              }} />

              <Sparkles size={32} color="#facc15" style={{ margin: "0 auto 1rem auto", animation: "bounce 1s infinite" }} />
              
              <h3 style={{ fontSize: "1.35rem", color: "#fff", fontFamily: "Outfit", fontWeight: "850", marginBottom: "0.75rem", lineHeight: "1.3" }}>
                Supercharge Your Zonal Score!
              </h3>
              
              <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.9)", lineHeight: "1.5", marginBottom: "2rem", fontWeight: "600" }}>
                Unlock high-quality bilingual mock tests, solved shift question databases, and direct diagnostic tools on PrepGrind!
              </p>

              <a 
                href="https://prepgrind.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ 
                  backgroundColor: "#fff", 
                  color: "var(--primary)", 
                  textDecoration: "none", 
                  fontWeight: "850",
                  padding: "0.85rem 1.75rem",
                  width: "100%",
                  justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                }}
              >
                Start Practicing mock packs <ChevronRight size={16} />
              </a>
            </div>

            {/* Recent & Related Articles list */}
            <div style={{
              backgroundColor: "#fff",
              borderRadius: "var(--radius-xl)",
              padding: "2rem",
              border: "1px solid var(--border-color)",
              boxShadow: "var(--shadow-sm)"
            }}>
              <h3 style={{ fontSize: "1.1rem", fontFamily: "Outfit", fontWeight: "800", color: "var(--text-main)", marginBottom: "1.25rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                More Preparation Strategies
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {relatedArticles.map((rel) => (
                  <Link 
                    key={rel.id} 
                    href={`/blog/${rel.id}`}
                    style={{ textDecoration: "none", display: "block" }}
                    className="card-hover-effect"
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      <span style={{ fontSize: "0.65rem", fontWeight: "850", color: "var(--primary)", textTransform: "uppercase" }}>
                        {rel.category}
                      </span>
                      <h4 style={{ fontSize: "0.9rem", fontWeight: "750", lineHeight: "1.35", color: "var(--text-main)", margin: 0, transition: "color 0.2s ease" }}>
                        {rel.title}
                      </h4>
                      <span style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                        {rel.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Zonal Disclaimer */}
            <div style={{
              backgroundColor: "rgba(212, 83, 63, 0.03)",
              border: "1.5px dashed var(--border-color)",
              borderRadius: "var(--radius-xl)",
              padding: "1.5rem"
            }}>
              <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", marginBottom: "0.5rem", color: "var(--primary)", fontWeight: "800", fontSize: "0.85rem" }}>
                <Zap size={14} /> Official Board Notice
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: "1.4", margin: 0, fontWeight: "600" }}>
                All mock examinations and diagnostic criteria are simulated according to previous official RRB papers. Candidates are advised to crosscheck physical criteria directly on rrbbcd.gov.in.
              </p>
            </div>

          </aside>

          {/* RIGHT COLUMN: Main Blog Post Content */}
          <article style={{ 
            backgroundColor: "#fff", 
            padding: "3.5rem 3rem", 
            borderRadius: "var(--radius-xl)", 
            border: "1px solid var(--border-color)",
            boxShadow: "var(--shadow-md)"
          }}>
            {/* Meta Tags */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
              <span style={{ 
                fontSize: "0.75rem", 
                fontWeight: "900", 
                color: "var(--primary)", 
                textTransform: "uppercase", 
                letterSpacing: "0.75px",
                backgroundColor: "var(--primary-light)",
                padding: "0.35rem 0.8rem",
                borderRadius: "var(--radius-sm)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem"
              }}>
                <Tag size={10} /> {article.category}
              </span>

              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button 
                  onClick={handleShare}
                  style={{
                    backgroundColor: "#faf7f7",
                    border: "1px solid var(--border-color)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--text-main)",
                    transition: "all 0.2s ease"
                  }}
                  title="Copy share link"
                  className="close-hover-effect"
                >
                  <Share2 size={14} />
                </button>
                <button 
                  onClick={() => typeof window !== "undefined" && window.print()}
                  style={{
                    backgroundColor: "#faf7f7",
                    border: "1px solid var(--border-color)",
                    borderRadius: "50%",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "var(--text-main)",
                    transition: "all 0.2s ease"
                  }}
                  title="Print Strategy Sheet"
                  className="close-hover-effect"
                >
                  <Printer size={14} />
                </button>
              </div>
            </div>

            {copied && (
              <div style={{
                backgroundColor: "#ecfdf5",
                color: "#065f46",
                padding: "0.75rem 1.25rem",
                borderRadius: "8px",
                border: "1px solid #10b981",
                fontSize: "0.85rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
                animation: "fadeIn 0.2s ease"
              }}>
                ✓ Article link successfully copied to clipboard!
              </div>
            )}

            {/* Title */}
            <h1 style={{ 
              fontSize: "2.25rem", 
              fontWeight: "900", 
              fontFamily: "Outfit", 
              color: "var(--text-main)", 
              lineHeight: "1.25", 
              marginBottom: "1.25rem" 
            }}>
              {article.title}
            </h1>

            {/* Writer info & read stats */}
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "1.5rem", 
              flexWrap: "wrap",
              color: "var(--text-muted)", 
              fontSize: "0.85rem", 
              fontWeight: "650",
              borderBottom: "1px solid var(--border-color)",
              paddingBottom: "1.5rem",
              marginBottom: "2rem"
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", color: "var(--text-main)", fontWeight: "750" }}>
                <User size={14} color="var(--primary)" /> {article.author}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                <Calendar size={14} /> Published {article.date}
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
                <Clock size={14} /> {article.readTime}
              </span>
            </div>

            {/* Introduction Card summary */}
            {article.summary && (
              <p style={{ 
                fontSize: "1.05rem", 
                lineHeight: "1.65", 
                color: "var(--text-muted)",
                fontStyle: "italic",
                borderLeft: "4px solid var(--primary)",
                paddingLeft: "1.25rem",
                marginBottom: "2.5rem",
                fontWeight: "600"
              }}>
                {article.summary}
              </p>
            )}

            {/* Rich HTML markup render block */}
            <div 
              className="sbi-po-reasoning-guide"
              dangerouslySetInnerHTML={{ __html: article.content }} 
            />

          </article>

        </div>

      </div>
    </div>
  );
}
