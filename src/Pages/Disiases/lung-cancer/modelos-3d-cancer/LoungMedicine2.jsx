
import React, { useState } from 'react'
import { useGLTF } from '@react-three/drei'

const LoungMedicine2 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/banana.glb')
  const [hovered, setHovered] = useState(false);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Banana.geometry}
        material={materials.BananaMaterial}
        scale={hovered ? 0.5 : 0.4}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    </group>
  )
}

export default LoungMedicine2

useGLTF.preload('/models-3d-cancer/banana.glb')
