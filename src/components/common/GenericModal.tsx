import React from 'react';
import Modal from 'react-modal';

interface GenericModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    title: string;
    content: string;
}

const GenericModal: React.FC<GenericModalProps> = ({ isOpen, onRequestClose, title, content }) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={title}
        >
            <h2>{title}</h2>
            <p>{content}</p>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default GenericModal;
