import { useState } from "react";
import "./EditableParagraph.css";
export const EditableParagraph = () => {
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
    <div>
      <p onClick={handleTextClick} className="text-paragraph">
        {paragraphText}
      </p>
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
