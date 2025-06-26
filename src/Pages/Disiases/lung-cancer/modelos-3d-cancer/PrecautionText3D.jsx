import React, { useRef, useState } from 'react'
import { Text3D, Center } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const PrecautionText3D = ({ position = [0, -3, 0], rotation = [0, 0, 0] }) => {
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      textRef.current.rotation.y = rotation[1] + Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })
  
  return (
    <group position={position} rotation={rotation}>
      <Center ref={textRef}>
        <Text3D
          castShadow
          font="/fonts/Heavitas.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {`¡Una dieta saludable\npreviene el cáncer!`}
          <meshStandardMaterial 
            color={hovered ? "#ff6347" : "#e74c3c"} 
            metalness={0.3}
            roughness={0.2}
            emissive={hovered ? "#ff6347" : "#e74c3c"}
            emissiveIntensity={hovered ? 0.5 : 0.2}
          />
        </Text3D>
      </Center>
    </group>
  )
}

export default PrecautionText3D
