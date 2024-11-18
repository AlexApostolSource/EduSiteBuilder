import React, { useState } from "react";
import "./Navbar.css";
import { EditMenuModal } from "./EditMenuModal";
import { LogoUploader } from "./LogoUploader";

const Actions = {
  PREVIEW: "Preview",
  EDIT: "Edit",
};

export function Navbar() {
  const [action, setAction] = useState(Actions.PREVIEW);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuItems, setMenuItems] = useState({
    home: "Home",
    about: "About",
    partners: "Partners",
    activities: "Activities",
    meetings: "Meetings",
    materials: "Dissemination Materials",
    contact: "Contact",
  });

  const handleOnClickPreview = () => {
    setAction((prev) =>
      prev === Actions.EDIT ? Actions.PREVIEW : Actions.EDIT
    );
  };

  const openEditMenuModal = () => {
    if (action === Actions.PREVIEW) {
      setIsModalOpen(true);
    }
  };

  const handleSave = (updatedMenuItems) => {
    setMenuItems(updatedMenuItems);
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <LogoUploader
          className="logo-image"
          isPreviewing={action === Actions.EDIT}
        />
      </div>
      <ul className="navbar-links" onClick={openEditMenuModal}>
        {Object.entries(menuItems).map(([key, name]) => (
          <li key={key}>
            <a href="#">{name}</a>
          </li>
        ))}
      </ul>
      <div className="navbar-signup">
        <button className="preview-button" onClick={handleOnClickPreview}>
          {action}
        </button>
      </div>
      {isModalOpen && (
        <EditMenuModal
          menuItems={menuItems}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </nav>
  );
}
