import "./ListItem.css";

import React from "react";
import { useNavigate } from "react-router-dom";
import { CustomCard } from "../../../shared/CustomCard/CustomCard";

export const ListItem = ({ index, item, isPreviewing }) => {
  const navigate = useNavigate();

  const openStaticPage = () => {
    if (isPreviewing) {
      return;
    }
    console.log("IsPreviewng: ", isPreviewing);
    const itemTitleSlug = item.title
      ? item.title.toLowerCase().replace(/\s+/g, "-") // Convert to slug
      : `item-${index}`;
    navigate(`/${itemTitleSlug}`, {
      state: { providedImage: item.image, providedText: item.description },
    });
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <CustomCard
        title={item.title}
        image={item.image || "https://via.placeholder.com/150"}
        text={item.description}
        action={openStaticPage}
      ></CustomCard>
    </div>
  );
};
