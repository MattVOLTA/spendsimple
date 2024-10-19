import React from 'react';
import { Camera, FolderOpen, Bell } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Send a Text or Photo",
    description: "Snap a picture of your receipt or send us a text."
  },
  {
    icon: FolderOpen,
    title: "Automatic Categorization",
    description: "We organize your expense into the right budget category."
  },
  {
    icon: Bell,
    title: "Instant Budget Updates",
    description: "Get real-time updates on your spending and remaining budget."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-white section-padding">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Track Your Variable Spending With Every Text</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-secondary p-6 rounded-lg shadow-md text-center">
              <step.icon className="mx-auto text-accent mb-4" size={48} />
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;