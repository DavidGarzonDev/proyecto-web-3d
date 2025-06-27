/* eslint-disable react/no-unknown-property */
// src/texts/Title2.jsx
import { Text3D, Center } from "@react-three/drei";

const Title2 = ({ title2 }) => {
  return (
    <Center position={[0, 2.5, 1]} rotation={[0, 0, 0]}>
      <Text3D
        font="/fonts/Heavitas.json" // ya lo estás usando
        size={0.5}
        height={0.2}
        bevelEnabled
        bevelSize={0.03}
        bevelThickness={0.05}
        curveSegments={12}
      >
        {title2}
        <meshStandardMaterial
          color="#d32f2f"
          metalness={0.3}
          roughness={0.4}
          emissive="#5a0c0c"
          emissiveIntensity={0.4}
        />
      </Text3D>
    </Center>
  );
};

export default Title2;
