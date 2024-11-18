import React, { useState } from 'react';
import './EditMenuModal.css';


export function EditMenuModal({ menuItems, onSave, onClose }) {
    const [editedMenuItems, setEditedMenuItems] = useState(menuItems);
    const [newMenuItem, setNewMenuItem] = useState(''); // State for the new item input

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
            setNewMenuItem(''); // Clear the input after adding
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
                    <button onClick={handleAdd} className="add-btn">Add</button>
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
                            <button className="delete-btn" onClick={() => handleDelete(key)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Modal Buttons */}
                <div className="modal-buttons">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
