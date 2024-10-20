import React, { useState } from 'react';
import ContactModal from './ContactModal'; // Import the ContactModal
import Image from 'next/image';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenTermsOfService: () => void;
}

// Function to handle opening the contact modal
const openContactModal = (setIsContactModalOpen: React.Dispatch<React.SetStateAction<boolean>>) => {
  setIsContactModalOpen(true);
};

const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onOpenTermsOfService }) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <footer className="bg-darkFooter text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-white whitespace-nowrap">Spend Simple</h3>
            <p className="whitespace-nowrap">Stay on top of your budget, one text at a time.</p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="#" onClick={onOpenPrivacyPolicy} className="hover:text-accent text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" onClick={onOpenTermsOfService} className="hover:text-accent text-white">Terms of Service</a>
              </li>
              <li>
                <a href="mailto:hello@spendsimple.co" className="hover:text-accent text-white" onClick={() => openContactModal(setIsContactModalOpen)}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </footer>
  );
};

export default Footer;
