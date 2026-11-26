import { useState } from "react";

import CarViewer from "./components/CarViewer";
import ViewerControls from "./components/ViewerControls";
import ColorSelector from "./components/ColorSelector";

import "./styles/car-viewer.css";

export default function App() {
  const [plate, setPlate] = useState("UP16 AB 1234");
  const [carColor, setCarColor] = useState("#b51224");

  return (
    <main className="app">
      <header className="app-header">
        <div>
          <h1>360 Car Viewer</h1>
        </div>
        <span className="live-status">3D EXPERIENCE</span>
      </header>

      <section className="configurator">
        <div className="viewer-section">
          <CarViewer plate={plate} carColor={carColor} />
        </div>

        <aside className="settings-section">
          <h2>Customize Your Car</h2>

          <ColorSelector
            selectedColor={carColor}
            setSelectedColor={setCarColor}
          />

          <hr />

          <ViewerControls plate={plate} setPlate={setPlate} />
        </aside>
      </section>
    </main>
  );
}
