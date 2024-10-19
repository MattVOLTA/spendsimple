import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsOfServiceModal from './components/TermsOfServiceModal';
import Modal from './components/Modal';

function App() {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const handleClosePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  const handleOpenTermsModal = () => {
    setIsTermsModalOpen(true);
  };

  const handleCloseTermsModal = () => {
    setIsTermsModalOpen(false);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (firstName: string, lastName: string, phoneNumber: string) => {
    // Handle form submission success
    console.log('Form submitted:', { firstName, lastName, phoneNumber });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onGetStarted={handleOpenModal} />
      <main>
        <Hero onGetStarted={handleOpenModal} />
        <HowItWorks />
        <CallToAction onGetStarted={handleOpenModal} />
      </main>
      <Footer onOpenPrivacyPolicy={handleOpenPrivacyModal} onOpenTermsOfService={handleOpenTermsModal} />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} onSubmit={handleSubmit} />
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={handleClosePrivacyModal} />
      <TermsOfServiceModal isOpen={isTermsModalOpen} onClose={handleCloseTermsModal} />
    </div>
  );
}

export default App;
