import React, { useState } from "react";
import { useEffect } from "react";
import "./StaticPageContent.css"; // Import the CSS file
import { ImageUploader } from "../ImgUploader/ImageUploader";
import { EditableParagraph } from "../EditableParagraph/EditableParagraph";

export const StaticPageContent = ({ isPreviewing }) => {
  return (
    <div className="modal-container">
      {
        <div>
          <ImageUploader
            isPreviewing={isPreviewing}
            width={100}
            widthValue={"%"}
            height={100}
            heightValue={"%"}
          ></ImageUploader>
          <EditableParagraph
            placeholder={"Click to edit text"}
          ></EditableParagraph>
        </div>
      }
    </div>
  );
};

export default StaticPageContent;
