"use client";

import React, { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  isAr?: boolean;
  start?: boolean;
  speed?: number; // ms per character (English) or word (Arabic)
  delay?: number; // initial delay before starting typing (ms)
  onComplete?: () => void;
  className?: string;
  showCursor?: boolean;
}

export default function Typewriter({
  text,
  isAr = false,
  start = true,
  speed,
  delay = 0,
  onComplete,
  className = "",
  showCursor = true,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // Set default speeds: faster for characters, slightly slower for words
  const stepSpeed = speed !== undefined ? speed : isAr ? 350 : 80;

  // Use a ref for onComplete callback to avoid re-running the effect when the callback instance changes
  const onCompleteRef = React.useRef(onComplete);
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    if (!start) return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    // Split text into animation steps
    const steps: string[] = [];
    if (isAr) {
      // Word-by-word for Arabic to prevent disjointed isolated letters
      const words = text.split(/\s+/);
      for (let i = 1; i <= words.length; i++) {
        steps.push(words.slice(0, i).join(" "));
      }
    } else {
      // Character-by-character for English
      for (let i = 1; i <= text.length; i++) {
        steps.push(text.slice(0, i));
      }
    }

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      let currentStep = 0;

      if (steps.length === 0) {
        setIsFinished(true);
        setIsTyping(false);
        if (onCompleteRef.current) onCompleteRef.current();
        return;
      }

      setDisplayText(steps[0]);

      intervalId = setInterval(() => {
        currentStep++;
        if (currentStep < steps.length) {
          setDisplayText(steps[currentStep]);
        } else {
          clearInterval(intervalId);
          setIsFinished(true);
          setIsTyping(false);
          if (onCompleteRef.current) onCompleteRef.current();
        }
      }, stepSpeed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, isAr, start, stepSpeed, delay]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && isTyping && !isFinished && (
        <span className="inline-block w-[3px] h-[1em] bg-[#FF5500] ml-1 mr-1 animate-pulse vertical-middle align-middle" />
      )}
    </span>
  );
}
