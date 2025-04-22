import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const LoungCancerModelo3D = (props) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/loung-cancer.glb')
  const loung = useGLTF('/models-3d-cancer/loung-cancer.glb')


  useEffect(() => {
    console.log(loung)
  }, [loung])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LoungCancer.geometry}
        material={materials.LoungCancerMaterial}
        scale={2}
      />
    </group>
  )
}


useGLTF.preload('/models-3d-cancer/loung-cancer.glb')


export default LoungCancerModelo3D;
