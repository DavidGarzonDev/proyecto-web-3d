import React from "react";
import Lights from "../lights-asthma/Ligths";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Person from "../models-3d-asthma/Person";
import Recipe from "../models-3d-asthma/Recipe";

const SymptomsAsthma = () => {
  return (
    <Canvas
      className="canvas-symptoms-asthma"
      camera={{ position: [0, 2, 5], fov: 50 }}
      shadows={true}
    >
      <Lights />
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      <Person position={[0, -2, 0]} />
      <Recipe/>
    </Canvas>
  );
};

export default SymptomsAsthma;