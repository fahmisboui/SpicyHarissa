import React from "react";

export default function WhyUs() {
  const items = [
    {
      title: "Player-Centered Design",
      description:
        "We focus on creating engaging, memorable experiences that truly resonate with players.",
      number: 1,
    },
    {
      title: "Indie Spirit, Professional Results",
      description:
        "As a close-knit team, we combine the agility of an indie studio with a commitment to delivering polished, high-quality games.",
      number: 2,
    },
    {
      title: "Versatility",
      description:
        "Whether it's crafting captivating mechanics, designing intuitive interfaces, or exploring new platforms, we adapt to your unique needs.",
      number: 3,
    },
    {
      title: "Collaborative Approach",
      description:
        "We value open communication and collaboration, ensuring that your vision is at the heart of every decision.",
      number: 4,
    },
  ];

  return (
    <div className="relative w-full h-auto bg-gradient-to-b from-[#660101] to-black flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-8">
        Why Spicy Harissa
      </h1>
      <div className="text-center mb-12">
        <p className="text-white text-base sm:text-lg lg:text-xl font-semibold max-w-3xl mx-auto">
          We are a passionate indie team with extensive experience in game
          development. Our skilled professionals are committed to providing tailored
          solutions to bring your creative vision to life, no matter the platform or engine.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-7xl w-full">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-[#330303] bg-opacity-80 rounded-2xl shadow-lg backdrop-blur-lg p-6 items-start gap-4"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full border-4 border-white text-white text-2xl font-bold mb-4 sm:mb-0">
              {item.number}
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-white text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}