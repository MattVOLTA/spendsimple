import React, { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (firstName: string, lastName: string, phoneNumber: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setResponseMessage(''); // Clear previous response message

    // Validate phone number length
    if (phoneNumber.length !== 10) {
      setSubmitError('Phone number must be exactly 10 digits.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://hook.us1.make.com/lbtjsjwkfo5nm145kjfi0vm3v1let47a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, phoneNumber }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        setSubmitError(responseData.error || 'Failed to submit data');
      } else {
        onSubmit(firstName, lastName, phoneNumber);
        // Removed the lines that clear the form data
        setResponseMessage(responseData.message || 'Data submitted successfully!');
        // Keep the modal open
      }
    } catch (error) {
      const err = error as Error;
      console.error('Submission error:', err);
      setSubmitError(`Failed to submit. Please try again. Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers
    if (/^\d*$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-text">Get Started</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex mb-4 space-x-4">
            <div className="flex-1">
              <label htmlFor="firstName" className="block text-gray-700 mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-full px-3 py-2 border border-gray-300 text-text rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              required
            />
          </div>
          {submitError && (
            <p className="text-black mb-4 text-xs font-bold">
              {submitError}
            </p>
          )}
          {responseMessage && (
            <p className="text-black mb-4 text-xs font-bold">
              {responseMessage}
            </p>
          )}
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="btn bg-gray-300 hover:bg-gray-400 text-gray-800 mr-2">Cancel</button>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
