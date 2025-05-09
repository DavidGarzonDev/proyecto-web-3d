import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const LoungKnow = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/loung-cancer.glb')

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
        scale={1.8}
        position={[0, 0.2, 0]}
        rotation={[-Math.PI / 0.5, 0.32, 0]}
      />
    </group>
  )
}


useGLTF.preload('/models-3d-cancer/loung-cancer.glb')


export default LoungKnow;
