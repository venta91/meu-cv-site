'use client';

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <TooltipProvider>
      <main className="min-h-screen bg-background">
        <AboutMe />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
} 