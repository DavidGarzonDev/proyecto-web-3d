import { RigidBody } from "@react-three/rapier";

const Platform = ({ position = [0, 0, 0], size = [10, 0.5, 10] }) => {
  return (
    <RigidBody type="fixed" position={position} colliders="cuboid">
      <mesh receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#3498db" />
      </mesh>
    </RigidBody>
  );
};

export default Platform;
