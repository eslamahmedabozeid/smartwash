"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade-in";
  duration?: number; // duration in milliseconds
  delay?: number; // delay in milliseconds
  threshold?: number; // intersection ratio to trigger
  once?: boolean; // whether to trigger only once
}

export default function ScrollReveal({
  children,
  className = "",
  variant = "fade-up",
  duration = 700,
  delay = 0,
  threshold = 0.1,
  once = true,
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        } else if (!once) {
          setIsRevealed(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px", // triggers slightly before entering viewport
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, once]);

  // Determine starting transform classes based on variant
  const getVariantStyles = () => {
    if (isRevealed) {
      return "opacity-100 translate-y-0 translate-x-0 scale-100";
    }

    switch (variant) {
      case "fade-up":
        return "opacity-0 translate-y-10";
      case "fade-down":
        return "opacity-0 -translate-y-10";
      case "fade-left":
        return "opacity-0 translate-x-10";
      case "fade-right":
        return "opacity-0 -translate-x-10";
      case "zoom-in":
        return "opacity-0 scale-95";
      case "fade-in":
      default:
        return "opacity-0";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${getVariantStyles()} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
