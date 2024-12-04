import "./DynamicListMenu.css";
import { useState } from "react";
import { ImageUploader } from "../../ImgUploader/ImageUploader";
import { EditableParagraph } from "../../EditableParagraph/EditableParagraph";
import { CustomButton } from "../../../shared/Button/CustomButton";
export const DynamicListMenu = ({ menuItems, onSave, onClose }) => {
  const [imageData, setImageData] = useState(null); // To store image information
  const [paragraphText, setParagraphText] = useState("Add description");

  const handleSave = () => {
    // Pass the collected data to the onSave callback
    onSave({ image: imageData, description: paragraphText });
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
        ></EditableParagraph>
        <div className="dynamic-list-buttons">
          <CustomButton onClick={handleSave} text={"Save"}></CustomButton>
          <CustomButton onClick={onClose} text={"Close"}></CustomButton>
        </div>
      </div>
    </div>
  );
};
