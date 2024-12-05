import React, { useState } from "react";
import "./Navbar.css";
import { EditMenuModal } from "./EditMenuModal";
import { LogoUploader } from "./LogoUploader";
import { Actions } from "../../assets/shared/Shared";

export function Navbar({ onClickPreview, action }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navVisibile, setNavVisible] = useState(false);
  const [menuItems, setMenuItems] = useState({
    home: "Home",
    about: "About",
    partners: "Partners",
    activities: "Activities",
    meetings: "Meetings",
    materials: "Dissemination Materials",
    contact: "Contact",
  });

  const toggleNav = () => {
    setNavVisible(!navVisibile);
  };

  const handleOnClickPreview = () => {
    onClickPreview();
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
    <header>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      ></link>
      <div className="navbar-logo">
        <LogoUploader
          className="logo-image"
          isPreviewing={action === Actions.EDIT}
        />
      </div>
      <button
        className={navVisibile ? "abrir-menu-visible" : "abrir-menu"}
        onClick={toggleNav}
      >
        <i className="bi bi-list"></i>
      </button>
      <nav className={navVisibile ? `nav.visible` : `navbar`}>
        <ul className="navbar-links" onClick={openEditMenuModal}>
          <button
            className={navVisibile ? "cerrar-menu-visible" : "cerrar-menu"}
            onClick={toggleNav}
          >
            {" "}
            Cerrar Menu
          </button>
          {Object.entries(menuItems).map(([key, name]) => (
            <li key={key}>
              <a href="#">{name}</a>
            </li>
          ))}
        </ul>
        {isModalOpen && (
          <EditMenuModal
            menuItems={menuItems}
            onSave={handleSave}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </nav>
      <div className="navbar-signup">
        <button className="preview-button" onClick={handleOnClickPreview}>
          {action}
        </button>
      </div>
    </header>
  );
}
