import "./CustomButton.css";
import { ButtonType } from "../../../assets/shared/Shared";

export const CustomButton = ({ onClick, text, buttonType }) => {
  const buttonClassname = () => {
    if (buttonType == null) {
      return "button-34";
    }
    console.log(buttonType);
    if (buttonType === ButtonType.blue) {
      return "button-34";
    } else if (buttonType === ButtonType.red) {
      return "button-42";
    } else {
      return "button-41";
    }

    console.log(buttonClassname());
  };
  return (
    <button className={buttonClassname()} onClick={onClick}>
      {text}
    </button>
  );
};
