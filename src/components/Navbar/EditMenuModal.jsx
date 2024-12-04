import React, { useState } from "react";
import "./EditMenuModal.css";
import { CustomButton } from "../shared/Button/CustomButton";
import { ButtonType } from "../../assets/shared/Shared";

export function EditMenuModal({ menuItems, onSave, onClose }) {
  const [editedMenuItems, setEditedMenuItems] = useState(menuItems);
  const [newMenuItem, setNewMenuItem] = useState(""); // State for the new item input

  const handleChange = (key, newValue) => {
    setEditedMenuItems((prevItems) => ({
      ...prevItems,
      [key]: newValue,
    }));
  };

  const handleDelete = (key) => {
    setEditedMenuItems((prevItems) => {
      const updatedItems = { ...prevItems };
      delete updatedItems[key];
      return updatedItems;
    });
  };

  const handleAdd = () => {
    if (newMenuItem.trim()) {
      const newKey = `item-${Date.now()}`; // Unique key based on the current timestamp
      setEditedMenuItems((prevItems) => ({
        ...prevItems,
        [newKey]: newMenuItem.trim(),
      }));
      setNewMenuItem(""); // Clear the input after adding
    }
  };

  const handleSave = () => {
    onSave(editedMenuItems);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Menu Items</h2>

        {/* Add New Item Section */}
        <div className="add-item">
          <input
            type="text"
            value={newMenuItem}
            onChange={(e) => setNewMenuItem(e.target.value)}
            placeholder="Add new menu item"
          />
          <CustomButton
            onClick={handleAdd}
            text={"Add"}
            buttonType={ButtonType.green}
          ></CustomButton>
        </div>

        {/* Menu List */}
        <ul className="modal-menu-list">
          {Object.entries(editedMenuItems).map(([key, value]) => (
            <li key={key} className="modal-menu-item">
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange(key, e.target.value)}
              />
              <CustomButton
                onClick={() => handleDelete(key)}
                text={"Delete"}
                buttonType={ButtonType.red}
              ></CustomButton>
            </li>
          ))}
        </ul>

        {/* Modal Buttons */}
        <div className="modal-buttons">
          <CustomButton onClick={handleSave} text={"Save"}></CustomButton>
          <CustomButton onClick={onClose} text={"Cancel"}></CustomButton>
        </div>
      </div>
    </div>
  );
}
