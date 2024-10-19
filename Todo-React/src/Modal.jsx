import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="card" style={{ width: "400px", padding: "20px" }}>
        <div className="card-body">
          <button
            className="btn-close"
            style={{ float: "right" }}
            onClick={onClose}
          ></button>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
