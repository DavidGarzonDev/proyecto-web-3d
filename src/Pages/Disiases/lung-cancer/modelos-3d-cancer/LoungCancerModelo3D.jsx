/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LoungCancerModelo3D = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/loung-cancer.glb')
  const loung = useGLTF('/models-3d-cancer/loung-cancer.glb')

  const refLoung = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const scaleValue = 1 + Math.sin(t * 2) * 0.03
    refLoung.current?.scale.set(scaleValue, scaleValue, scaleValue)
  })
  
  return (
    <group {...props} dispose={null} ref={refLoung}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LoungCancer.geometry}
        material={materials.LoungCancerMaterial}
        scale={2.2}      />
    </group>
  )
}


useGLTF.preload('/models-3d-cancer/loung-cancer.glb')


export default LoungCancerModelo3D;
