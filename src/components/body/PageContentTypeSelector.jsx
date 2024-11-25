import React, { useState } from "react";
import "./PageContentTypeSelector.css"; // Import the CSS file
import { ContentTypeModal } from "./ContentTypeModal/ContentTypeModal.JSX";
import { PageContentType } from "../../assets/shared/Shared";
import { StaticPageContent } from "./StaticPageContent/StaticPageContent";
// Main Component
export const PageContentTypeSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState(null);

  const handleSelect = (type) => {
    setSelectedContentType(type);
    console.log(`Selected Content Type: ${type}`);
  };

  return (
    <div className="full-page">
      <button className="full-page-button" onClick={() => setIsModalOpen(true)}>
        Select Content Type
      </button>
      <ContentTypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelect}
      />
      {selectedContentType === PageContentType.STATIC_CONTENT ? (
        <StaticPageContent />
      ) : (
        <p>Dynamic list </p>
      )}
    </div>
  );
};

export default PageContentTypeSelector;
