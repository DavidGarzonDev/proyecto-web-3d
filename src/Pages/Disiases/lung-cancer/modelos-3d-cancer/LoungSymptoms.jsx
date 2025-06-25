
import React, { useRef, useCallback, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

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
  const [isRotating, setIsRotating] = useState(false);
  const modelRef = useRef();
  
  const handleClick = () => {
    playSquishSound();
  };
  
  // Manejar eventos de teclado
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Tecla "R" para activar/desactivar rotación
      if (event.key.toLowerCase() === 'r') {
        setIsRotating(prevState => !prevState);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    
    // Limpieza del event listener
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  
  // Aplicar rotación al modelo cuando isRotating es true
  useFrame((state, delta) => {
    if (isRotating && modelRef.current) {
      // Rotar el modelo sobre su eje Y
      modelRef.current.rotation.y += delta * 2; // Velocidad de rotación ajustable
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef}>
      <mesh
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
