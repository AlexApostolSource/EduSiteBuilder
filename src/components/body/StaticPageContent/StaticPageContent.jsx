import React, { useState } from "react";
import "./StaticPageContent.css"; // Import the CSS file

export const StaticPageContent = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || !image) {
      alert("Please add both text and an image.");
      return;
    }

    console.log("Submitted Text:", text);
    console.log("Submitted Image:", image);
    alert("Your text and image were successfully submitted!");

    setText("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="uploader-container">
      <h2 className="uploader-title">Add Image and Text</h2>
      <form onSubmit={handleSubmit} className="uploader-form">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          className="uploader-textarea"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="uploader-file-input"
        />
        {preview && (
          <div className="uploader-preview">
            <h4>Image Preview:</h4>
            <img
              src={preview}
              alt="Uploaded Preview"
              className="uploader-image"
            />
          </div>
        )}
        <button type="submit" className="uploader-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StaticPageContent;
