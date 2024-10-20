import React from 'react';
import styles from '../styles/components/Header.module.css'; // Import the CSS module

interface HeaderProps {
  onGetStarted: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGetStarted }) => {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Increased the logo size by an additional 5 pixels while maintaining the aspect ratio */}
          <img src="/images/sslogo.png" alt="Spend Simple Logo" className="h-11 mr-2" />
          <span className="text-2xl font-bold text-text">Spend Simple</span>
        </div>
        <div className="flex items-center space-x-6">
          <nav>
            <ul className="flex">
              <li className={styles.hideOnMobile}>
                <a href="#how-it-works" className="text-text hover:text-accent">How It Works</a>
              </li>
            </ul>
          </nav>
          <button onClick={onGetStarted} className="btn btn-primary">
            <span className={styles.buttonText}>Get Started for Free</span>
            <span className={styles.buttonTextMobile}>Get Started</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
