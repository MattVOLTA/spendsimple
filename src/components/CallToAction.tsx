import React from 'react';

interface CallToActionProps {
  onGetStarted: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onGetStarted }) => {
  return (
    <section id="get-started" className="bg-secondary section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-text mb-8">Ready to Simplify Your Spending?</h2>
        <p className="text-xl text-center text-gray-600 mb-8">Click the button below to get started.</p>
        <div className="text-center">
          <button onClick={onGetStarted} className="btn btn-primary">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;