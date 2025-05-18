
import React, { useRef, useCallback, useState } from 'react'
import { useGLTF } from '@react-three/drei'



const useAudio = () => {
  const audioRef = useRef(null);
  const playSquishSound = useCallback(() => {
    try {
      if (!audioRef.current) {
        const audioContext = new Audio('/sounds/tos.mp3');
        audioContext.play();
        return; 
      }
    } catch (error) {
      console.error("Error reproduciendo sonido:", error);
    }
  }, []);
  return { playSquishSound };
};

const LoungSymptoms = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/rag-with-blood.glb');
  const { playSquishSound } = useAudio();
  const [hovered, setHovered] = useState(false);
  
  
  const handleClick = () => {
    playSquishSound();
  };

  return (
    <group {...props} dispose={null}>      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RagWithBlood.geometry}
        material={materials.RagWithBloodMaterial}
        rotation={[-Math.PI / 2, -1.6, 5]}
        scale={hovered ? 6.4 : 6}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  )
}

export default LoungSymptoms

useGLTF.preload('/models-3d-cancer/rag-with-blood.glb')
