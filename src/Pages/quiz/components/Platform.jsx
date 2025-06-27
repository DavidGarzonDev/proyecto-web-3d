/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useMemo } from "react"
import { useTexture } from "@react-three/drei"
import { RepeatWrapping } from "three"
import { RigidBody } from "@react-three/rapier"

const Platform = ({ position = [0, 0, 0], size = [10, 0.5, 10] }) => {
  const PATH = useMemo(() => "/textures/rock/", [])

  const rockTexture = useTexture({
    map: PATH + "rock-color.png",
    aoMap: PATH + "rock-ao.png",
    roughnessMap: PATH + "rock-rough.png",
    normalMap: PATH + "rock-normal.png",
  })

  Object.values(rockTexture).forEach((texture) => {
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    
    texture.anisotropy = 16

  })

  return (
    <RigidBody type="fixed" position={position} colliders="cuboid">
      <mesh receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial {...rockTexture} />
      </mesh>
    </RigidBody>
  )
}

export default Platform