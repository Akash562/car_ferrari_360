# 🚗 3D Car Configurator

An interactive 3D Car Configurator built using **React, Vite, and Three.js**. Users can explore a car in 360 degrees, customize its exterior paint color, and dynamically change the vehicle registration number.

The application uses a GLB 3D model to provide a realistic car-viewing experience with interactive camera controls and real-time customization.

## ✨ Features

### 1. Interactive 360° Car Viewer

- Display a realistic 3D car model.
- Rotate the car using mouse drag or touch gestures.
- Zoom in and out.
- Change camera angles.
- Smooth camera rotation with damping.
- Responsive 3D viewer for desktop and mobile.

### 2. Dynamic Number Plate

- Change the vehicle registration number instantly.
- Automatically update front and rear number plates.
- Realistic Indian-style registration plate.
- White plate background with black registration text.
- Blue IND section.
- 3D number plate texture using Three.js CanvasTexture.
- Hide original number plate meshes from the GLB model.

### 3. Dynamic Car Color Customization

- Change the car's exterior color instantly.
- Multiple predefined color options.
- Real-time material color updates.
- Preserve original car geometry.
- Maintain separate materials for vehicle components.

Available colors:

| Color          | Hex Code  |
| -------------- | --------- |
| Rosso Red      | `#b51224` |
| Pearl White    | `#f2f2ee` |
| Midnight Black | `#17191c` |
| Metallic Blue  | `#174b80` |
| Silver         | `#9da3aa` |
| Racing Yellow  | `#e9b92e` |
| British Green  | `#174b38` |
| Orange         | `#d95b20` |

### 4. 3D Rendering

- Realistic lighting.
- Environment reflections.
- Contact shadows.
- GLB model support.
- Optimized rendering using React Three Fiber.

## 🛠 Technology Stack

| Technology        | Purpose                           |
| ----------------- | --------------------------------- |
| React             | Frontend UI                       |
| Vite              | Development server and build tool |
| Three.js          | 3D rendering engine               |
| React Three Fiber | React integration for Three.js    |
| @react-three/drei | 3D helpers and controls           |
| GLTF / GLB        | 3D car model format               |
| CanvasTexture     | Dynamic number plate rendering    |
| CSS3              | Responsive interface and styling  |

## 📦 Installation

### Prerequisites

- Node.js
- npm
- Modern web browser

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd car-configurator
```

### 3. Install dependencies

```bash
npm install
```

### 4. Install 3D dependencies

```bash
npm install three @react-three/fiber @react-three/drei
```

### 5. Start development server

```bash
npm run dev
```

Open the local development URL provided by Vite.

## 📁 Project Structure

```text
car-configurator/
│
├── public/
│   └── models/
│       └── cars.glb
│
├── src/
│   │
│   ├── components/
│   │   ├── CarViewer.jsx
│   │   ├── CarModel.jsx
│   │   ├── NumberPlate.jsx
│   │   ├── ViewerControls.jsx
│   │   └── ColorSelector.jsx
│   │
│   ├── styles/
│   │   └── car-viewer.css
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 🚘 3D Model Configuration

Place your car model inside:

```text
public/models/cars.glb
```

The application loads the model using React Three Fiber and Drei's `useGLTF` hook.

```jsx
const { scene } = useGLTF("/models/cars.glb");
```

### Number Plate Configuration

The original car model contains two number plate meshes:

- `Object_51` – Front number plate.
- `Object_52` – Rear number plate.

These original meshes are hidden and replaced with dynamically generated 3D number plates.

Current configuration:

| Property   | Front |   Rear |
| ---------- | ----: | -----: |
| X Position |     0 |      0 |
| Y Position | 0.268 |  0.589 |
| Z Position | 2.614 | -2.546 |
| Width      |  0.55 |   0.55 |
| Height     |  0.14 |   0.14 |

These coordinates are specific to the current car model and may need adjustment if a different GLB model is used.

## 🎨 Car Color Customization

The application updates the car's body materials dynamically.

The current body material names are:

```javascript
const BODY_MATERIALS = [
  "Ferrari_550_Barchetta_Pininfarina_2000_by_AlexKa",
  "PLhood",
  "PLskirt",
  "PLsplitter",
  "PLdiffuser",
];
```

The selected color is applied to the matching materials without reloading the 3D model.

Example:

```jsx
<CarModel plate={plate} carColor={carColor} />
```

## 🔢 Dynamic Number Plate

The registration number is controlled through React state.

```jsx
const [plate, setPlate] = useState("UP16 AB 1234");
```

The number plate texture is generated using the HTML Canvas API and updated whenever the registration number changes.

Example:

```jsx
<NumberPlate number={plate} width={0.55} height={0.14} />
```

## 🎮 3D Camera Controls

The project uses Drei's `OrbitControls`.

Supported interactions:

| Interaction     | Action               |
| --------------- | -------------------- |
| Mouse drag      | Rotate car           |
| Touch drag      | Rotate car           |
| Mouse wheel     | Zoom                 |
| Touch pinch     | Zoom                 |
| Camera movement | Change viewing angle |

## 🏗 Production Build

Create an optimized production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

The production files will be generated inside:

```text
dist/
```

Deploy the contents of the `dist` folder to your hosting provider.

## ⚙️ Customization Opportunities

Possible future improvements:

- Metallic, matte, pearl, and gloss paint finishes.
- Custom HEX color picker.
- Multiple car models.
- Different wheel and alloy options.
- Interior 3D visualization.
- Open and close doors.
- Headlight and taillight controls.
- Save and load car configurations.
- Download customized car screenshots.
- Mobile optimization.
- Realistic Indian number plate formats.

## 📌 Important Notes

1. The GLB model must be available at `public/models/cars.glb`.
2. Material names must match the names configured in `CarModel.jsx`.
3. Number plate coordinates are model-specific.
4. Original plate meshes must be hidden to prevent overlapping.
5. For realistic paint customization, body paint materials should be separated from glass, tyres, chrome, and plastic components.
6. The current number plate is a visual customization feature, not an official vehicle registration service.

## 📄 License

Specify the license for this project and ensure you have permission to use and distribute the 3D car model and its associated assets.

---

**Developed with React + Vite + Three.js**

Interactive 3D Car Experience | Dynamic Number Plate | Real-Time Color Customization
