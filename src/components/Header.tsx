"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Highlighter } from "@/components/magicui/highlighter";


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className="top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      
      <div className="w-full h-6 bg-card/80 mb-11">
        
      </div>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-7"> 
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image src="/favicon.svg" alt="Yoon Jae Chang" width={72} height={72} />
            
          </button>
          <button
              onClick={() => scrollToSection("projects")}
              className="text-black font-montserrat font-extrabold text-2xl hover:cursor-pointer  hover:text-card transition-all duration-300"
            >
              <Highlighter action="highlight" color="#D98255">  
                Work
              </Highlighter>
              
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-black font-montserrat font-extrabold text-2xl hover:cursor-pointer  hover:text-card transition-all duration-300"
            >
                <Highlighter action="highlight" color="#87CEFA">
                  Experience
                </Highlighter>{" "}

             
            </button>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black font-montserrat font-extrabold text-2xl hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 rounded-sm border-black px-2 py-2 border-4"
            >
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
