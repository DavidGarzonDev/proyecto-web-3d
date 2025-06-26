import { RigidBody } from "@react-three/rapier";

const Floor = ({ position = [0, -5, 0] }) => {
  return (
    <RigidBody type="fixed" position={position} colliders="cuboid">
      <mesh receiveShadow>
        <boxGeometry args={[6, 0.2, 6]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
    </RigidBody>
  );
};

export default Floor;
