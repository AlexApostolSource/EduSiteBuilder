import React, { useState } from "react";
import "./Navbar.css";
import { EditMenuModal } from "./EditMenuModal";
import { Actions } from "../../assets/shared/Shared";
import { ImageUploader } from "../body/ImgUploader/ImageUploader";
import { MenuItem } from "../../assets/shared/Shared";
import { MenuSubItem } from "../../assets/shared/Shared";
import { useNavigate, Link } from "react-router-dom";

export function Navbar({ onClickPreview, action }) {
  const navigate = useNavigate(); // Initialize navigate hook

  const formatPath = (name) => `/${name.toLowerCase().replace(/\s+/g, "-")}`; // Generate dynamic paths

  const menuItemWithoutSubitem = {
    ...MenuItem,
    name: "Home",
  };

  const menuItemWithSubitem = {
    ...MenuItem,
    name: "About",
    subitems: {
      subitem1: {
        ...MenuSubItem,
        name: "About Subitem 1",
        id: 1,
      },
      subitem2: {
        ...MenuSubItem,
        name: "About Subitem 2",
        id: 2,
      },
      subitem3: {
        ...MenuSubItem,
        name: "About Subitem 3",
        id: 3,
      },
    },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [navVisibile, setNavVisible] = useState(false);
  const [menuItems, setMenuItems] = useState({
    home: menuItemWithoutSubitem,
    about: menuItemWithSubitem,
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

  const handleNavigation = (name, parentName = "") => {
    const path = parentName
      ? `${formatPath(parentName)}${formatPath(name)}`
      : formatPath(name);
    navigate(path); // Navigate to dynamically generated path
    setNavVisible(false); // Optionally close the menu after navigation
  };

  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      ></link>
      <div className="navbar-logo">
        <ImageUploader
          width={150}
          widthValue={"px"}
          height={150}
          heightValue={"px"}
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
            Cerrar Menu
          </button>
          {Object.entries(menuItems).map(([key, menuItem]) => (
            <li key={key} className={menuItem.subitems ? "has-subitems" : ""}>
              <button
                className="nav-button"
                onClick={() => handleNavigation(menuItem.name)}
              >
                {menuItem.name}
              </button>

              {/* Dropdown for subitems */}
              {menuItem.subitems && (
                <ul className="dropdown">
                  {Object.entries(menuItem.subitems).map(
                    ([subKey, subItem]) => (
                      <li key={subKey}>
                        <button
                          className="nav-button"
                          onClick={() =>
                            handleNavigation(subItem.name, menuItem.name)
                          }
                        >
                          {subItem.name}
                        </button>
                      </li>
                    )
                  )}
                </ul>
              )}
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
