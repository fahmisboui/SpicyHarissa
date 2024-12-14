"use client";

import React, { useState, useEffect } from "react";

// Games data
const games = [
  {
    title: "Doubt It",
    subtitle: "The Ultimate Card Game of Strategy and Bluffing!",
    description:
      "Get ready for hours of fun with Doubt-It. Perfect for 2 to 8 players. Doubt-It is easy to learn but offers endless strategic possibilities, making it a must-have for game nights, family gatherings, and casual play with friends.",
    imageDesktop: "/doubtit.png",
    imageMobile: "/doubtitMobile.png",
  },
  // Add more games here
];

export default function Games() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Update screen size state on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % games.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="Games" className="relative w-full min-h-screen bg-black">
      <h1 className="relative pt-24 text-center font-bold text-white text-3xl sm:text-4xl">
        Our Games
      </h1>

      <div className="mt-16 w-full">
        <div className="relative w-full h-[500px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${isMobile ? games[currentIndex].imageMobile : games[currentIndex].imageDesktop})`,
            }}
            aria-label={`Background image for ${games[currentIndex].title}`}
          ></div>

          {/* Content Overlay */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-24">
            <div className="w-full sm:w-1/2" aria-live="polite">
              <h2 className="text-white text-3xl sm:text-4xl font-bold mb-2">
                {games[currentIndex].title}
              </h2>
              <p className="text-white text-lg mb-2">
                {games[currentIndex].subtitle}
              </p>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 505.499 505.499"
                  className="w-5 h-5 mr-2 fill-white"
                >
                  <path d="M471.497 234.466l-92.082-53.135-75.733 73.208 69.215 66.907 98.6-56.91c5.43-3.133 8.677-8.756 8.677-15.03 0-6.275-3.247-11.898-8.677-15.04zM363.785 172.3l-101.332-58.497L40.375 0l250.828 242.47M44.063 505.499l218.771-120.512 94.435-54.515-66.065-63.869M25.559 9.815l-.236 489.671L278.72 252.966" />
                </svg>
                <span className="text-white text-sm">
                  Available on Google Play Store
                </span>
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="flex justify-between items-center mb-4 sm:hidden">
                <button
                  className="w-[30px] h-[30px] bg-white bg-opacity-50 rounded-full flex justify-center items-center"
                  onClick={handlePrev}
                  aria-label="Previous game"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  className="w-[30px] h-[30px] bg-white bg-opacity-50 rounded-full flex justify-center items-center"
                  onClick={handleNext}
                  aria-label="Next game"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-white text-sm mb-6">
                {games[currentIndex].description}
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.SpicyHarissa.Doubt_It&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <button className="w-[150px] h-12 rounded-lg bg-white text-black font-semibold hover:bg-gray-300">
                  Download
                </button>
              </a>
            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="hidden sm:flex absolute inset-0 justify-between items-center px-4">
            <button
              className="w-[50px] h-[50px] bg-white bg-opacity-50 rounded-full flex justify-center items-center"
              onClick={handlePrev}
              aria-label="Previous game"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="w-[50px] h-[50px] bg-white bg-opacity-50 rounded-full flex justify-center items-center"
              onClick={handleNext}
              aria-label="Next game"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
