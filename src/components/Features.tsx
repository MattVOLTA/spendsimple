import React from 'react';
import { MessageSquare, Zap, Clock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: "Text-Based Tracking",
    description: "Track expenses effortlessly via SMS."
  },
  {
    icon: Zap,
    title: "Automatic Budgeting",
    description: "Expenses are categorized automatically."
  },
  {
    icon: Clock,
    title: "Instant Updates",
    description: "Know your spending and remaining budget in real-time."
  },
  {
    icon: Smartphone,
    title: "Easy Setup",
    description: "Register with your phone number and start immediately."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose SpendSimple?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="mx-auto text-primary mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;