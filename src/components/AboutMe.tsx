'use client';

import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="section-spacing bg-white">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <div className="bg-quintoandar-lightBlue w-64 h-64 rounded-full overflow-hidden mx-auto">
              {/* Placeholder for profile image */}
              <div className="w-full h-full flex items-center justify-center text-quintoandar-blue">
                <span className="text-7xl font-bold">JV</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 content-spacing">
            <p className="text-lg text-gray-700">
              I am a Group Product Manager with extensive experience leading digital product strategy, growth, and innovation in the healthcare, marketplace, and technology sectors. My journey has taken me from launching and scaling new business models to integrating AI-driven solutions and managing multidisciplinary teams across Brazil.
            </p>
            
            <p className="text-lg text-gray-700">
              I have a proven track record in product management, marketing, and analytics, with a strong focus on user experience, operational efficiency, and business impact. I am passionate about building high-performing teams, fostering a culture of innovation, and delivering products that truly make a difference for users and organizations.
            </p>
            
            <p className="text-lg text-gray-700">
              Fluent in Portuguese, English, and Spanish, I thrive in multicultural environments and enjoy collaborating with diverse teams to solve complex challenges and drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
