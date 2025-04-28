'use client';

import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="relative min-h-[80vh] flex flex-col justify-center">
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-white/80 backdrop-blur-sm py-4"
      )}>
        <div className="container max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-2xl font-bold text-quintoandar-blue hover:opacity-80 transition-opacity"
            >
              JV
            </button>
            <ul className="flex gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-600 hover:text-quintoandar-blue transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 bg-quintoandar-lightBlue opacity-50 -z-10"></div>
      <div className="container max-w-5xl mx-auto px-4">
        <div className="animate-fade-in">
          <p className="text-quintoandar-blue font-medium mb-2">Hello, I'm</p>
          <h1 
            className="text-4xl md:text-6xl font-bold text-quintoandar-darkGray mb-6 cursor-pointer hover:text-quintoandar-blue transition-colors"
            onClick={() => scrollToSection('about')}
          >
            João Pedro Ventania
          </h1>
          <h2 
            className="text-2xl md:text-3xl font-semibold text-gray-700 mb-8 cursor-pointer hover:text-quintoandar-blue transition-colors"
            onClick={() => scrollToSection('experience')}
          >
            Senior Product Manager
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-10">
            Passionate about creating impactful digital products that solve real user problems
            with a focus on growth, strategy, and data-driven decision making.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-quintoandar-blue hover:bg-blue-700 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Get in touch
            </Button>
            
            <Button variant="outline" className="border-quintoandar-blue text-quintoandar-blue hover:bg-quintoandar-lightBlue">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex mt-8 space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full",
                "bg-white border border-gray-200 hover:bg-quintoandar-lightBlue",
                "text-quintoandar-blue transition-colors duration-200"
              )}
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full",
                "bg-white border border-gray-200 hover:bg-quintoandar-lightBlue",
                "text-quintoandar-blue transition-colors duration-200"
              )}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
