"use client";

import Link from "next/link";
import { Train, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="logo">
          <Train size={28} />
          RailGrind
        </Link>
        
        {/* Mobile menu toggle */}
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className={`nav-menu ${isOpen ? "open" : ""}`}>
          <nav className="nav-links">
            <div className="dropdown">
              <Link href="/exams" className="nav-link" onClick={() => setIsOpen(false)}>Exams</Link>
              <div className="dropdown-content">
                <Link href="/rrb-ntpc" className="dropdown-item" onClick={() => setIsOpen(false)}>RRB NTPC</Link>
                <Link href="/rrb-group-d" className="dropdown-item" onClick={() => setIsOpen(false)}>RRB Group D</Link>
                <Link href="/rrb-alp" className="dropdown-item" onClick={() => setIsOpen(false)}>RRB ALP</Link>
                <Link href="/rpf-constable" className="dropdown-item" onClick={() => setIsOpen(false)}>RPF Constable</Link>
                <Link href="/rrb-je" className="dropdown-item" onClick={() => setIsOpen(false)}>RRB JE</Link>
                <Link href="/rpf-si" className="dropdown-item" onClick={() => setIsOpen(false)}>RPF SI</Link>
              </div>
            </div>
            <Link href="/test-series" className="nav-link" onClick={() => setIsOpen(false)}>Test Series</Link>
            <Link href="/live-tests" className="nav-link" onClick={() => setIsOpen(false)}>
              <span className="pulse-dot"></span>Live Tests
            </Link>
            <Link href="/study-material" className="nav-link" onClick={() => setIsOpen(false)}>Study Material</Link>
            <Link href="/blogs" className="nav-link" onClick={() => setIsOpen(false)}>Blogs</Link>
          </nav>
          
          <div className="nav-actions">
            <a href="https://app.prepgrind.com/register" target="_blank" rel="noopener noreferrer" className="btn-primary" onClick={() => setIsOpen(false)}>
              Join Railgrind
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
