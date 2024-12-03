import "./ListItem.css";

export const ListItem = ({ index, item }) => {
  return (
    <div key={index} className="grid-item">
      <img
        src={item.image || "https://via.placeholder.com/150"}
        alt={`Item ${index}`}
        style={{ maxWidth: "100px", maxHeight: "100px" }}
      />
      <p>{item.description || "No description provided"}</p>
    </div>
  );
};
