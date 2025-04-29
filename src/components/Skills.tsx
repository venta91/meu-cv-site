'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Gestão e Estratégia de Produto",
    description: "Visão, roadmap, go-to-market e definição de modelo de negócios para produtos digitais.",
    skills: [
      { name: "Lançamento de Produto", level: 95 },
      { name: "Estratégia de Produto", level: 95 },
      { name: "Cultura de Produto", level: 90 },
      { name: "OKRs & Métricas", level: 90 },
      { name: "Inovação", level: 85 },
    ]
  },
  {
    category: "Growth & Marketing",
    description: "Impulsionando aquisição, engajamento, retenção e monetização através de decisões baseadas em dados.",
    skills: [
      { name: "Growth Hacking", level: 90 },
      { name: "Estratégia de Marketing", level: 90 },
      { name: "SEO", level: 85 },
      { name: "Marketing de Produto", level: 90 },
      { name: "Monetização", level: 85 },
    ]
  },
  {
    category: "Analytics & Operações",
    description: "Usando dados para medir performance, identificar oportunidades e otimizar processos.",
    skills: [
      { name: "Habilidades Analíticas", level: 95 },
      { name: "Testes A/B", level: 90 },
      { name: "Design de Processos", level: 85 },
      { name: "Pesquisa de Usuário", level: 85 },
      { name: "Visualização de Dados", level: 80 },
    ]
  },
  {
    category: "Liderança & Comunicação",
    description: "Liderando times, desenvolvendo talentos e fomentando uma cultura de inovação e colaboração.",
    skills: [
      { name: "Liderança de Time", level: 90 },
      { name: "Gestão de Stakeholders", level: 90 },
      { name: "Branding & CX", level: 85 },
      { name: "Consultoria", level: 80 },
      { name: "Operações de Conteúdo", level: 80 },
    ]
  },
  {
    category: "Tech & Habilidades Futuras",
    description: "Alavancando tecnologia e IA para criar experiências de produto inovadoras.",
    skills: [
      { name: "Soluções de IA", level: 80 },
      { name: "Fintech", level: 75 },
      { name: "E-commerce", level: 80 },
      { name: "Marketing Digital", level: 85 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-spacing bg-quintoandar-gray">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Habilidades & Competências</h2>
        <p className="section-subtitle">Áreas-chave de expertise em produto, marketing, analytics e liderança</p>
        
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
