import React, { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./StaticPageContent.css"; // Import the CSS file
import { ImageUploader } from "../ImgUploader/ImageUploader";
import { EditableParagraph } from "../EditableParagraph/EditableParagraph";
import { EditableTitle } from "../../shared/EditableH1/EditableTitle";
import { useLocation } from "react-router-dom";

export const StaticPageContent = ({ isPreviewing, truncateText }) => {
  const location = useLocation();

  const { providedImage, providedText } = location.state || {
    providedImage: "https://via.placeholder.com/150",
    providedText: "Default Text",
  };

  return (
    <div className="modal-container">
      <div className="edit-state">
        <EditableTitle
          truncate={truncateText}
          placeholder={"Click here to edit Title"}
        ></EditableTitle>
        <ImageUploader
          isPreviewing={isPreviewing}
          width={100}
          widthValue={"%"}
          height={100}
          heightValue={"%"}
          providedImage={providedImage}
        />
        <EditableParagraph placeholder={providedText} truncate={truncateText} />
      </div>
    </div>
  );
};

export default StaticPageContent;
