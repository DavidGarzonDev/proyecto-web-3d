
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LoungMedicine = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/apple.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple.geometry}
        material={materials.AppleMaterial}
        rotation={[-Math.PI, 0, 0]}
        scale={0.5}
      />
    </group>
  )
}

export default LoungMedicine

useGLTF.preload('/models-3d-cancer/apple.glb')
