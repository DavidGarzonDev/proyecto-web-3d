
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LoungSymptoms = (props) => {

  const { nodes, materials } = useGLTF('/models-3d-cancer/rag-with-blood.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RagWithBlood.geometry}
        material={materials.RagWithBloodMaterial}
        rotation={[-Math.PI / 2, -1.6, 5]}
        scale={6}

      />
    </group>
  )
}

export default LoungSymptoms

useGLTF.preload('/models-3d-cancer/rag-with-blood.glb')
