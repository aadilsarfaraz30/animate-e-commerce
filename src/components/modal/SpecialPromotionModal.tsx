// SpecialPromotionModal.jsx

import React, { useState, useEffect } from 'react';
import './SpecialPromotionModal.scss';

const SpecialPromotionModal = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setShowModal(true);

      const closeTimer = setTimeout(() => {
        setShowModal(false);
      }, 5000); // Close modal after 5 seconds

      return () => clearTimeout(closeTimer);
    }, 10000); // Show modal after 10 seconds

    return () => clearTimeout(openTimer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <div className="promotion">
              <h2>Special Limited-Time Promotion!</h2>
              <p>Don't miss out on our amazing offer!</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpecialPromotionModal;
