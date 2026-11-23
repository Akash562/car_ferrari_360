export default function ViewerControls({ plate, setPlate }) {
  return (
    <div className="viewer-controls">
      <div>
        <label htmlFor="registration">Vehicle Registration Number</label>

        <input
          id="registration"
          type="text"
          value={plate}
          maxLength={13}
          placeholder="UP16 AB 1234"
          onChange={(e) => setPlate(e.target.value.toUpperCase())}
        />
      </div>

      <div className="plate-preview">
        <span className="ind">IND</span>
        <strong>{plate || "YOUR NUMBER"}</strong>
      </div>

      <p>
        Drag the vehicle to rotate it through 360°. Use scroll or pinch to zoom.
      </p>
    </div>
  );
}
