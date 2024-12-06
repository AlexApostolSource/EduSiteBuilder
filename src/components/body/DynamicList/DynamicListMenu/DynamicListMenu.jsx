import "./DynamicListMenu.css";
import { useState } from "react";
import { ImageUploader } from "../../ImgUploader/ImageUploader";
import { EditableParagraph } from "../../EditableParagraph/EditableParagraph";
import { CustomButton } from "../../../shared/Button/CustomButton";
import { EditableTitle } from "../../../shared/EditableH1/EditableTitle";

export const DynamicListMenu = ({ menuItems, onSave, onClose }) => {
  const [imageData, setImageData] = useState(null); // To store image information
  const [paragraphText, setParagraphText] = useState("Add description");
  const [titleText, setTitleText] = useState("Add Title");

  const handleSave = () => {
    // Pass the collected data to the onSave callback
    onSave({ image: imageData, description: paragraphText, title: titleText });
  };

  return (
    <div className="modal-overlay-dynamic-list">
      <div className="dynamic-list-modal-content">
        <ImageUploader
          width={150}
          widthValue={"px"}
          heightValue="px"
          height={100}
          onImageChange={(image) => setImageData(image)}
        ></ImageUploader>
        <EditableParagraph
          placeholder={paragraphText}
          onTextChange={setParagraphText}
          truncate={true}
        ></EditableParagraph>
        <EditableTitle
          placeholder={titleText}
          onTextChange={setTitleText}
        ></EditableTitle>
        <div className="dynamic-list-buttons">
          <CustomButton onClick={handleSave} text={"Save"}></CustomButton>
          <CustomButton onClick={onClose} text={"Close"}></CustomButton>
        </div>
      </div>
    </div>
  );
};
