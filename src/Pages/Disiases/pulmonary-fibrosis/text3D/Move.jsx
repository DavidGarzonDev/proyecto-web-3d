/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Center, Text3D } from "@react-three/drei";
import "./Title.css";

const Move = ({ text, hidden }) => {
  if (hidden) return null;
  return (
    <Center position={[0, -1, 0.9]} rotation={[-0.5, 0, 0]}>
      <Text3D
        font="/fonts/Heavitas.json"
        bevelEnabled
        bevelSize={0.01}
        bevelThickness={0.1}
        size={0.15}
        height={0.1}
        curveSegments={10}
        castShadow
        receiveShadow
      >
        {text}
        <meshStandardMaterial
          color="#bf1534"
          emissive="#931028"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.6}
        />
      </Text3D>
    </Center>
  );
};

export default Move;
