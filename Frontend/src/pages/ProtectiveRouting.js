import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Modal from '../Components/Modal'; // Import your modal component

export const ProtectiveRouting = () => {
  const [showModal, setShowModal] = useState(false);
  const isLoggedin = JSON.parse(localStorage.getItem("Loggedin"));

  useEffect(() => {
    if (isLoggedin !== "true") {
      setShowModal(true); // Show modal if not logged in
    }
  }, [isLoggedin]);

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };

  return (
    <>
      {showModal && (
        <Modal
          message="Login is Required"
          onClose={handleCloseModal}
        />
      )}
      {isLoggedin === "true" ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};
