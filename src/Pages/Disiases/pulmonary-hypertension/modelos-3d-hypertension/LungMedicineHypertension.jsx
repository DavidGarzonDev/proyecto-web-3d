/* eslint-disable react/no-unknown-property */


import { useGLTF } from '@react-three/drei'


const LoungMedicineHypertension = (props) => {
    const { nodes, materials } = useGLTF('/models-3d-hypertension/football-ball.glb')

    return (
      <group {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Football1.geometry}
          material={materials.Football1Material}
          rotation={[-Math.PI / -1, -1.5, -3]} // posición inicial
          scale={100}          
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Football2.geometry}
          material={materials.Football2Material}
          rotation={[-Math.PI / -1, -1.5, -3]} // posición inicial
          scale={100}
        />
      </group>
    )
  }

export default LoungMedicineHypertension

useGLTF.preload('/models-3d-hypertension/football-ball.glb')