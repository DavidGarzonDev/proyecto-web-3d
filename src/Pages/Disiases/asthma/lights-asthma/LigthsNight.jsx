import React, { useRef } from "react";

const LightsNight = () => {
  const directionalLightRef = useRef(null);

  return (
    <>
      <ambientLight
        color="white"
        intensity={0.2}
      />
      <directionalLight
        ref={directionalLightRef}
        color="white"
        intensity={2}
        castShadow
        position={[4, 3, 0]}

        
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-bias={-0.0001}
      />
    </>
  );
};

export default LightsNight;
