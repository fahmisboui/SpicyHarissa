'use client'

import React from "react";

export default function Contact() {
  return (
    <section id="Contact" 
    className="relative w-full h-auto bg-gradient-to-b from-[rgb(48,0,0)] to-black py-12 px-4">
      <h1 className="relative text-center font-bold text-white text-3xl sm:text-4xl">
        Contact Us
      </h1>

      <p className="text-left text-white mb-12 max-w-3xl mx-auto mt-10 px-4 sm:px-0">
        Got a question, an idea, or a project you'd like to bring to life? We'd
        love to hear from you! Whether you're looking to collaborate,
        discuss our games, or simply say hello, feel free to reach out. Let's
        create something amazing together!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="rounded-lg bg-white p-8 w-full max-w-[350px] flex flex-col justify-between h-[450px]">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="mb-8">Want to get in touch?</p>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <a href="tel:+21652993317" className="hover:text-gray-800">+216 52 993 317</a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <a href="mailto:contact@SpicyHarissa.com" className="hover:text-gray-800">contact@SpicyHarissa.com</a>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span className="hover:text-gray-800">Tunisia, Sousse</span>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#">
            <img
            src="/Svgs/Twitter.svg"
            alt="Twitter Icon"
            />
            </a>
            <a href="#">
            <img
            src="/Svgs/Instagram.svg"
            alt="Instagram Icon"
            />
            </a>
            <a href="#">
            <img
            src="/Svgs/Discord.svg"
            alt="Discord Icon"
            />
            </a>
            <a href="#">
            <img
            src="/Svgs/Linkedin.svg"
            alt="Linkedin Icon"
            />
            </a>
          </div>
        </div>

        <form className="p-4 sm:p-8 w-full max-w-[700px] bg-transparent mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
            <div className="w-full">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">First Name</label>
              <input type="text" id="first_name" className="w-full bg-transparent border-b border-gray-300 text-white text-sm focus:outline-none block p-2.5 mb-2" placeholder="John" required />
            </div>
            <div className="w-full">
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white">Last Name</label>
              <input type="text" id="last_name" className="w-full bg-transparent border-b border-gray-300 text-white text-sm focus:outline-none block p-2.5 mb-2" placeholder="Doe" required />
            </div>
            <div className="w-full">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
              <input type="email" id="email" className="w-full bg-transparent border-b border-gray-300 text-white text-sm focus:outline-none block p-2.5 mb-2" placeholder="john.doe@example.com" required />
            </div>
            <div className="w-full">
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
              <input type="tel" id="phone" className="w-full bg-transparent border-b border-gray-300 text-white text-sm focus:outline-none block p-2.5 mb-2" placeholder="+1 (555) 123-4567" required />
            </div>
          </div>
          <div className="mt-4 sm:mt-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
            <textarea id="message" rows={4} className="w-full bg-transparent border-b border-gray-300 text-white text-sm focus:outline-none block p-2.5" placeholder="Write your message here..."></textarea>
          </div>
          <div className="mt-4 sm:mt-6 text-right">
            <button type="submit" className="text-black bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}