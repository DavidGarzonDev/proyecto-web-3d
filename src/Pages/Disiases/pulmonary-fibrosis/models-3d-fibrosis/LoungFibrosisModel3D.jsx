/* eslint-disable react/no-unknown-property */
// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LoungFibrosisModelo3D(props) {
  const { nodes, materials } = useGLTF('/models-3d-fibrosis/Lung-fibrosis.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Lung.geometry}
        material={materials.lungColor}
      />
    </group>
  )
}

useGLTF.preload('/Lung-fibrosis.glb')

export default LoungFibrosisModelo3D;