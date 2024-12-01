import "./ImageUploader.css";
import { useEffect, useState } from "react";

export const ImageUploader = ({
  isPreviewing,
  width,
  widthValue,
  height,
  heightValue,
}) => {
  const [image, setImage] = useState(null); // Placeholder image

  // Fetch placeholder image on component mount
  useEffect(() => {
    const fetchPlaceholderImage = async () => {
      try {
        const response = await fetch(
          "https://via.placeholder.com/800x400?text=Placeholder+Image"
        );
        if (response.ok) {
          setImage(response.url); // Set the placeholder image URL
        } else {
          console.error("Failed to fetch placeholder image");
        }
      } catch (error) {
        console.error("Error fetching placeholder image:", error);
      }
    };

    fetchPlaceholderImage();
  }, []);

  const handleImageChange = (e) => {
    if (isPreviewing) {
      return;
    }
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Update state with the uploaded image
      };
      reader.readAsDataURL(file); // Read the image file as a base64 data URL
    }
  };

  return (
    <div>
      <img
        src={image || "https://via.placeholder.com/800x400?text=Loading..."} // Show loading placeholder if image is null
        alt="Uploaded"
        className="image-preview"
        style={{
          maxWidth: `${width}${widthValue}`,
          maxHeight: `${height}${heightValue}`,
        }}
      />
      <input
        id="imageUpload"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
    </div>
  );
};
