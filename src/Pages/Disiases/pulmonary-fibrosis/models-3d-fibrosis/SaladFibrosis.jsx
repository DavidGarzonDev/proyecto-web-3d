/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SaladFibrosis(props) {
  const { nodes, materials } = useGLTF('/models-3d-fibrosis/Salad.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Potatoe.geometry}
        material={materials.PotatoeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SaladBowl.geometry}
        material={materials['SaladBowlColor.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SaladSpoon.geometry}
        material={materials.SaladSpoonColor}
      />
    </group>
  )
}

useGLTF.preload('/Salad.glb')

export default SaladFibrosis;