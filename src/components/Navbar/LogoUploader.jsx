import React, { useRef } from "react";
import { useState } from "react";
import "./Navbar.css";

export const LogoUploader = ({ isPreviewing }) => {
  const fileInputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState("logo.png"); // Default logo image

  const onClickLogo = () => {
    // Trigger the file input click
    console.log(isPreviewing);
    if (isPreviewing) {
      return;
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // Set the image source to the uploaded file
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div>
      <div className="navbar-logo" onClick={onClickLogo}>
        <img src={imageSrc} alt="Logo" className="logo-image" />
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }} // Hide the file input
        onChange={handleFileChange}
        accept="image/*" // Accept only image files
      />
    </div>
  );
};
