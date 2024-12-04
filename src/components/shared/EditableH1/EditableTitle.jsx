import { useState } from "react";
import "./EditableTitle.css";
export const EditableTitle = ({ placeholder, onTextChange }) => {
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
      <h1 onClick={handleTextClick} className="text-paragraph">
        {paragraphText}
      </h1>
      {isModalOpen && (
        <div className="overlay">
          <div className="modal">
            <h2>Edit Text</h2>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter new text here"
            />
            <div>
              <button onClick={saveText}>Save</button>
              <button onClick={handleTextClick}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
