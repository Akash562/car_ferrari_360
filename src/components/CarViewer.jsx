import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Environment,
  ContactShadows,
  Html,
  useProgress,
} from "@react-three/drei";

import CarModel from "./CarModel";

function LoadingScreen() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          background: "white",
          padding: "15px 25px",
          borderRadius: "10px",
          color: "#111",
          whiteSpace: "nowrap",
          fontSize: "14px",
        }}
      >
        Loading car... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export default function CarViewer({ plate, carColor }) {
  return (
    <div className="car-canvas">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 1.5, 6.5],
          fov: 40,
          near: 0.1,
          far: 100,
        }}
      >
        <color attach="background" args={["#f1f3f6"]} />

        {/* Lighting */}
        <ambientLight intensity={1.2} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        <directionalLight position={[-5, 3, -5]} intensity={1} />

        <Suspense fallback={<LoadingScreen />}>
          <CarModel plate={plate} carColor={carColor} />

          <Environment preset="city" />

          <ContactShadows
            position={[0, -0.02, 0]}
            opacity={0.4}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>

        {/* 360-degree interaction */}
        <OrbitControls
          makeDefault
          enableDamping
          dampingFactor={0.08}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          minDistance={5}
          maxDistance={5}
          maxPolarAngle={Math.PI * 0.85}
          minPolarAngle={0.2}
          target={[0, 0.65, 0]}
        />
      </Canvas>
    </div>
  );
}
