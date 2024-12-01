import React from "react";
import "./Footer.css";
import { ImageUploader } from "../ImgUploader/ImageUploader";
import { EditableParagraph } from "../EditableParagraph/EditableParagraph";

export const CustomFooter = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-image">
        <ImageUploader
          width={150}
          widthValue={"px"}
          heightValue="px"
          height={100}
        ></ImageUploader>
      </div>

      <div className="contact-footer">
        <h2>Contact</h2>
        <EditableParagraph
          placeholder={"Click here to add contact"}
        ></EditableParagraph>
        <EditableParagraph
          placeholder={"Click here to add contact"}
        ></EditableParagraph>
        <EditableParagraph
          placeholder={"Click here to add contact"}
        ></EditableParagraph>
      </div>
    </footer>
  );
};
