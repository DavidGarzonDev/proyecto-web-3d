import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../lights-asthma/Ligths.jsx";
import Recipe from "../models-3d-asthma/Recipe.jsx";
import Person2 from "../models-3d-asthma/Person2.jsx";
import TogglePersonVideoAsthma from "../videos/TogglePersonVideoAsthma.jsx";
import TextPrevention from "../texts/TextPrevention.jsx";

const PrecautionAsthma = () => {
    return (
        <Canvas
            className="canvas-precaution-asthma"
            camera={{ position: [0, 2, 5], fov: 50 }}
            shadows
        >
            <Lights lightPosition={[-5, 5, -5]} ambIntensity={10} dirIntensity={10} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} />
            
            <Recipe />
            <TogglePersonVideoAsthma/>
            <TextPrevention />
        </Canvas>
    )
}

export default PrecautionAsthma
