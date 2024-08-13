// PDFPreviewModal.js
import React from "react";
import Modal from "react-modal";

const PDFPreviewModal = ({ isOpen, onRequestClose, pdfURL }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Vista Previa del PDF"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "2%",
          left: "10%",
          right: "10%",
          bottom: "10%",
          padding: "20px",
        },
      }}
    >
      <h2>Vista Previa del PDF</h2>
      <iframe
        src={pdfURL}
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="PDF Preview"
      />
      <button onClick={onRequestClose}>Cerrar</button>
    </Modal>
  );
};

export default PDFPreviewModal;
