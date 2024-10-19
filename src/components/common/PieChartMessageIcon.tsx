import React from 'react';

const PieChartMessageIcon: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 0-.9-3.8 8.5 8.5 0 0 0-7.6-4.7 8.38 8.38 0 0 0-3.8.9L3 3v5l4 4h5l5 5v-5l4-4z"></path>
    <path d="M16 8a6 6 0 0 0-6 6"></path>
  </svg>
);

export default PieChartMessageIcon;
