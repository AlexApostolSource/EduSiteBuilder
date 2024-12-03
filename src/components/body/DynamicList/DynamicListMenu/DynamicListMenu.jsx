import "./DynamicListMenu.css";
import { useState } from "react";
import { ImageUploader } from "../../ImgUploader/ImageUploader";
import { EditableParagraph } from "../../EditableParagraph/EditableParagraph";
export const DynamicListMenu = ({ menuItems, onSave, onClose }) => {
  return (
    <div className="modal-overlay-dynamic-list">
      <div className="dynamic-list-modal-content">
        <ImageUploader
          width={150}
          widthValue={"px"}
          heightValue="px"
          height={100}
        ></ImageUploader>
        <EditableParagraph placeholder={"Add description"}></EditableParagraph>
        <button>Save</button>
      </div>
    </div>
  );
};
