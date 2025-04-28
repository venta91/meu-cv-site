'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className={cn(
            "font-bold text-xl transition-colors",
            scrolled ? "text-quintoandar-darkGray" : "text-quintoandar-blue"
          )}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          JV
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium hover:text-quintoandar-blue transition-colors",
                scrolled ? "text-gray-700" : "text-gray-700",
              )}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.substring(1));
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={cn(
            "w-6 h-5 flex flex-col justify-between",
            scrolled ? "text-quintoandar-darkGray" : "text-quintoandar-blue"
          )}>
            <span className={cn(
              "h-0.5 w-full bg-current transition-transform duration-300",
              mobileMenuOpen && "translate-y-2 rotate-45"
            )}></span>
            <span className={cn(
              "h-0.5 w-full bg-current transition-opacity duration-300",
              mobileMenuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "h-0.5 w-full bg-current transition-transform duration-300",
              mobileMenuOpen && "-translate-y-2 -rotate-45"
            )}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container py-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 font-medium hover:text-quintoandar-blue transition-colors px-4 py-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href.substring(1));
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
