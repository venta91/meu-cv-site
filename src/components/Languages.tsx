'use client';

import React from 'react';

const languages = [
  { name: 'Portuguese', level: 'Native or Bilingual' },
  { name: 'English', level: 'Full Professional' },
  { name: 'Spanish', level: 'Full Professional' },
];

const Languages = () => {
  return (
    <section id="languages" className="section-spacing bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">Languages</h2>
        <p className="section-subtitle">Languages I speak fluently in professional environments</p>
        <ul className="space-y-4 mt-8">
          {languages.map((lang, idx) => (
            <li key={idx} className="flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-lg font-medium text-quintoandar-darkGray">{lang.name}</span>
              <span className="text-gray-600">{lang.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Languages; 