import React from 'react';

interface TermsOfServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const TermsOfServiceModal: React.FC<TermsOfServiceModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
                <p className="text-gray-700 mb-4">
                    By using Spend Simple, you agree to these terms, which outline the responsible use of our budgeting service. 
                    Users must provide accurate information and acknowledge that Spend Simple’s insights are for informational 
                    purposes and not a substitute for professional financial advice. We reserve the right to change or update 
                    services and terms at any time. Misuse or unauthorized access may result in termination of your account. 
                    Spend Simple is not liable for financial outcomes based on the provided insights.
                </p>
                <button onClick={onClose} className="btn btn-primary">Close</button>
            </div>
        </div>
    );
};

export default TermsOfServiceModal;
