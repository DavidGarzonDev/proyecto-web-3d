
import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'

const LoungMedicine = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/apple.glb')

  const [hovered, setHovered] = useState(false);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple.geometry}
        material={materials.AppleMaterial}
        rotation={[-Math.PI, 0, 0]}
        scale={hovered ? 0.5 : 0.4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  )
}

export default LoungMedicine

useGLTF.preload('/models-3d-cancer/apple.glb')
