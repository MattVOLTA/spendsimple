import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="bg-primary text-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">See What Our Users Are Saying</h2>
        <div className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-xl">
          <blockquote className="text-xl italic mb-4">
            "Spend Simple has completely changed how I manage my finances. It's so easy to use, and I love getting instant updates on my spending. I finally feel in control of my budget!"
          </blockquote>
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" 
              alt="Sarah M." 
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="font-bold">— Sarah M.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
