import "./DynamicList.css";
import React from "react";
import { useState } from "react";
import { DynamicListMenu } from "./DynamicListMenu/DynamicListMenu";

export const DynamicList = ({ isPreviewing }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openEditMenuModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2>Dynamic list</h2>
      <button onClick={openEditMenuModal}>Add item</button>
      {isModalOpen && <DynamicListMenu />}
    </div>
  );
};
