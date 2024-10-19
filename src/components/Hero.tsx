import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-secondary text-text section-padding">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stay on top of your budget, one text at a time.</h1>
          <p className="text-xl mb-6 text-gray-600">No apps. No hassle. Just simple budgeting with a text.</p>
          <button onClick={onGetStarted} className="btn btn-primary mx-auto">Get Started for Free</button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center hidden md:flex">
          <svg className="w-1/2 h-auto max-h-[475px]" viewBox="0 0 300 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="580" rx="30" fill="#F3F4F6" stroke="#3B82F6" strokeWidth="10"/>
            <rect x="30" y="40" width="240" height="480" rx="10" fill="#FFFFFF"/>
            <circle cx="150" cy="550" r="25" fill="#3B82F6"/>
            <rect x="120" y="20" width="60" height="10" rx="5" fill="#3B82F6"/>
            <rect x="50" y="80" width="200" height="20" rx="5" fill="#E5E7EB"/>
            <rect x="50" y="120" width="150" height="20" rx="5" fill="#E5E7EB"/>
            <rect x="50" y="180" width="200" height="60" rx="5" fill="#E5E7EB"/>
            <rect x="50" y="260" width="200" height="60" rx="5" fill="#E5E7EB"/>
            <rect x="50" y="340" width="200" height="60" rx="5" fill="#E5E7EB"/>
            <rect x="50" y="420" width="100" height="40" rx="5" fill="#3B82F6"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
