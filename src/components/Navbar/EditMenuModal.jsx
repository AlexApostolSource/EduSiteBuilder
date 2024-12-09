import React, { useState } from "react";
import "./EditMenuModal.css";
import { CustomButton } from "../shared/Button/CustomButton";
import { ButtonType } from "../../assets/shared/Shared";

export function EditMenuModal({ menuItems, onSave, onClose }) {
  const [editedMenuItems, setEditedMenuItems] = useState(menuItems);
  const [newMenuItem, setNewMenuItem] = useState("");
  const [newSubitem, setNewSubitem] = useState({});

  const handleChange = (key, newValue, isSubitem = false, subKey = null) => {
    setEditedMenuItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (isSubitem && subKey) {
        updatedItems[key].subitems[subKey].name = newValue;
      } else {
        updatedItems[key].name = newValue;
      }
      return updatedItems;
    });
  };

  const handleDelete = (key, isSubitem = false, subKey = null) => {
    setEditedMenuItems((prevItems) => {
      const updatedItems = { ...prevItems };
      if (isSubitem && subKey) {
        delete updatedItems[key].subitems[subKey];
      } else {
        delete updatedItems[key];
      }
      return updatedItems;
    });
  };

  const handleAddMenuItem = () => {
    if (newMenuItem.trim()) {
      const newKey = `item-${Date.now()}`;
      setEditedMenuItems((prevItems) => ({
        ...prevItems,
        [newKey]: { name: newMenuItem.trim(), subitems: {} },
      }));
      setNewMenuItem("");
    }
  };

  const handleAddSubitem = (parentKey) => {
    if (newSubitem[parentKey]?.trim()) {
      const newSubKey = `subitem-${Date.now()}`;
      setEditedMenuItems((prevItems) => {
        const updatedItems = { ...prevItems };

        // Initialize subitems if not already present
        if (!updatedItems[parentKey].subitems) {
          updatedItems[parentKey].subitems = {};
        }

        updatedItems[parentKey].subitems[newSubKey] = {
          name: newSubitem[parentKey].trim(),
        };
        return updatedItems;
      });

      setNewSubitem((prevSubitem) => ({
        ...prevSubitem,
        [parentKey]: "",
      }));
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
            onClick={handleAddMenuItem}
            text={"Add"}
            buttonType={ButtonType.green}
          />
        </div>

        {/* Menu List */}
        <ul className="modal-menu-list">
          {Object.entries(editedMenuItems).map(([key, menuItem]) => (
            <li key={key} className="modal-menu-item">
              <input
                type="text"
                value={menuItem.name}
                onChange={(e) => handleChange(key, e.target.value)}
              />
              <CustomButton
                onClick={() => handleDelete(key)}
                text={"Delete"}
                buttonType={ButtonType.red}
              />

              {/* Subitems List */}
              <div className="subitem-section">
                {menuItem.subitems &&
                  Object.entries(menuItem.subitems).map(
                    ([subKey, menuSubitem]) => (
                      <div key={subKey} className="modal-subitem">
                        <input
                          type="text"
                          value={menuSubitem.name}
                          onChange={(e) =>
                            handleChange(key, e.target.value, true, subKey)
                          }
                        />
                        <CustomButton
                          onClick={() => handleDelete(key, true, subKey)}
                          text={"Delete Subitem"}
                          buttonType={ButtonType.red}
                        />
                      </div>
                    )
                  )}

                {/* Add New Subitem */}
                <div className="add-subitem">
                  <input
                    type="text"
                    value={newSubitem[key] || ""}
                    onChange={(e) =>
                      setNewSubitem((prevSubitem) => ({
                        ...prevSubitem,
                        [key]: e.target.value,
                      }))
                    }
                    placeholder="Add new subitem"
                  />
                  <CustomButton
                    onClick={() => handleAddSubitem(key)}
                    text={"Add Subitem"}
                    buttonType={ButtonType.green}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Modal Buttons */}
        <div className="modal-buttons">
          <CustomButton onClick={handleSave} text={"Save"} />
          <CustomButton onClick={onClose} text={"Cancel"} />
        </div>
      </div>
    </div>
  );
}
