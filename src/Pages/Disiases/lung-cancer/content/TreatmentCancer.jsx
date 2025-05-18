import React, { useMemo, useState, useEffect } from "react";
import Lights from "../lights-cancer/Lights.jsx";
import { KeyboardControls, OrbitControls, useKeyboardControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "../lungCancer.css";
import LoungTreatmentCancer from "../modelos-3d-cancer/LoungTreatmentCancer.jsx";
import Recipe from "../modelos-3d-cancer/Recipe.jsx";
import { Text } from "@react-three/drei";
import VideoTreatmentCancer from "../videos/VideoTreatmentCancer.jsx";


const VideoController = ({ onVideoToggle, isVideoVisible }) => {
  const [subscribeKeys] = useKeyboardControls();
  
  
  useEffect(() => {
    const unsubscribePlay = subscribeKeys(
      (state) => state.play,
      (pressed) => {
        if (pressed) {
          onVideoToggle();
        }
      }
    );
    
    return () => {
      unsubscribePlay();
    };
  }, [subscribeKeys, onVideoToggle]);

  return (
    <>
      <VideoTreatmentCancer isVisible={isVideoVisible} />
    </>
  );
};

const TreatmentCancer = () => {
  const [showVideo, setShowVideo] = useState(false);
  
  const toggleVideo = () => {
    setShowVideo(prev => !prev);
  };
  
  const controls = useMemo(
    () => [
      { name: "play", keys: ["KeyP"] },
    ],
    []
  )
  return (
    <KeyboardControls map={controls} >
      <Canvas
        className="canvas-treatment-cancer"
        shadows={true}                   
        camera={{ position: [0, 2, 5], fov: 50 }}
      >        <Lights lightPosition={[5, 5, 7]} />        <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} enableDamping={false} />
        <LoungTreatmentCancer  visible={!showVideo}/>
        <Recipe position={[0, 0, 0]}/>
        
        <VideoController 
          onVideoToggle={toggleVideo} 
          isVideoVisible={showVideo} 
        />
        
        <Text
          
          position={[0, -1.5, 0.2]}
          fontSize={0.15}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          
          outlineColor="#333333"
        >
          {`Presiona P aqui para ${showVideo ? 'ocultar' : 'ver'} el video de tratamientos`}
        </Text>
      </Canvas>
    </KeyboardControls>
  );
};

export default TreatmentCancer;
