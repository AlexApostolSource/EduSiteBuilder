import "./ImageUploader.css";
import { useEffect, useState } from "react";

export const ImageUploader = ({
  isPreviewing,
  width,
  widthValue,
  height,
  heightValue,
  onImageChange,
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
    console.log("handleImageClick triggered");
    if (isPreviewing) {
      console.log("Previewing is enabled, no action taken.");
      return;
    }

    const file = e.target.files[0];
    if (file) {
      console.log("File selected:", file);

      const reader = new FileReader();

      reader.onloadend = () => {
        console.log("FileReader result:", reader.result);
        setImage(reader.result); // Update state with the uploaded image
        if (onImageChange) {
          console.log("Calling onImageChange with:", reader.result);
          onImageChange(reader.result);
        }
      };

      reader.readAsDataURL(file); // Read the image file as a base64 data URL
    } else {
      console.warn("No file was selected.");
    }
  };

  return (
    <label>
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
    </label>
  );
};
