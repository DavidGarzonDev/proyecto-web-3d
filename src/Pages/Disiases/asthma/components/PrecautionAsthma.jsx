import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "../lights-asthma/Ligths.jsx";
import Person from "../models-3d-asthma/Person.jsx";


const PrecautionAsthma = () => {
    return (
        <Canvas
            className="canvas-precaution-asthma"
            shadows
            camera={{ position: [-15, 6, 5], fov: 25 }}

        >
            <Lights lightPosition={[-5, 5, -5]} ambIntensity={10} dirIntensity={10} />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <Person />
        </Canvas>
    )
}

export default PrecautionAsthma