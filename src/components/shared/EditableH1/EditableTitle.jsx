import { useState } from "react";
import "./EditableTitle.css";
import { CustomButton } from "../Button/CustomButton";
export const EditableTitle = ({ placeholder, onTextChange, truncate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paragraphText, setParagraphText] = useState(placeholder);
  const [inputText, setInputText] = useState("");

  const saveText = () => {
    if (inputText.trim()) {
      setParagraphText(inputText);
    }
    if (onTextChange) onTextChange(inputText); // Notify parent component
    handleTextClick(); // Close the modal
  };

  const handleTextClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <h1
        onClick={handleTextClick}
        className={truncate ? "text-paragraph-truncate" : "text-paragraph"}
      >
        {paragraphText}
      </h1>
      {isModalOpen && (
        <div className="overlay-modal-paragraph">
          <div className="modal-paragraph">
            <h2>Edit Text</h2>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter new text here"
            />
            <div className="edit-paragraph-modal-buttons">
              <CustomButton onClick={saveText} text={"Save"}></CustomButton>
              <CustomButton
                onClick={handleTextClick}
                text={"Cancel"}
              ></CustomButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
