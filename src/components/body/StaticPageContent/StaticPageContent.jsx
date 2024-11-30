import React, { useState } from "react";
import { useEffect } from "react";
import "./StaticPageContent.css"; // Import the CSS file
import { ImageUploader } from "../ImgUploader/ImageUploader";
import { EditableParagraph } from "../EditableParagraph/EditableParagraph";

export const StaticPageContent = ({ isPreviewing }) => {
  return (
    <div className="modal-container">
      {
        <div className="edit-state">
          <ImageUploader isPreviewing={isPreviewing}></ImageUploader>
          <EditableParagraph></EditableParagraph>
        </div>
      }
    </div>
  );
};

export default StaticPageContent;
