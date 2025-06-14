import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungCancerModelo3D from "../modelos-3d-cancer/LoungCancerModelo3D.jsx";
import Lights from "../lights-cancer/Lights.jsx";
import { OrbitControls } from "@react-three/drei";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";
import Move from "../texts/Move.jsx";
import TextSymptomsCancer from "../texts/TextSymtompsCancer.jsx";


const CanvasLoungCancer = () => {
  const [moving, setMoving] = useState(false);
  const promptText = "Cancer de Pulmon!";
  return (
    <Canvas
      className="canvas-loung-cancer"
      camera={{ position: [0, 2, 5], fov: 50 }}
      shadows={true}
      onPointerEnter={() => setMoving(true)}
      onPointerLeave={() => setMoving(false)}
    >
      <TextSymptomsCancer />
      <Move text={promptText} hidden={moving} />
      <Lights />
      <OrbitControls
        onStart={() => setMoving(true)}
        onEnd={() => setMoving(false)}
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true} 
      />
      <LoungCancerModelo3D />
      <Recipe />

    </Canvas>
  );
};

export default CanvasLoungCancer;
