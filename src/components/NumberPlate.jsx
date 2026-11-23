import { useEffect, useMemo } from "react";
import * as THREE from "three";

export default function NumberPlate({ number, width = 0.52, height = 0.12 }) {
  const { canvas, texture } = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 1040;
    canvas.height = 220;
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    return { canvas, texture };
  }, []);

  useEffect(() => {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 1040, 220);

    ctx.strokeStyle = "#111111";
    ctx.lineWidth = 8;
    ctx.strokeRect(4, 4, 1032, 212);

    // Blue IND strip
    // ctx.fillStyle = "#174a91";
    // ctx.fillRect(8, 8, 105, 204);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 48px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.save();
    ctx.translate(60, 110);
    ctx.rotate(-Math.PI / 2);
    // ctx.fillText("IND", 0, 0);
    ctx.restore();

    // Registration number
    ctx.fillStyle = "#111111";
    ctx.font = "bold 105px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(number.toUpperCase(), 575, 110, 875);
    texture.needsUpdate = true;
  }, [number, canvas, texture]);

  useEffect(() => {
    return () => texture.dispose();
  }, [texture]);

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.55}
        metalness={0}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}
