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

  const { providedImage, providedText, providedTitle } = location.state || {
    providedImage: "https://via.placeholder.com/150",
    providedText: "Default Text",
    providedTitle: "Click here to edit Title",
  };

  return (
    <div className="modal-container">
      <div className="edit-state">
        <div className="static-page-title">
          <EditableTitle
            truncate={truncateText}
            placeholder={providedTitle}
          ></EditableTitle>
        </div>
        <ImageUploader
          isPreviewing={isPreviewing}
          width={100}
          widthValue={"%"}
          height={1000}
          heightValue={"px"}
          providedImage={providedImage}
        />
        <div className="static-page-paragarph">
          <EditableParagraph
            placeholder={providedText}
            truncate={truncateText}
          />
        </div>
      </div>
    </div>
  );
};

export default StaticPageContent;
