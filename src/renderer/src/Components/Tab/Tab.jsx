import React from "react";
import "./Tab.css"; // Add this import for the custom styles

const VMTab = ({ name, selected, onClose, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`tab d-flex justify-content-between align-items-center px-3 py-2 ${
        selected ? "selected" : "card-header"
      }`}
    >
      <span>{name}</span>
      {onClose && (
        <button
          className="btn-close btn-sm"
          onClick={onClose}
          aria-label="Close"
        ></button>
      )}
    </div>
  );
};

export default VMTab;
