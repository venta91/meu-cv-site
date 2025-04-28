'use client';

import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Button } from './ui/button';

interface Role {
  title: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

interface Experience {
  company: string;
  roles: Role[];
}

interface MonthMap {
  [key: string]: number;
}

const monthMap: MonthMap = {
  'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
  'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
};

export function getTotalDuration(roles: Role[]): string {
  function parse(period: string): { start: Date; end: Date } {
    const [start, end] = period.split(' - ');
    const parseDate = (dateStr: string): Date => {
      const [month, year] = dateStr.split(' ');
      return new Date(parseInt(year), monthMap[month]);
    };

    return {
      start: parseDate(start),
      end: end === 'Present' ? new Date() : parseDate(end)
    };
  }

  const dates = roles.map(role => parse(role.period));
  const min = dates.reduce((min, curr) => 
    !min || curr.start < min ? curr.start : min, null as Date | null);
  const max = dates.reduce((max, curr) => 
    !max || curr.end > max ? curr.end : max, null as Date | null);

  if (!min || !max) return '';

  const months = (max.getFullYear() - min.getFullYear()) * 12 + (max.getMonth() - min.getMonth());
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  return `${years ? years + ' yr' + (years > 1 ? 's' : '') : ''}${years && remainingMonths ? ' ' : ''}${remainingMonths ? remainingMonths + ' mo' + (remainingMonths > 1 ? 's' : '') : ''}`.trim();
}

const experiences: Experience[] = [
  {
    company: "Afya (iClinic & Cliquefarma)",
    roles: [
      {
        title: "Group Product Manager (iClinic)",
        period: "Jan 2024 - Present",
        description: `Leading the strategic transformation of product topology and managing acquisition and retention tribes, focusing on the core user journey. Responsible for refining acquisition and activation processes, optimizing plan offerings, and integrating AI-driven solutions to maximize efficiency and patient-focused service delivery. Also responsible for financial services, receivables anticipation, and payment solutions (POS).`,
        achievements: [
          "AI solutions integration to reduce screen time and maximize patient focus.",
          "Management of financial solutions (receivables anticipation, POS, cash flow)."
        ],
        skills: ["Product Strategy", "AI", "Fintech", "User Journey"]
      },
      {
        title: "Group Product Manager (Cliquefarma)",
        period: "Jan 2023 - Jan 2024",
        description: `Led Product, Design, and Content Operations for the rebranding and relaunch of Brazil's largest pharmacy price comparison platform. Responsible for business model revision, team development, and integration with Afya ecosystem, achieving 50% YoY revenue growth.`,
        achievements: [
          "Redesigned import/update process for 500K+ offers from 80 retailers.",
          "Created 120K structured product pages.",
          "77% increase in revenue per click.",
          "Integrated digital prescription (iClinicRX) with Afya ecosystem."
        ],
        skills: ["Rebranding", "Growth", "Product Ops", "SEO"]
      },
      {
        title: "Senior Product Manager (Cliquefarma)",
        period: "Oct 2021 - Dec 2022",
        description: `Led the Cliquefarma platform after its acquisition by Afya. Refactored the buyer journey, developed product culture, defined strategy and metrics, and integrated with the Afya ecosystem.`,
        achievements: [
          "Developed product culture and vision.",
          "Defined OKRs and innovation metrics.",
          "Integrated with Afya ecosystem."
        ],
        skills: ["Product Culture", "Strategy", "OKRs", "Innovation"]
      }
    ]
  },
  {
    company: "OLX Brasil",
    roles: [
      {
        title: "Product Manager",
        period: "Nov 2020 - Oct 2021",
        description: `Managed the portfolio of value-added services for autos (vehicle history, financing, insurance), impacting over 30 million users/month. Focused on seamless car buying/selling journey and service integration.`,
        achievements: [
          "Launched value-added services for autos.",
          "PR highlight: OLX Vehicles (UOL)."
        ],
        skills: ["Autos", "Marketplace", "User Experience"]
      },
      {
        title: "Product Marketing Manager",
        period: "Jun 2020 - Nov 2020",
        description: `Developed the blueprint for integration between product and marketing teams, standardized processes, and led product marketing strategy for Autos, impacting 25 million users/month.`,
        achievements: [
          "Standardized cross-area processes.",
          "Led product marketing strategy for Autos."
        ],
        skills: ["Product Marketing", "Process Design", "Autos"]
      },
      {
        title: "Product Marketing Specialist",
        period: "Jan 2019 - Jun 2020",
        description: `Created the Product Marketing area, defined scope, prioritized projects, and launched the main recurring business account (40% of OLX revenue). Managed Quality & Safety product marketing plan.`,
        achievements: [
          "Launched recurring business account.",
          "Managed Quality & Safety marketing plan."
        ],
        skills: ["Product Marketing", "Monetization", "Quality & Safety"]
      },
      {
        title: "Senior Branding Analyst",
        period: "Sep 2017 - Dec 2018",
        description: `Worked in branding and corporate communications, focusing on customer experience and innovation.`,
        achievements: [
          "Led branding and innovation projects."
        ],
        skills: ["Branding", "CX", "Innovation"]
      },
      {
        title: "Customer Experience Leader - Innovation & Continuous Improvement",
        period: "Jan 2017 - Aug 2017",
        description: `Led innovation and continuous improvement projects in customer experience.`,
        achievements: [
          "CX innovation projects."
        ],
        skills: ["CX", "Innovation"]
      }
    ]
  },
  {
    company: "Grupo Technos S/A",
    roles: [
      {
        title: "Digital Marketing Analyst",
        period: "Jan 2016 - Dec 2016",
        description: `Worked in digital marketing for the watch segment, focusing on campaigns and digital performance.`,
        achievements: [
          "Digital campaigns for group brands."
        ],
        skills: ["Digital Marketing", "Performance"]
      },
      {
        title: "Junior E-commerce and After Sale Analyst",
        period: "Oct 2014 - Dec 2015",
        description: `Worked in e-commerce and after-sales, focusing on customer service and digital processes.`,
        achievements: [
          "Improved after-sales processes."
        ],
        skills: ["E-commerce", "Customer Service"]
      }
    ]
  },
  {
    company: "Uniflex Cortinas e Persianas",
    roles: [
      {
        title: "Marketing Intern",
        period: "Aug 2013 - Oct 2014",
        description: `Marketing internship, supporting campaigns and events.`,
        achievements: [
          "Supported campaigns and events."
        ],
        skills: ["Marketing"]
      }
    ]
  },
  {
    company: "BRMALLS PARTICIPAÇÕES S/A",
    roles: [
      {
        title: "Marketing Intern",
        period: "Jan 2013 - Jul 2013",
        description: `Marketing internship, supporting campaigns and events.`,
        achievements: [
          "Supported campaigns and events."
        ],
        skills: ["Marketing"]
      }
    ]
  }
];

export function Experience() {
  const [expandedExperiences, setExpandedExperiences] = useState<{ [key: string]: boolean }>({});

  // Função para extrair ano de início e fim do primeiro e último cargo
  function getStartEndYears(roles: Role[]): { start: string; end: string } {
    if (!roles.length) return { start: '', end: '' };
    const first = roles[roles.length - 1];
    const last = roles[0];
    const getYear = (period: string, which: 'start' | 'end') => {
      const [start, end] = period.split(' - ');
      if (which === 'start') return start.split(' ')[1];
      if (end === 'Present') return 'Atual';
      return end.split(' ')[1];
    };
    return {
      start: getYear(first.period, 'start'),
      end: getYear(last.period, 'end'),
    };
  }

  const toggleExperience = (company: string) => {
    setExpandedExperiences(prev => ({
      ...prev,
      [company]: !prev[company]
    }));
  };

  return (
    <section id="experience" className="section-spacing bg-quintoandar-gray">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">My journey in product, marketing, and innovation</p>
        <div className="space-y-4">
          {experiences.map((exp) => {
            const { start, end } = getStartEndYears(exp.roles);
            const expanded = expandedExperiences[exp.company];
            return (
              <div
                key={exp.company}
                className={`bg-white/5 rounded-lg p-6 shadow-lg transition-colors flex flex-col hover:bg-white/20 hover:shadow-2xl cursor-pointer select-none`}
                onClick={() => toggleExperience(exp.company)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') toggleExperience(exp.company); }}
                aria-expanded={expanded}
              >
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-white text-blue-600 px-2 py-0.5 rounded text-xs font-medium border border-blue-600">
                      {start} - {end}
                    </span>
                    <svg
                      className={`w-5 h-5 text-blue-600 transition-transform duration-200 ${expanded ? 'rotate-90' : 'rotate-0'}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                {expanded && (
                  <div className="mt-4 space-y-4">
                    {exp.roles.map((role, index) => (
                      <div key={index} className="border-l-2 border-primary pl-4">
                        <h4 className="text-xl font-medium">{role.title}</h4>
                        <p className="text-sm text-gray-400">{role.period}</p>
                        <p className="mt-2">{role.description}</p>
                        {role.achievements.length > 0 && (
                          <div className="mt-3">
                            <h5 className="font-medium mb-2">Principais conquistas:</h5>
                            <ul className="list-disc list-inside space-y-1">
                              {role.achievements.map((achievement, i) => (
                                <li key={i} className="text-sm">{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="mt-3">
                          <h5 className="font-medium mb-2">Tecnologias:</h5>
                          <div className="flex flex-wrap gap-2">
                            {role.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-primary/20 rounded-full text-xs">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;