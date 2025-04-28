'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Product Management & Strategy",
    description: "Vision, roadmap, go-to-market, and business model definition for digital products.",
    skills: [
      { name: "Product Launch", level: 95 },
      { name: "Product Strategy", level: 95 },
      { name: "Product Culture", level: 90 },
      { name: "OKRs & Metrics", level: 90 },
      { name: "Innovation", level: 85 },
    ]
  },
  {
    category: "Growth & Marketing",
    description: "Driving user acquisition, engagement, retention, and monetization through data-driven decisions.",
    skills: [
      { name: "Growth Hacking", level: 90 },
      { name: "Marketing Strategy", level: 90 },
      { name: "SEO", level: 85 },
      { name: "Product Marketing", level: 90 },
      { name: "Monetization", level: 85 },
    ]
  },
  {
    category: "Analytics & Operations",
    description: "Using data to measure performance, identify opportunities, and optimize processes.",
    skills: [
      { name: "Analytical Skills", level: 95 },
      { name: "A/B Testing", level: 90 },
      { name: "Process Design", level: 85 },
      { name: "User Research", level: 85 },
      { name: "Data Visualization", level: 80 },
    ]
  },
  {
    category: "Leadership & Communication",
    description: "Leading teams, developing talent, and fostering a culture of innovation and collaboration.",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Stakeholder Management", level: 90 },
      { name: "Branding & CX", level: 85 },
      { name: "Consulting", level: 80 },
      { name: "Content Operations", level: 80 },
    ]
  },
  {
    category: "Tech & Future Skills",
    description: "Leveraging technology and AI to create innovative product experiences.",
    skills: [
      { name: "AI Solutions", level: 80 },
      { name: "Fintech", level: 75 },
      { name: "E-commerce", level: 80 },
      { name: "Digital Marketing", level: 85 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-spacing bg-quintoandar-gray">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Skills & Core Competencies</h2>
        <p className="section-subtitle">Key areas of expertise in product, marketing, analytics, and leadership</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-gray-200 card-hover">
              <CardHeader className="space-y-3">
                <CardTitle className="text-xl text-quintoandar-darkGray">{category.category}</CardTitle>
                <CardDescription className="text-gray-600">{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-medium text-quintoandar-blue">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-200" 
                      />
                    </div>
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

export default Skills;
