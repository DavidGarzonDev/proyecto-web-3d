/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, useState, useMemo } from 'react'
import { useGLTF, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const MedicationParticles = ({ position, color }) => {
  const particlesRef = useRef()
  const count = 100 
  
  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 3
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = Math.random() * 6 - 3 
      const z = radius * Math.sin(phi) * Math.sin(theta)
      
      temp.push({ 
        position: [x, y, z], 
        speed: 0.02 + Math.random() * 0.04, 
        scale: 0.5 + Math.random() * 1.5 
      })
    }
    return temp
  }, [])

  useFrame(() => {
    if (!particlesRef.current) return
    

    particlesRef.current.children.forEach((particle, i) => {
      particle.position.y -= particles[i].speed
      
      
      particle.position.x += Math.sin(Date.now() * 0.001 + i) * 0.005
      particle.position.z += Math.cos(Date.now() * 0.001 + i * 0.7) * 0.005
      
      
      if (particle.position.y < -5) {
        particle.position.y = 5
        const radius = 2 + Math.random() * 3
        const theta = Math.random() * Math.PI * 2
        particle.position.x = radius * Math.cos(theta)
        particle.position.z = radius * Math.sin(theta)
      }
    })
  })

  return (
    <group position={position}>
      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position} scale={particle.scale}>
            <sphereGeometry args={[0.03, 8, 8]} /> 
            <meshBasicMaterial color={color} transparent opacity={0.9} />
          </mesh>
        ))}
      </group>

      <Sparkles count={20} scale={5} size={6} speed={0.3} color={color} />
      <Sparkles count={15} scale={4} size={5} speed={0.2} position={[2, 0, 2]} color={color} />
      <Sparkles count={15} scale={4} size={5} speed={0.2} position={[-2, 0, -2]} color={color} />
    </group>
  )
}

const LoungTreatmentCancer = (props) => {
  const reftTreatment = useRef()
  const [hovered, setHovered] = useState(false);

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
        rotation={[-Math.PI / 2.2, 0, 3]}
        position={[0, -2, 0]}
        scale={hovered ? 0.35 : 0.30}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      
      
      <MedicationParticles 
        position={[0, 0, 0]} 
        color="#22a1d3" 
      />
      <MedicationParticles 
        position={[0, 0, 0]} 
        color="#e74c3c" 
      />
      <MedicationParticles 
        position={[0, 0, 0]} 
        color="#9b59b6" 
      />
    </group>
  )
}

useGLTF.preload('/models-3d-cancer/iv-pole.glb')

export default LoungTreatmentCancer