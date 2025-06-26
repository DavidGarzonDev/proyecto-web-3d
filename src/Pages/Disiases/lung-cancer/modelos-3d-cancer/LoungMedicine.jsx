
import React, { useState, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody } from '@react-three/rapier'
import { useFrame } from '@react-three/fiber'

const LoungMedicine = ({ initialPosition = [0, 5, 0], initialRotation = [-Math.PI, 0, 0], dropTrigger = false, onFruitClick, ...props }) => {
  const { nodes, materials } = useGLTF('/models-3d-cancer/apple.glb')
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const rigidBodyRef = useRef(null)
  
  // Reset position and set to dynamic when drop is triggered
  useEffect(() => {
    if (dropTrigger && rigidBodyRef.current) {
      // Set to dynamic to enable physics
      rigidBodyRef.current.setTranslation({ x: initialPosition[0], y: initialPosition[1], z: initialPosition[2] })
      rigidBodyRef.current.resetForces(true)
      rigidBodyRef.current.resetTorques(true)
      
      // Add a small random impulse for natural movement
      const randomX = (Math.random() - 0.5) * 0.5
      const randomZ = (Math.random() - 0.5) * 0.5
      rigidBodyRef.current.applyImpulse({ x: randomX, y: 0, z: randomZ }, true)
      rigidBodyRef.current.applyTorqueImpulse({ x: Math.random(), y: Math.random(), z: Math.random() }, true)
      
      setActive(true)
      
      // Reset after 5 seconds
      const timer = setTimeout(() => {
        if (rigidBodyRef.current) {
          rigidBodyRef.current.setTranslation({ x: props.position[0], y: props.position[1], z: props.position[2] })
          setActive(false)
        }
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [dropTrigger, initialPosition, props.position])

  return (
    <RigidBody 
      ref={rigidBodyRef}
      position={active ? initialPosition : props.position}
      type={active ? "dynamic" : "fixed"}
      colliders="ball"
      restitution={0.7}
      friction={0.5}
    >
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Apple.geometry}
          material={materials.AppleMaterial}
          rotation={initialRotation}
          scale={hovered ? 0.5 : 0.4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={(e) => {
            e.stopPropagation()
            onFruitClick()
          }}
        />
      </group>
    </RigidBody>
  )
}

export default LoungMedicine

useGLTF.preload('/models-3d-cancer/apple.glb')
