"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export default function PromoPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Do not display on the homepage
    if (pathname === "/") {
      setIsOpen(false);
      return;
    }

    // Reset popup state to false when pathname changes (so it can trigger on the new page)
    setIsOpen(false);

    let triggered = false;

    const triggerPopup = () => {
      if (triggered) return;
      triggered = true;
      setIsOpen(true);
      window.removeEventListener("scroll", handleScroll);
    };

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const totalScrollableDistance = scrollHeight - clientHeight;
      
      // If the page is too short to scroll, require a tiny scroll gesture (15px) to show it
      if (totalScrollableDistance <= 50) {
        if (scrollTop > 15) {
          triggerPopup();
        }
        return;
      }

      const scrollPercentage = (scrollTop / totalScrollableDistance) * 100;

      // Trigger popup when scrolled past 40% and they have scrolled at least 30px
      if (scrollPercentage >= 40 && scrollTop > 30) {
        triggerPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      backdropFilter: "blur(8px)",
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1rem",
      animation: "fadeIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"
    }}>
      <div style={{
        backgroundColor: "transparent",
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        width: "100%",
        maxWidth: "420px",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
        position: "relative",
        animation: "slideUpScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Sleek Floating Close Button */}
        <button 
          onClick={closePopup}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "rgba(9, 10, 12, 0.75)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 100,
            transition: "all 0.25s ease"
          }}
          className="close-hover-effect"
          aria-label="Dismiss Promotion"
        >
          <X size={20} />
        </button>

        {/* The Entire Flyer Image is the Link */}
        <a 
          href="https://prepgrind.com" 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={closePopup}
          style={{ 
            display: "block", 
            width: "100%", 
            height: "100%", 
            cursor: "pointer",
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            border: "2px solid rgba(255, 255, 255, 0.15)"
          }}
        >
          <img 
            src="/promo-popup.jpg" 
            alt="PrepGrind Special Offer" 
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              maxHeight: "75vh", // Prevent clipping on smaller screens
              objectFit: "contain" // Maintains the flyer's perfect, uncropped proportions
            }}
          />
        </a>
      </div>
    </div>
  );
}
