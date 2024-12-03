import "./ListItem.css";

import React from "react";
import { useNavigate } from "react-router-dom";

export const ListItem = ({ index, item }) => {
  const navigate = useNavigate();

  const openStaticPage = () => {
    const itemTitleSlug = item.title
      ? item.title.toLowerCase().replace(/\s+/g, "-") // Convert to slug
      : `item-${index}`;
    navigate(`/${itemTitleSlug}`, {
      state: { providedImage: item.image, providedText: item.description },
    });
  };

  return (
    <div onClick={openStaticPage} style={{ cursor: "pointer" }}>
      <h1>{item.title || "Item Title"}</h1>
      <img
        src={item.image || "https://via.placeholder.com/150"}
        alt={`Item ${index}`}
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
      <p>{item.description || "No description provided"}</p>
    </div>
  );
};
