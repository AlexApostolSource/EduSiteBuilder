import React from "react";
import "./ContentTypeModal.css";
import { ButtonType, PageContentType } from "../../../assets/shared/Shared";
import { CustomButton } from "../../shared/Button/CustomButton";

export const ContentTypeModal = ({ isOpen, onClose, onSelect }) => {
  console.log("closing");
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Select Content Type</h2>
        <div className="modal-content-buttons">
          <CustomButton
            onClick={() => {
              onSelect(PageContentType.LIST_CONTENT);
              onClose();
            }}
            text={"List Content"}
          ></CustomButton>
          <CustomButton
            onClick={() => {
              onSelect(PageContentType.STATIC_CONTENT);
              onClose();
            }}
            text={"Static Content"}
          ></CustomButton>
          <CustomButton onClick={onClose} text={"Close"}></CustomButton>
        </div>
      </div>
    </div>
  );
};
