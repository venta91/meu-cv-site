'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    letter: "R",
    title: "Pharmacy Price Comparison Platform Relaunch",
    period: "2023 - 2024",
    company: "Afya (Cliquefarma)",
    description: "Led the rebranding and relaunch of Brazil's largest pharmacy price comparison platform, including business model revision, team development, and integration with Afya ecosystem.",
    results: [
      "+50% YoY revenue growth",
      "120K structured product pages created",
      "77% increase in revenue per click"
    ],
    skills: ["Rebranding", "Growth", "Product Ops", "SEO"]
  },
  {
    letter: "A",
    title: "AI-Driven Product & Patient Journey",
    period: "2024 - Present",
    company: "Afya (iClinic)",
    description: "Led the strategic transformation of product topology and integration of AI-driven solutions to optimize user and patient journeys, including financial services and operational efficiency.",
    results: [
      "AI solutions to reduce screen time",
      "Improved financial operations for customers"
    ],
    skills: ["Product Strategy", "AI", "Fintech", "User Journey"]
  },
  {
    letter: "S",
    title: "Value-Added Services for Autos",
    period: "2020 - 2021",
    company: "OLX Brasil",
    description: "Managed the portfolio of value-added services for autos (vehicle history, financing, insurance), impacting over 30 million users/month.",
    results: [
      "Launched new services for autos",
      "PR highlight: OLX Vehicles (UOL)"
    ],
    skills: ["Autos", "Marketplace", "User Experience"]
  },
  {
    letter: "M",
    title: "Recurring Business Account Launch",
    period: "2019 - 2020",
    company: "OLX Brasil",
    description: "Created and launched the main recurring business account, responsible for 40% of OLX revenue, and managed the Quality & Safety product marketing plan.",
    results: [
      "Launched recurring business account",
      "Managed Quality & Safety marketing plan"
    ],
    skills: ["Product Marketing", "Monetization", "Quality & Safety"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">A selection of impactful products and initiatives I've led</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-gray-200 card-hover">
              <div className="bg-quintoandar-lightBlue p-12 flex items-center justify-center">
                <span className="text-7xl font-bold text-quintoandar-blue">{project.letter}</span>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-quintoandar-darkGray">{project.title}</CardTitle>
                  <Badge variant="outline" className="bg-quintoandar-lightBlue text-quintoandar-blue">
                    {project.period}
                  </Badge>
                </div>
                <CardDescription className="text-quintoandar-blue font-medium">
                  {project.company}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="mb-4 list-disc list-inside text-gray-700 space-y-1">
                  {project.results.map((result, i) => (
                    <li key={i}>{result}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
