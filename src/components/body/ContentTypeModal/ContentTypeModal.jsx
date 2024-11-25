import React from "react";
import "./ContentTypeModal.css";
import { PageContentType } from "../../../assets/shared/Shared";

export const ContentTypeModal = ({ isOpen, onClose, onSelect }) => {
  console.log("closing");
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Content Type</h2>
        <button
          onClick={() => {
            onSelect(PageContentType.LIST_CONTENT);
            onClose();
          }}
        >
          List Content
        </button>
        <button
          onClick={() => {
            onSelect(PageContentType.STATIC_CONTENT);
            onClose();
          }}
        >
          Static Content
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
