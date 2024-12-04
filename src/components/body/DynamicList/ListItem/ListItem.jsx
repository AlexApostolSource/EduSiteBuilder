import "./ListItem.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomCard } from "../../../shared/CustomCard/CustomCard";

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
      <CustomCard
        title={item.title}
        image={item.image || "https://via.placeholder.com/150"}
        text={item.description}
      ></CustomCard>
    </div>
  );
};
