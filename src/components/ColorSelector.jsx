const colors = [
  { name: "Rosso Red", value: "#b51224" },
  { name: "Pearl White", value: "#f2f2ee" },
  { name: "Midnight Black", value: "#17191c" },
  { name: "Metallic Blue", value: "#174b80" },
  { name: "Silver", value: "#9da3aa" },
  { name: "Racing Yellow", value: "#e9b92e" },
  { name: "British Green", value: "#174b38" },
  { name: "Orange", value: "#d95b20" },
];

export default function ColorSelector({ selectedColor, setSelectedColor }) {
  return (
    <div className="color-selector">
      <h3>Exterior Color</h3>

      <div className="color-grid">
        {colors.map((color) => (
          <button
            key={color.value}
            type="button"
            title={color.name}
            onClick={() => setSelectedColor(color.value)}
            className={`color-option ${
              selectedColor === color.value ? "active" : ""
            }`}
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>

      <p className="selected-color">
        Selected:{" "}
        {colors.find((c) => c.value === selectedColor)?.name || selectedColor}
      </p>
    </div>
  );
}
