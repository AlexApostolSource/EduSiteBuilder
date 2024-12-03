import "./DynamicListMenu.css";
import { useState } from "react";
import { ImageUploader } from "../../ImgUploader/ImageUploader";
import { EditableParagraph } from "../../EditableParagraph/EditableParagraph";
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
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
