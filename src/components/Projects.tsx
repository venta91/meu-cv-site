'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    letter: "R",
    title: "Relançamento da Plataforma de Comparação de Preços de Farmácias",
    period: "2023 - 2024",
    company: "Afya (Cliquefarma)",
    description: "Liderou o rebranding e relançamento da maior plataforma de comparação de preços de farmácias do Brasil, incluindo revisão do modelo de negócios, desenvolvimento de equipe e integração com o ecossistema Afya.",
    results: [
      "+50% crescimento YoY em receita",
      "120K páginas de produtos estruturadas",
      "77% aumento na receita por clique"
    ],
    skills: ["Rebranding", "Growth", "Product Ops", "SEO"]
  },
  {
    letter: "A",
    title: "Jornada de Produto e Paciente Orientada por IA",
    period: "2024 - Presente",
    company: "Afya (iClinic)",
    description: "Liderou a transformação estratégica da topologia do produto e integração de soluções orientadas por IA para otimizar as jornadas do usuário e paciente, incluindo serviços financeiros e eficiência operacional.",
    results: [
      "Soluções de IA para reduzir tempo de tela",
      "Operações financeiras melhoradas para clientes"
    ],
    skills: ["Product Strategy", "AI", "Fintech", "User Journey"]
  },
  {
    letter: "S",
    title: "Serviços de Valor Agregado para Autos",
    period: "2020 - 2021",
    company: "OLX Brasil",
    description: "Gerenciou o portfólio de serviços de valor agregado para autos (histórico veicular, financiamento, seguro), impactando mais de 30 milhões de usuários/mês.",
    results: [
      "Lançou novos serviços para autos",
      "Destaque PR: OLX Veículos (UOL)"
    ],
    skills: ["Autos", "Marketplace", "User Experience"]
  },
  {
    letter: "M",
    title: "Lançamento de Conta Business Recorrente",
    period: "2019 - 2020",
    company: "OLX Brasil",
    description: "Criou e lançou a principal conta business recorrente, responsável por 40% da receita da OLX, e gerenciou o plano de marketing de produto de Qualidade & Segurança.",
    results: [
      "Lançou conta business recorrente",
      "Gerenciou plano de marketing de Qualidade & Segurança"
    ],
    skills: ["Product Marketing", "Monetization", "Quality & Safety"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Projetos em Destaque</h2>
        <p className="section-subtitle">Uma seleção de produtos e iniciativas impactantes que liderei</p>
        
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
