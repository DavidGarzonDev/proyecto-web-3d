import React from "react";
import { Canvas } from "@react-three/fiber";
import Lungs from "../models-3d-asthma/Lungs";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls } from "@react-three/drei";

const CanvasAsthma = () => {
  return (
    <Canvas className="canvas-asthma" camera={{ position: [0, 2, 5], fov: 50 }}>
      
      <OrbitControls
        enableZoom={true} 
        enablePan={true} 
        enableRotate={true} 
      />
      <Lungs position={[0, 0, 0]} />
      <Lights/>
    </Canvas>
    
  );
};

export default CanvasAsthma;