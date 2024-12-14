"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [initialWaitDone, setInitialWaitDone] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if the component is rendered on the client

  const words = ["spicy", "exciting", "engaging", "fun"];
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseTime = 800;
  const initialDelay = 2000;

  const [animatingIndex, setAnimatingIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Ensure code runs only on the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (!hasAnimated) {
      setTimeout(() => setAnimatingIndex(1), 500);
      setTimeout(() => setAnimatingIndex(2), 1300);
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  useEffect(() => {
    const timer = setTimeout(() => setInitialWaitDone(true), initialDelay);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!initialWaitDone || !isClient) return;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText((prev) => prev + currentWord.charAt(displayedText.length));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, wordIndex, initialWaitDone, isClient, words]);

  return (
    <section id="Hero" className="relative w-full h-screen overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="paint0_radial_147_48" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#680000" />
            <stop offset="100%" stopColor="#230000" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#paint0_radial_147_48)" />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 bottom-40 left-[18px] w-[1px] bg-white"></div>
        <div className="absolute top-40 bottom-40 right-[18px] w-[1px] bg-white"></div>
      </div>

      <div className="absolute inset-x-0 top-[calc(50%-150px)] md:top-[calc(50%-30%)] flex justify-center items-center text-center text-white z-10">
        <div>
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl font-bold mb-4 ${
              animatingIndex >= 0 ? "animate-fadeInUp delay-[50ms]" : "opacity-0"
            }`}
          >
            Spicy Harissa
          </h1>
          <h1
            className={`text-3xl sm:text-5xl md:text-6xl font-bold mb-4 ${
              animatingIndex >= 1 ? "animate-fadeInUp delay-[200ms]" : "opacity-0"
            }`}
          >
            Game Development Studio
          </h1>
          <p
            className={`text-1xl sm:text-3xl md:text-4xl ${
              animatingIndex >= 2 ? "animate-fadeInUp delay-[1000ms]" : "opacity-0"
            }`}
          >
            We make{" "}
            <span className="text-[#FF4500] relative font-bold">
              {displayedText}
              <span className="absolute inline-block w-[2px] h-[1em] center bg-white animate-blink"></span>
            </span>{" "}
            games.
          </p>
        </div>
      </div>

      {isClient && (
        <picture>
          <source srcSet="/HeroImageDesktop.png" media="(min-width: 475px)" />
          <img
            src="/HeroImageMobile.png"
            alt="Hero Background"
            className="absolute bottom-0 object-contain bg-cover w-screen"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
          />
        </picture>
      )}
    </section>
  );
}
