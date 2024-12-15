import Image from 'next/image';

export default function Services() {
  return (
    <section id="Services" className="relative w-full h-auto bg-[rgba(255,255,255,1.0)] [background:linear-gradient(180deg,rgb(47,1,1)_0%,rgb(0,0,0)_100%)]">
      <h1 className="relative pt-24 text-center font-bold text-white text-3xl sm:text-4xl">
        Services
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6 px-5 py-12 sm:gap-10 lg:py-20">
        {/* First Service */}
        <div className="flex flex-col items-center gap-4 p-5 w-[300px] h-[350px] sm:h-[400px] lg:h-[450px] rounded-3xl border-2 border-white bg-gradient-to-b from-[#720000] to-[#260000]">
          <div className="relative w-full h-[113px]">
            <Image
              className="absolute w-[50px] h-[50px] top-0 left-1/2 transform -translate-x-1/2"
              alt="Game enhancement"
              src="/gameEnhancementIcon.png"
              width={50}
              height={50}
            />
            <div className="absolute top-[59px] left-0 right-0 text-center font-semibold text-white text-lg">
              Game Enhancement
            </div>
          </div>
          <ul className="list-inside list-disc text-white text-sm md:text-base text-left space-y-3">
            <li>
              <span className="font-medium">Upgrade Your Game:</span> Add new features or expand functionality.
            </li>
            <li>
              <span className="font-medium">Multiplayer Mode:</span> Seamlessly transform your game for multiplayer.
            </li>
            <li>
              <span className="font-medium">Tailored Solutions:</span> Custom improvements to match your vision.
            </li>
          </ul>
          <a href='#Contact'>
          <button className="px-6 py-2 mt-4 bg-white text-black rounded-lg shadow-lg">
          Get in touch
          </button>
          </a>
        </div>
        {/* Second Service*/}
        <div className="flex flex-col items-center gap-4 p-5 w-[300px] h-[350px] sm:h-[400px] lg:h-[450px] rounded-3xl border-2 border-white bg-gradient-to-b from-[#720000] to-[#260000] lg:translate-y-[-20px]">
          <div className="relative w-full h-[113px]">
            <Image
              className="absolute w-[50px] h-[50px] top-0 left-1/2 transform -translate-x-1/2"
              alt="Full-cycle game development"
              src="/gameSolutionsIcon.png"
              width={50}
              height={50}
            />
            <div className="absolute top-[59px] left-0 right-0 text-center font-semibold text-white text-lg">
              Full-Cycle Game Development
            </div>
          </div>
          <ul className="list-inside list-disc text-white text-sm md:text-base text-left space-y-3">
            <li>
              <span className="font-medium">Your Vision, Our Mission:</span> Share your idea, and we’ll bring it to life.
            </li>
            <li>
              <span className="font-medium">End-to-End Solutions:</span> From concept to release, we handle every stage of development.
            </li>
            <li>
              <span className="font-medium">Player-Focused Design:</span> We create experiences that captivate and engage your audience.
            </li>
          </ul>
          <a href='#Contact'>
          <button className="px-6 py-2 mt-4 bg-white text-black rounded-lg shadow-lg">
          Get in touch
          </button>
          </a>
        </div>
        {/* Third Service */}
        <div className="flex flex-col items-center gap-4 p-5 w-[300px] h-[350px] sm:h-[400px] lg:h-[450px] rounded-3xl border-2 border-white bg-gradient-to-b from-[#720000] to-[#260000]">
          <div className="relative w-full h-[113px]">
            <Image
              className="absolute w-[50px] h-[50px] top-0 left-1/2 transform -translate-x-1/2"
              alt="Game engine solutions"
              src="/fullCyleIcon.png"
              width={50}
              height={50}
            />
            <div className="absolute top-[59px] left-0 right-0 text-center font-semibold text-white text-lg">
              Game Engine Solutions
            </div>
          </div>
          <ul className="list-inside list-disc text-white text-sm md:text-base text-left space-y-3">
            <li>
              <span className="font-medium">Beyond Gaming:</span> Harness game engines for training, simulations, or interactive experiences.
            </li>
            <li>
              <span className="font-medium">Immersive Visuals:</span> Create stunning, real-time 3D solutions.
            </li>
            <li>
              <span className="font-medium">Custom Applications:</span> Tailored tools for education, architecture, or product visualization.
            </li>
          </ul>
          <a href='#Contact'>
          <button className="px-6 py-2 mt-4 bg-white text-black rounded-lg shadow-lg">
          Get in touch
          </button>
          </a>
        </div>
      </div>
    </section>
  );
}