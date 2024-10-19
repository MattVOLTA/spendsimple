import React from 'react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
        <p className="text-gray-700 mb-4">
          Spend Simple respects your privacy and is committed to protecting your personal information. 
          We collect basic contact details, financial data, and receipts only to provide and improve 
          our budgeting service. Your data is stored securely and used solely for tracking and organizing 
          expenses, with no unauthorized sharing or selling to third parties. You can access, update, or 
          delete your data anytime by contacting our support team. Spend Simple uses industry-standard 
          encryption to protect your information during all interactions.
        </p>
        <button onClick={onClose} className="btn btn-primary">Close</button>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
