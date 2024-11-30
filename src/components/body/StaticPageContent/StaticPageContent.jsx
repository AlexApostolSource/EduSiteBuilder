import React, { useState } from "react";
import { useEffect } from "react";
import "./StaticPageContent.css"; // Import the CSS file
import { ImageUploader } from "../ImgUploader/ImageUploader";

export const StaticPageContent = ({ isPreviewing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paragraphText, setParagraphText] = useState(
    "Click me to edit this text"
  );
  const [inputText, setInputText] = useState("");

  const saveText = () => {
    if (inputText.trim()) {
      setParagraphText(inputText);
    }
    handleTextClick(); // Close the modal
  };

  const handleTextClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal-container">
      {
        <div className="edit-state">
          <ImageUploader isPreviewing={isPreviewing}></ImageUploader>
          <p onClick={handleTextClick} className="text-paragraph">
            {paragraphText}
          </p>
          {isModalOpen && (
            <div style={modalStyles.overlay}>
              <div style={modalStyles.modal}>
                <h2>Edit Text</h2>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Enter new text here"
                  style={modalStyles.input}
                />
                <div style={modalStyles.buttons}>
                  <button onClick={saveText} style={modalStyles.button}>
                    Save
                  </button>
                  <button onClick={handleTextClick} style={modalStyles.button}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default StaticPageContent;

const modalStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    width: "300px",
  },
};
