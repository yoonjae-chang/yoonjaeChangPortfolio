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
    <>   
    {isScrolled && (
    <div className="h-25">
    </div>
    )}
    <header
      className={!isScrolled ? "mt-10 top-0 left-0 right-0 z-50 transition-all duration-300":
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-card/70 backdrop-blur-sm border-foreground/10 py-2"
        }
    >
      

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center md:space-x-7 space-x-4"> 
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold hover:opacity-80 transition-opacity cursor-pointer"
          >
            <Image
              src="/favicon.svg"
              alt="Yoon Jae Chang"
              width={72}
              height={72}
              className="w-12 h-12 sm:w-15 sm:h-15 md:w-18 md:h-18 lg:w-20 lg:h-20"
            />            
          </button>
          <button
              onClick={() => scrollToSection("projects")}
              className="text-black font-montserrat font-extrabold md:text-2xl text-[15px] hover:cursor-pointer hover:text-gray-700 transition-all duration-300"
            >
              {isScrolled ? 
              "Work" :
              <Highlighter action="highlight" color="#D98255">  
                Work
              </Highlighter>
              }
              
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-black font-montserrat font-extrabold md:text-2xl text-[15px] hover:cursor-pointer hover:text-gray-700 transition-all duration-300"
            >
                {isScrolled ? 
                "Experience" :
                
                <Highlighter action="highlight" color="#87CEFA">
                  Experience
                </Highlighter>
                }

             
            </button>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("contact")}
              className="text-black font-montserrat font-extrabold md:text-2xl text-[15px] hover:cursor-pointer hover:bg-black hover:text-white transition-all duration-300 rounded-sm border-black px-2 py-2 border-4"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
};

export default Header;
