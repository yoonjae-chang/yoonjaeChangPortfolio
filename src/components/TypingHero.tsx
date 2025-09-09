import React, { useEffect, useState } from "react";
import { TypingAnimation } from "./magicui/typing-animation";

/**
 * TypingHero
 * - Uses Magic UI typing animation
 * - Cycles through multiple phrases
 */
export default function TypingHero() {
  const phrases = ["Yoon Jae Chang", "a software engineer", "a researcher and AI enthusiast", "a builder"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      setKey((prev) => prev + 1); // Force re-render of typing animation
    }, 4000); // Change phrase every 4 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="w-full text-center h-20">
      <TypingAnimation
        key={key}
        className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-primary-foreground w-200"
        duration={110}
        delay={0}
      >
        {phrases[currentPhraseIndex]}
      </TypingAnimation>
    </div>
  );
}
