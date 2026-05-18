"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Search, 
  BookOpen, 
  Calendar, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight,
  Zap,
  Tag,
  X,
  User,
  Sparkles,
  Grid
} from "lucide-react";

import { fetchBlogs, BlogArticle } from "@/data/blogsFetcher";
import blogsData from "@/data/blogs.json";

const categories = ["All", "RRB NTPC", "RRB Group D", "RRB ALP", "RRB JE", "RPF Constable", "RPF SI"];

export default function BlogsClient() {
  const [articlesList, setArticlesList] = useState<BlogArticle[]>(blogsData as BlogArticle[]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sync state with dynamic Supabase API (falls back to local blogs.json if not configured)
  useEffect(() => {
    fetchBlogs()
      .then((data) => {
        setArticlesList(data);
      })
      .catch((err) => console.error("Error fetching dynamic blogs:", err));
  }, []);

  const latestArticles = articlesList.filter(article => article.isLatestFeatured);

  // Auto slide effect
  useEffect(() => {
    if (latestArticles.length === 0) return;
    const slideTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % latestArticles.length);
    }, 4500);
    return () => clearInterval(slideTimer);
  }, [latestArticles.length]);

  // Reset page when category or search is updated
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Filter strategy
  const filteredArticles = articlesList.filter(article => {
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Dynamic pagination offsetting for organic look
  const getPaginatedArticles = () => {
    if (selectedCategory !== "All" || searchQuery) {
      return filteredArticles;
    }
    const offset = (currentPage - 1) % 3;
    if (offset === 0) {
      return filteredArticles;
    } else if (offset === 1) {
      return [...filteredArticles.slice(4), ...filteredArticles.slice(0, 4)];
    } else {
      return [...filteredArticles.slice(8), ...filteredArticles.slice(0, 8)];
    }
  };

  const handlePageChange = (pageNum: number) => {
    if (pageNum < 1 || pageNum > 38) return;
    setCurrentPage(pageNum);
    
    // Smooth scroll back to strategy guides archive header
    const archiveHeader = document.getElementById("strategy-guides-archive");
    if (archiveHeader) {
      archiveHeader.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setCurrentPage(1);
  };

  const handleNextSlide = () => {
    if (latestArticles.length === 0) return;
    setCurrentSlide(prev => (prev + 1) % latestArticles.length);
  };

  const handlePrevSlide = () => {
    if (latestArticles.length === 0) return;
    setCurrentSlide(prev => (prev - 1 + latestArticles.length) % latestArticles.length);
  };

  // Recent Articles for top right (first 4 guides)
  const recentArticles = filteredArticles.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ textAlign: "left", padding: "5rem 0", position: "relative", overflow: "hidden" }}>
        <div className="hero-bg"></div>
        <div className="container">
          {/* Breadcrumbs */}
          <div style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <Link href="/" style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none" }}>Home</Link>
            <span>/</span>
            <span style={{ color: "#fff", fontWeight: "600" }}>Blogs</span>
          </div>

          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "rgba(255,255,255,0.1)", padding: "0.4rem 0.8rem", borderRadius: "var(--radius-xl)", color: "#fff", fontSize: "0.85rem", fontWeight: "600", marginBottom: "1.5rem", border: "1px solid rgba(255,255,255,0.15)" }}>
            <Zap size={14} color="#facc15" style={{ animation: "bounce 1s infinite" }} /> 100% Free Preparation & Board Advice
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "3rem", alignItems: "center" }}>
            <div>
              <h1 style={{ fontSize: "2.75rem", lineHeight: "1.2", marginBottom: "1.5rem", color: "#fff", fontFamily: "Outfit", fontWeight: "800" }}>
                RailGrind <span style={{ color: "#facc15" }}>Blogs & Strategies</span>
              </h1>
              <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "0" }}>
                Expert analytical guides, shift syllabus blueprints, visual fitness ocular charts, and quantitative shortcut strategies curated by senior Indian Railway instructors.
              </p>
            </div>
            
            {/* Quick Stats in Hero */}
            <div style={{ display: "flex", gap: "2.5rem", justifyContent: "flex-end", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center", color: "#fff" }}>
                <h3 style={{ fontSize: "2.5rem", color: "#facc15", margin: "0 0 0.25rem 0", fontFamily: "Outfit", fontWeight: "800" }}>12</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", margin: "0", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Expert Guides</p>
              </div>
              <div style={{ textAlign: "center", color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.2)", paddingLeft: "2.5rem" }}>
                <h3 style={{ fontSize: "2.5rem", color: "#facc15", margin: "0 0 0.25rem 0", fontFamily: "Outfit", fontWeight: "800" }}>50K+</h3>
                <p style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "0.85rem", margin: "0", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "600" }}>Monthly Readers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Blog Explorer section with Searchbar & Category Filter Tabs */}
      <section className="section" style={{ backgroundColor: "var(--bg-color)", padding: "4rem 0" }}>
        <div className="container">

          {/* Interactive Search Bar Section */}
          <div style={{ 
            maxWidth: "680px", 
            margin: "0 auto 3rem auto", 
            backgroundColor: "var(--surface)", 
            padding: "0.5rem 0.5rem 0.5rem 1.25rem", 
            borderRadius: "var(--radius-xl)", 
            border: "1px solid var(--border-color)", 
            boxShadow: "var(--shadow-md)",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            position: "relative"
          }}>
            <Search size={20} color="var(--primary)" style={{ flexShrink: 0 }} />
            <input 
              type="text" 
              placeholder="Search guides, exam strategies, eye test standards..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "1rem",
                color: "var(--text-main)",
                fontWeight: "600",
                backgroundColor: "transparent"
              }}
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                style={{ 
                  backgroundColor: "var(--primary-light)", 
                  border: "none", 
                  borderRadius: "50%", 
                  width: "28px", 
                  height: "28px", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  cursor: "pointer", 
                  color: "var(--primary)",
                  marginRight: "0.5rem"
                }}
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Category Filter Tabs */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            gap: "0.6rem", 
            flexWrap: "wrap", 
            marginBottom: "3.5rem" 
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`explorer-tab ${selectedCategory === cat ? "active" : ""}`}
                style={{
                  fontSize: "0.85rem",
                  padding: "0.6rem 1.25rem",
                  fontWeight: "800",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--border-color)",
                  transition: "all 0.3s ease",
                  fontFamily: "Outfit",
                  boxShadow: selectedCategory === cat ? "0 4px 12px rgba(212, 83, 63, 0.12)" : "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 1: Two Column Layout - Left (Latest Blogs Slider) | Right (Recent Strategy Guides) */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.8fr", gap: "2.5rem", alignItems: "flex-start", marginBottom: "5rem" }} className="grid-responsive">
            
            {/* LEFT COLUMN: Latest Blogs Carousel (Few) */}
            <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ borderBottom: "2px solid var(--border-color)", paddingBottom: "0.75rem", marginBottom: "0.5rem" }}>
                <h2 style={{ fontSize: "1.5rem", fontFamily: "Outfit", fontWeight: "850", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Latest Blogs <Sparkles size={18} color="#facc15" style={{ animation: "pulse 1.5s infinite" }} />
                </h2>
              </div>

              {/* Dynamic Sliding Carousel */}
              <div style={{ 
                position: "relative", 
                backgroundColor: "var(--surface)", 
                borderRadius: "var(--radius-xl)", 
                padding: "2.25rem", 
                border: "2px solid var(--primary-light)",
                boxShadow: "0 10px 25px rgba(212, 83, 63, 0.08)",
                overflow: "hidden",
                minHeight: "360px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                {/* Background decorative spotlight */}
                <div style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(212, 83, 63, 0.15) 0%, transparent 70%)",
                  pointerEvents: "none"
                }} />

                {/* Slides content mapping with smooth fading transition */}
                <div style={{ position: "relative", width: "100%" }}>
                  {latestArticles.map((article, idx) => {
                    if (idx !== currentSlide) return null;
                    return (
                      <div 
                        key={article.id} 
                        style={{ 
                          animation: "fadeIn 0.4s cubic-bezier(0.25, 1, 0.5, 1)", 
                          display: "flex", 
                          flexDirection: "column", 
                          gap: "1rem" 
                        }}
                      >
                        {/* Slide Indicator Tag */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <span style={{ 
                            fontSize: "0.7rem", 
                            fontWeight: "900", 
                            color: "#fff", 
                            textTransform: "uppercase", 
                            letterSpacing: "1px",
                            backgroundColor: "var(--primary)",
                            padding: "0.3rem 0.75rem",
                            borderRadius: "var(--radius-sm)",
                            boxShadow: "0 2px 6px rgba(212, 83, 63, 0.25)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.35rem"
                          }}>
                            <Sparkles size={11} /> Featured Latest
                          </span>
                          
                          <span style={{
                            fontSize: "0.75rem",
                            fontWeight: "800",
                            color: "var(--primary)"
                          }}>
                            {idx + 1} of {latestArticles.length}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{ 
                          fontSize: "1.25rem", 
                          fontWeight: "850", 
                          fontFamily: "Outfit", 
                          lineHeight: "1.35", 
                          color: "var(--text-main)",
                          marginTop: "0.5rem" 
                        }}>
                          {article.title}
                        </h3>

                        {/* Category & Date */}
                        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                          <span style={{ fontSize: "0.75rem", fontWeight: "750", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                            <Tag size={10} color="var(--primary)" /> {article.category}
                          </span>
                          <span style={{ fontSize: "0.75rem", fontWeight: "750", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                            <Calendar size={10} /> {article.date}
                          </span>
                        </div>

                        {/* Description Summary */}
                        <p style={{ 
                          color: "var(--text-muted)", 
                          fontSize: "0.85rem", 
                          lineHeight: "1.55",
                          margin: "0.5rem 0 1rem 0"
                        }}>
                          {article.summary}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Slider Footer controls: Dots & Next/Prev Arrows */}
                <div style={{ 
                  display: "flex", 
                  justifyContent: "space-between", 
                  alignItems: "center", 
                  borderTop: "1px solid var(--border-color)", 
                  paddingTop: "1.25rem",
                  marginTop: "1.5rem"
                }}>
                  {/* Left/Right Direction Arrows */}
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button 
                      onClick={handlePrevSlide}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-color)",
                        backgroundColor: "var(--surface)",
                        color: "var(--text-main)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      className="close-hover-effect"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button 
                      onClick={handleNextSlide}
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        border: "1px solid var(--border-color)",
                        backgroundColor: "var(--surface)",
                        color: "var(--text-main)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "all 0.2s ease"
                      }}
                      className="close-hover-effect"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  {/* Indicator Dot buttons */}
                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    {latestArticles.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        style={{
                          width: currentSlide === idx ? "24px" : "8px",
                          height: "8px",
                          borderRadius: "4px",
                          backgroundColor: currentSlide === idx ? "var(--primary)" : "var(--border-color)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease",
                          padding: 0
                        }}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Action Link */}
                  {latestArticles[currentSlide] && (
                    <Link 
                      href={`/blog/${latestArticles[currentSlide].id}`} 
                      className="card-link"
                      style={{ fontSize: "0.85rem", fontWeight: "800", display: "flex", alignItems: "center", gap: "0.25rem" }}
                    >
                      Read <ChevronRight size={14} />
                    </Link>
                  )}
                </div>
              </div>

              {/* Quick Preparation Mini Panel */}
              <div style={{
                backgroundColor: "var(--surface)",
                borderRadius: "var(--radius-xl)",
                padding: "2rem",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)"
              }}>
                <h4 style={{ fontSize: "1.1rem", fontFamily: "Outfit", fontWeight: "800", color: "var(--text-main)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <Zap size={16} color="var(--primary)" /> Top Revision Material
                </h4>
                <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: "1.5", marginBottom: "1rem" }}>
                  Gain free instant access to premium shift solved papers, study plans, and complete medical standard manuals.
                </p>
                <Link 
                  href="/study-material"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.4rem",
                    width: "100%",
                    padding: "0.6rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--primary-light)",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: "800",
                    fontSize: "0.8rem",
                    transition: "all 0.2s ease"
                  }}
                >
                  Browse Topper Vault <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Recent Strategy Guides (More Blogs) */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.75rem" }}>
                <h2 style={{ fontSize: "1.5rem", fontFamily: "Outfit", fontWeight: "850", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  Recent Strategy Guides <span style={{ fontSize: "0.85rem", fontWeight: "600", color: "var(--text-muted)", backgroundColor: "var(--border-color)", padding: "0.2rem 0.6rem", borderRadius: "10px" }}>{recentArticles.length}</span>
                </h2>
              </div>

              {recentArticles.length > 0 ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {recentArticles.map((article) => (
                    <div key={article.id} className="card" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid var(--border-color)" }}>
                      <div>
                        {/* Tags and Dates */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                          <span style={{ 
                            fontSize: "0.7rem", 
                            fontWeight: "850", 
                            color: "var(--primary)", 
                            textTransform: "uppercase", 
                            letterSpacing: "0.5px",
                            backgroundColor: "var(--primary-light)",
                            padding: "0.25rem 0.6rem",
                            borderRadius: "var(--radius-sm)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem"
                          }}>
                            <Tag size={9} /> {article.category}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.3rem", fontWeight: "600" }}>
                            <Calendar size={11} /> {article.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: "1.2rem", fontWeight: "800", fontFamily: "Outfit", lineHeight: "1.35", color: "var(--text-main)", marginBottom: "0.75rem" }}>
                          {article.title}
                        </h3>

                        {/* Summary */}
                        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.55", marginBottom: "1.25rem" }}>
                          {article.summary}
                        </p>
                      </div>

                      {/* Footer Info */}
                      <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.75rem" }}>
                        <div style={{ display: "flex", gap: "1.25rem" }}>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-main)", fontWeight: "750", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                            <User size={11} color="var(--primary)" /> {article.author}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                            <Clock size={11} /> {article.readTime}
                          </span>
                        </div>

                        <Link 
                          href={`/blog/${article.id}`}
                          className="card-link"
                          style={{ fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.35rem", fontWeight: "800" }}
                        >
                          Read Details <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                /* Empty Filter Search State */
                <div style={{ 
                  textAlign: "center", 
                  padding: "3rem 2rem", 
                  backgroundColor: "var(--surface)", 
                  border: "1px solid var(--border-color)", 
                  borderRadius: "var(--radius-xl)"
                }}>
                  <BookOpen size={38} color="var(--primary-light)" style={{ marginBottom: "1rem" }} />
                  <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", margin: 0 }}>No recent articles found matching your criteria.</p>
                </div>
              )}
            </div>

          </div>

          {/* Row 2: Full-Width Listing of Blogs & Pagination (Archive) */}
          <div style={{ marginTop: "4rem", borderTop: "2px solid var(--border-color)", paddingTop: "4rem" }} id="strategy-guides-archive">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "1.8rem", fontFamily: "Outfit", fontWeight: "850", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Grid size={24} color="var(--primary)" /> All Strategy Guides Archive 
                <span style={{ fontSize: "0.95rem", fontWeight: "600", color: "var(--text-muted)", backgroundColor: "var(--border-color)", padding: "0.25rem 0.75rem", borderRadius: "12px" }}>
                  {filteredArticles.length} total
                </span>
              </h2>
            </div>

            {filteredArticles.length > 0 ? (
              <>
                {/* 3-Column Responsive Grid for Archive Strategy Blogs */}
                <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
                  {getPaginatedArticles().map((article) => (
                    <div key={article.id} className="card" style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                      <div>
                        {/* Tags and Dates */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
                          <span style={{ 
                            fontSize: "0.7rem", 
                            fontWeight: "850", 
                            color: "var(--primary)", 
                            textTransform: "uppercase", 
                            letterSpacing: "0.5px",
                            backgroundColor: "var(--primary-light)",
                            padding: "0.3rem 0.7rem",
                            borderRadius: "var(--radius-sm)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.3rem"
                          }}>
                            <Tag size={10} /> {article.category}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "inline-flex", alignItems: "center", gap: "0.3rem", fontWeight: "600" }}>
                            <Calendar size={12} /> {article.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 style={{ fontSize: "1.25rem", fontWeight: "800", fontFamily: "Outfit", lineHeight: "1.35", color: "var(--text-main)", marginBottom: "1rem" }}>
                          {article.title}
                        </h3>

                        {/* Summary */}
                        <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: "1.55", marginBottom: "1.5rem" }}>
                          {article.summary}
                        </p>
                      </div>

                      {/* Footer Info */}
                      <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "1.25rem", marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-main)", fontWeight: "750", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                            <User size={12} color="var(--primary)" /> {article.author}
                          </span>
                          <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: "600", display: "inline-flex", alignItems: "center", gap: "0.3rem" }}>
                            <Clock size={12} /> {article.readTime}
                          </span>
                        </div>

                        <Link 
                          href={`/blog/${article.id}`}
                          className="card-link"
                          style={{ fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "0.35rem", fontWeight: "800" }}
                        >
                          Read Details <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* PREMIUM PAGINATION BAR */}
                <div style={{ 
                  display: "flex", 
                  flexDirection: "column", 
                  alignItems: "center", 
                  gap: "1.25rem", 
                  marginTop: "5rem",
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "3rem"
                }}>
                  <span style={{ 
                    fontSize: "0.95rem", 
                    color: "var(--text-muted)", 
                    fontWeight: "750", 
                    fontFamily: "Outfit" 
                  }}>
                    Showing page {currentPage} of 38 (454 total articles)
                  </span>
                  
                  <div style={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: "0.6rem",
                    flexWrap: "wrap",
                    justifyContent: "center"
                  }}>
                    {/* Previous button */}
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      style={{
                        padding: "0.65rem 1.3rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-color)",
                        backgroundColor: "var(--surface)",
                        color: currentPage === 1 ? "var(--text-muted)" : "var(--text-main)",
                        fontWeight: "800",
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                        fontSize: "0.85rem",
                        transition: "all 0.2s ease",
                        opacity: currentPage === 1 ? 0.5 : 1
                      }}
                    >
                      Previous
                    </button>

                    {/* Pages 1, 2, 3, 4, 5 */}
                    {[1, 2, 3, 4, 5].map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "var(--radius-md)",
                          border: "1px solid " + (currentPage === pageNum ? "var(--primary)" : "var(--border-color)"),
                          backgroundColor: currentPage === pageNum ? "var(--primary)" : "var(--surface)",
                          color: currentPage === pageNum ? "#fff" : "var(--text-main)",
                          fontWeight: "850",
                          cursor: "pointer",
                          fontSize: "0.95rem",
                          transition: "all 0.2s ease"
                        }}
                      >
                        {pageNum}
                      </button>
                    ))}

                    {/* Next button */}
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === 38}
                      style={{
                        padding: "0.65rem 1.3rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-color)",
                        backgroundColor: "var(--surface)",
                        color: currentPage === 38 ? "var(--text-muted)" : "var(--text-main)",
                        fontWeight: "800",
                        cursor: currentPage === 38 ? "not-allowed" : "pointer",
                        fontSize: "0.85rem",
                        transition: "all 0.2s ease",
                        opacity: currentPage === 38 ? 0.5 : 1
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Empty Filter Search State */
              <div style={{ 
                textAlign: "center", 
                padding: "4rem 2rem", 
                backgroundColor: "var(--surface)", 
                border: "1px solid var(--border-color)", 
                borderRadius: "var(--radius-xl)", 
                maxWidth: "600px",
                margin: "0 auto" 
              }}>
                <BookOpen size={48} color="var(--primary-light)" style={{ marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1.4rem", fontFamily: "Outfit", fontWeight: "850", color: "var(--text-main)", marginBottom: "0.5rem" }}>
                  No Strategy Guides Found
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.5", marginBottom: "1.5rem" }}>
                  We couldn't find any guides in the archive matching &ldquo;{searchQuery}&rdquo; for category tab &ldquo;{selectedCategory}&rdquo;.
                </p>
                <button 
                  onClick={clearFilters} 
                  className="btn-primary" 
                  style={{ padding: "0.6rem 1.5rem", fontSize: "0.85rem", gap: "0.5rem" }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>

          {/* Bottom simulated Mock Exams Promo CTA Card */}
          <div style={{ 
            textAlign: "center", 
            padding: "3.5rem 2.5rem", 
            backgroundColor: "var(--primary-light)", 
            borderRadius: "var(--radius-xl)", 
            border: "1px solid rgba(212, 83, 63, 0.15)",
            marginTop: "6rem"
          }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "0.75rem", fontFamily: "Outfit", fontWeight: "850" }}>
              Ready to Put These Strategies to Test?
            </h3>
            <p style={{ color: "var(--text-main)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto 2rem auto", lineHeight: "1.6", fontWeight: "600" }}>
              Don&apos;t just read! Practice standard, bilingual CBT simulated mocks, previous solved shift papers, and All India topper rankings on PrepGrind!
            </p>
            <a 
              href="https://prepgrind.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ textDecoration: "none", padding: "0.85rem 2.5rem", fontSize: "0.9rem", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
            >
              Start Practicing Free Mocks <ArrowRight size={16} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
