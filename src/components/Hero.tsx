import React from 'react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="bg-secondary text-text section-padding">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stay on top of your spending, one text at a time.</h1>
          <p className="text-xl mb-6 text-gray-600">No apps. No hassle. Just simple budgeting with a text.</p>
          <button onClick={onGetStarted} className="btn btn-primary mx-auto">Get Started for Free</button>
        </div>
        <div className="md:w-1/2 flex justify-center items-center hidden md:flex">
          <svg className="w-1/2 h-auto max-h-[475px]" viewBox="0 0 300 550" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="535" rx="30" fill="#F3F4F6" stroke="#3B82F6" strokeWidth="10"/>
            <rect x="30" y="40" width="240" height="395" rx="10" fill="#FFFFFF"/>
            <circle cx="150" cy="485" r="25" fill="#3B82F6"/>
            <rect x="120" y="20" width="60" height="10" rx="5" fill="#3B82F6"/>
            <rect x="50" y="80" width="200" height="40" rx="5" fill="#E5E7EB"/>
            <text x="240" y="105" fill="black" fontSize="12" fontWeight="bold" textAnchor="end">$172.45 at Old Navy</text>
            <rect x="50" y="140" width="200" height="40" rx="5" fill="#3B82F6"/>
            <text x="60" y="165" fill="white" fontSize="12" fontWeight="bold">$52.55 left on Clothing</text>
            <rect x="50" y="200" width="200" height="40" rx="5" fill="#E5E7EB"/>
            <text x="240" y="225" fill="black" fontSize="12" fontWeight="bold" textAnchor="end">$17.43 at Wendy's</text>
            <rect x="50" y="260" width="200" height="40" rx="5" fill="#3B82F6"/>
            <text x="60" y="285" fill="white" fontSize="12" fontWeight="bold">$182.57 left for Eating out</text>
            <rect x="50" y="320" width="200" height="40" rx="5" fill="#E5E7EB"/>
            <text x="240" y="345" fill="black" fontSize="12" fontWeight="bold" textAnchor="end">$225.14 at Sobeys</text>
            <rect x="50" y="380" width="200" height="40" rx="5" fill="#3B82F6"/>
            <text x="60" y="405" fill="white" fontSize="12" fontWeight="bold">$504.86 left on Groceries</text>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
