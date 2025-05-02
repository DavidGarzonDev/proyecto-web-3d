
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LoungMedicine2 = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/banana.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Banana.geometry}
        material={materials.BananaMaterial}
        scale={0.5}
      />
    </group>
  )
}

export default LoungMedicine2

useGLTF.preload('/models-3d-cancer/banana.glb')
