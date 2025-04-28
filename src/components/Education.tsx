'use client';

import React from 'react';

const education = [
  {
    institution: 'Fundação Getulio Vargas',
    degree: 'MBA, Business Management',
    period: '2017 - 2018',
  },
  {
    institution: 'Tera',
    degree: 'Digital Product Leadership, Product Management',
    period: '2019',
  },
  {
    institution: 'ESPM (Escola Superior de Propaganda e Marketing)',
    degree: 'BA in Social Communication (Advertising & Marketing)',
    period: '2010 - 2014',
  },
];

const Education = () => {
  return (
    <section id="education" className="section-spacing bg-quintoandar-gray">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic background and professional certifications</p>
        <ul className="space-y-6 mt-8">
          {education.map((edu, idx) => (
            <li key={idx} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-quintoandar-darkGray">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree}</p>
                </div>
                <span className="text-gray-500 mt-2 md:mt-0">{edu.period}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education; 