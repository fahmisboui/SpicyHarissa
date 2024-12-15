"use client";

import React from "react";
import Image from 'next/image'

const teamMembers = [
    {
      name: "Fayez Farid",
      title: "CEO & Technical Lead",
      bio: "Fayez is a technical director, keeping the company and game's vision fun and spicy. He loves all kinds of games but is completely disinterested in televised sports. (He still watches, though, because his wife makes him.)",
      img: "/FayezFrame.png",
    },
    {
      name: "Fahmi Sboui",
      title: "Co-founder & Designer",
      bio: "Fahmi is a game designer who works on many different parts of our new games. He is hard-working, never slacks off, and is an insanely nice guy. Also, VERY humble. Of course, he did not write this bio himself because he's too busy getting his work done and never trolls.",
      img: "/FahmiFrame.png",
    },
    {
      name: "Marwen Jaballah",
      title: "Co-founder & Programmer",
      bio: "Marwen is a programmer who starts crying each time before another bug-hunting season. He's really into Dragonball, so don't get him started unless you want an earful about Adult Gohan's SICK LEG LOOPS!",
      img: "/MarwenFrame.png",
    },
    {
      name: "Ahmed Ayachi",
      title: "Co-founder & Programmer",
      bio: "Ahmed is a programmer working on gameplay logic, abilities, and all sorts of stuff. He loves his tea, Muppets, and Yassuo. Often seen collecting plastic bottles or rummaging through skips, Ahmed is doing his best.",
      img: "/AhmedFrame.png",
    },
  ]
  
export default function About() {
  return (
    <section
      id="AboutUs"
      className="relative w-full h-auto bg-gradient-to-b from-[#0B0000] to-[#670000] py-12"
    >
        <h1 className="relative pt-12 text-center font-bold text-white text-3xl sm:text-4xl">
        About Us
      </h1>

      <div className="flex flex-col sm:flex-row justify-center gap-6 items-center px-6 sm:px-12 mt-14">
        <img
          src="/Controller.png"
          alt="Controller Logo"
          className="sm:mr-6 sm:mb-0 mb-6 w-[200px] sm:w-[300px] h-auto"
        />
        <div className="relative flex flex-col items-center bg-gradient-to-b from-[rgba(227,0,0,0.4)] to-[rgba(125,0,0,0.4)] rounded-lg p-8 max-w-2xl text-center">
          <p className="text-white text-base text-left">
            Spicy Harissa is home to a passionate group of friends with a shared
            love for video games. We combined our skills and creativity to
            independently develop spicy games that inspire and entertain.
            <br />
            <br />
            Our mission is to create flavorful, high-quality games that leave a
            lasting impression on players around the world. At Spicy Harissa, we
            believe every project is an opportunity to push boundaries and tell
            stories that connect with players on a deeper level.
          </p>
        </div>
      </div>

<div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-8 mt-12 lg:px-12 max-w-7xl mx-auto">
  {teamMembers.map((person, index) => (
    <div
      key={index}
      className="flex flex-col items-center justify-start rounded-lg p-4 text-center w-full aspect-[164/214] lg:aspect-[301/400]"
    >
      <div className="relative w-2/5 pb-[40%] mb-2 lg:mb-4">
        <Image
          src={person.img}
          alt={`${person.name} frame`}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-white font-bold mb-0.5 lg:mb-1">
        {person.name}
      </h3>
      <h4 className="text-white font-medium mb-0.5 lg:mb-1">
        {person.title}
      </h4>
      <p className="select-none text-white text-left text-[0.9em] sm:text-base leading-tight overflow-y-auto flex-grow">
        {person.bio}
      </p>
    </div>
  ))}
</div>

    </section>
  );
}
