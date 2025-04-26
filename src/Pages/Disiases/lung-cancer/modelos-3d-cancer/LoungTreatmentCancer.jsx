import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const LoungTreatmentCancer = (props) => {

  const reftTreatment = useRef()

  useFrame(() => {
    if (reftTreatment.current) {
      reftTreatment.current.rotation.y += 0.01
    }
  })

  const { nodes, materials } = useGLTF('/models-3d-cancer/iv-pole.glb')
  return (
    <group {...props} dispose={null} ref={reftTreatment}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IvPole.geometry}
        material={materials.IvPoleMaterial}
        rotation={[-Math.PI / 2, 0, 2]}
        position={[0, -2, 0]}
        scale={0.35}
      />
    </group>
  )
}

useGLTF.preload('/models-3d-cancer/iv-pole.glb')

export default LoungTreatmentCancer