import "./DynamicList.css";
import { useState } from "react";
import { DynamicListMenu } from "./DynamicListMenu/DynamicListMenu";
import { ListItem } from "./ListItem/ListItem";
import { CustomButton } from "../../shared/Button/CustomButton";

export const DynamicList = ({ isPreviewing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]); // State to store saved items

  const openEditMenuModal = () => {
    setIsModalOpen(true);
  };

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = (data) => {
    // Save the new item in the items array
    setItems((prevItems) => [...prevItems, data]);
    onClose();
  };

  return (
    <div className="list-content">
      <div className="add-item-button">
        <CustomButton
          onClick={openEditMenuModal}
          text={"Add item"}
        ></CustomButton>
      </div>

      {/* Modal for adding items */}
      {isModalOpen && <DynamicListMenu onClose={onClose} onSave={handleSave} />}

      {/* Display items in the grid-list */}
      <div className="grid-list">
        {items.map((item, index) => (
          <ListItem index={index} item={item} isPreviewing={isPreviewing} />
        ))}
      </div>
    </div>
  );
};
