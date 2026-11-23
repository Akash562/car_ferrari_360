import { useGLTF } from "@react-three/drei";
import { useMemo, useEffect } from "react";
import NumberPlate from "./NumberPlate";

const BODY_MATERIALS = [
  "Ferrari_550_Barchetta_Pininfarina_2000_by_AlexKa",
  "PLhood",
  "PLskirt",
  "PLsplitter",
  "PLdiffuser",
];

export default function CarModel({ plate, carColor = "#ffffff" }) {
  const { scene } = useGLTF("/models/car.glb");

  // Clone scene and materials so original cached model stays unchanged
  const carScene = useMemo(() => {
    const cloned = scene.clone(true);

    cloned.traverse((child) => {
      if (!child.isMesh) return;

      // Clone materials independently
      if (Array.isArray(child.material)) {
        child.material = child.material.map((mat) => mat.clone());
      } else if (child.material) {
        child.material = child.material.clone();
      }

      // Hide original number plates
      if (child.name === "Object_51" || child.name === "Object_52") {
        child.visible = false;
      }
    });

    return cloned;
  }, [scene]);

  <CarModel plate={plate} carColor={carColor} />;

  // Dynamic car paint
  useEffect(() => {
    carScene.traverse((child) => {
      if (!child.isMesh || !child.material) return;

      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];

      materials.forEach((material) => {
        if (BODY_MATERIALS.includes(material.name)) {
          material.color.set(carColor);

          // Keep realistic glossy paint
          if ("metalness" in material) {
            material.metalness = 0.25;
          }

          if ("roughness" in material) {
            material.roughness = 0.28;
          }

          if ("clearcoat" in material) {
            material.clearcoat = 1;
            material.clearcoatRoughness = 0.12;
          }

          material.needsUpdate = true;
        }
      });
    });
  }, [carScene, carColor]);

  return (
    <group>
      <primitive object={carScene} />

      {/* Front plate */}
      <group position={[0, 0.268, 2.614]}>
        <NumberPlate number={plate} width={0.55} height={0.14} />
      </group>

      {/* Rear plate */}
      <group position={[0, 0.589, -2.546]} rotation={[0, Math.PI, 0]}>
        <NumberPlate number={plate} width={0.55} height={0.14} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/cars.glb");
