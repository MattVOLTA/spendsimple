import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="bg-gray-100 section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Start Free, Upgrade When You're Ready</h2>
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">30-Day Free Trial</h3>
            <p className="text-gray-600 mb-4">No credit card required</p>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Full access to all features
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Unlimited SMS tracking
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                Real-time budget updates
              </li>
            </ul>
            <p className="text-xl font-bold mb-2">After Trial:</p>
            <p className="text-3xl font-bold mb-4">$5/month <span className="text-sm font-normal text-gray-600">or $49/year</span></p>
            <p className="text-sm text-gray-600 mb-6">Cancel anytime</p>
            <a href="#get-started" className="btn btn-primary w-full text-center">Start Your Free Trial</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;