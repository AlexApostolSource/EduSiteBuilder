import "./CustomCard.css";
import { ImageUploader } from "../../body/ImgUploader/ImageUploader";
import { EditableTitle } from "../EditableH1/EditableTitle";
import { EditableParagraph } from "../../body/EditableParagraph/EditableParagraph";
import { CustomButton } from "../Button/CustomButton";

export const CustomCard = ({ title, text, image, action }) => {
  return (
    <div>
      <div className="blog-card">
        <div className="photo">
          <ImageUploader
            width={100}
            widthValue={"%"}
            height={100}
            heightValue={"%"}
            providedImage={image}
          ></ImageUploader>
        </div>

        <div className="description">
          <EditableTitle
            placeholder={title === null ? title : "Click here to edit Title"}
          ></EditableTitle>

          <EditableParagraph
            placeholder={text === null ? text : "Click here to edit paragraph"}
          ></EditableParagraph>
          <CustomButton text={"Read More"} onClick={action}></CustomButton>
        </div>
      </div>
    </div>
  );
};
