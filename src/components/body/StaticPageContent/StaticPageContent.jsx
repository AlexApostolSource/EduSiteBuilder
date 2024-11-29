import React, { useState } from "react";
import { useEffect } from "react";
import "./StaticPageContent.css"; // Import the CSS file

export const StaticPageContent = ({ isPreviewing }) => {
  const [image, setImage] = useState(null); // Placeholder image
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

  // Fetch placeholder image on component mount
  useEffect(() => {
    const fetchPlaceholderImage = async () => {
      try {
        const response = await fetch(
          "https://via.placeholder.com/800x400?text=Placeholder+Image"
        );
        if (response.ok) {
          setImage(response.url); // Set the placeholder image URL
        } else {
          console.error("Failed to fetch placeholder image");
        }
      } catch (error) {
        console.error("Error fetching placeholder image:", error);
      }
    };

    fetchPlaceholderImage();
  }, []);

  const handleImageChange = (e) => {
    if (isPreviewing) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update state with the uploaded image
      };
      reader.readAsDataURL(file); // Read the image file as a base64 data URL
    }
  };

  const handleTextClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="modal-container">
      {
        <div className="edit-state">
          <label htmlFor="imageUpload" className="image-label">
            <img
              src={
                image || "https://via.placeholder.com/800x400?text=Loading..."
              } // Show loading placeholder if image is null
              alt="Uploaded"
              className="image-preview"
            />
            <input
              id="imageUpload"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </label>
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
