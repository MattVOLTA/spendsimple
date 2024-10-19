import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (firstName: string, phoneNumber: string) => {
    console.log('Submitted:', { firstName, phoneNumber });
    // Here you would typically send this data to your backend
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onGetStarted={handleGetStarted} />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <HowItWorks />
        <CallToAction onGetStarted={handleGetStarted} />
      </main>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;