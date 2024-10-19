import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenPrivacyPolicy: () => void;
  onOpenTermsOfService: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacyPolicy, onOpenTermsOfService }) => {
  return (
    <footer className="bg-secondary text-text py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Spend Simple</h3>
            <p>Stay on top of your budget, one text at a time.</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li>
                <a href="#" onClick={onOpenPrivacyPolicy} className="hover:text-accent">Privacy Policy</a>
              </li>
              <li>
                <a href="#" onClick={onOpenTermsOfService} className="hover:text-accent">Terms of Service</a>
              </li>
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent"><Facebook /></a>
              <a href="#" className="hover:text-accent"><Twitter /></a>
              <a href="#" className="hover:text-accent"><Instagram /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
