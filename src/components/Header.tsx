'use client';

import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  UserIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  SparklesIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

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
    { id: 'about', label: 'Sobre', icon: UserIcon },
    { id: 'experience', label: 'Experiência', icon: BriefcaseIcon },
    { id: 'projects', label: 'Projetos', icon: CodeBracketIcon },
    { id: 'skills', label: 'Habilidades', icon: SparklesIcon },
    { id: 'contact', label: 'Contato', icon: EnvelopeIcon },
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
            <ul className="flex gap-4 md:gap-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="flex flex-col items-center text-xs text-gray-600 hover:text-quintoandar-blue transition-colors font-medium"
                      aria-label={item.label}
                    >
                      <Icon className="h-5 w-5 md:hidden" aria-hidden="true" />
                      <span className="hidden md:inline">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      <div className="absolute inset-0 bg-quintoandar-lightBlue opacity-50 -z-10"></div>
      
      <div className="container max-w-5xl mx-auto px-4">
        <div className="animate-fade-in">
          <p className="text-quintoandar-blue font-medium mb-2">Olá, eu sou</p>
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
            Apaixonado por criar produtos digitais impactantes que resolvem problemas reais dos usuários,
            com foco em crescimento, estratégia e decisões baseadas em dados.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              className="bg-quintoandar-blue hover:bg-blue-700 text-white"
              onClick={() => scrollToSection('contact')}
            >
              Entre em contato
            </Button>
            
            <Button variant="outline" className="border-quintoandar-blue text-quintoandar-blue hover:bg-quintoandar-lightBlue">
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "p-2 rounded-full",
                "bg-white border border-gray-200 hover:bg-quintoandar-lightBlue",
                "text-quintoandar-blue transition-colors duration-200"
              )}
              aria-label="LinkedIn"
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
              aria-label="Twitter"
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
