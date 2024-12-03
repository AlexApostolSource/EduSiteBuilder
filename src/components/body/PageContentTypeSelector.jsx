import React, { useState } from "react";
import "./PageContentTypeSelector.css"; // Import the CSS file
import { ContentTypeModal } from "./ContentTypeModal/ContentTypeModal.JSX";
import { PageContentType } from "../../assets/shared/Shared";
import { StaticPageContent } from "./StaticPageContent/StaticPageContent";
import { DynamicList } from "./DynamicList/DynamicList";

// Main Component
export const PageContentTypeSelector = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedContentType, setSelectedContentType] = useState(null);

  const handleSelect = (type) => {
    setSelectedContentType(type);
    console.log(`Selected Content Type: ${type}`);
  };

  const renderContent = () => {
    if (selectedContentType === PageContentType.STATIC_CONTENT) {
      return <StaticPageContent />;
    }
    if (selectedContentType === PageContentType.LIST_CONTENT) {
      return <DynamicList />;
    }
    return null;
  };

  return (
    <div className="full-page">
      {/* Conditionally render the button */}
      {!selectedContentType && (
        <button
          className="full-page-button"
          onClick={() => setIsModalOpen(true)}
        >
          Select Content Type
        </button>
      )}
      <ContentTypeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelect}
      />
      {renderContent()}
    </div>
  );
};

export default PageContentTypeSelector;
