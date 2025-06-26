/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Center, Text3D } from "@react-three/drei";
import "./Title.css";

const Recomendation3D = ({ text, hidden }) => {
  if (hidden) return null;
  return (
    <Center position={[0, 0.6, 0.9]} rotation={[-0.19, 0, 0]}>
      <Text3D
        font="/fonts/Heavitas.json"
        bevelEnabled
        bevelSize={0.001}
        bevelThickness={0.01}
        size={0.2}
        height={0.1}
        curveSegments={1}
        castShadow
        receiveShadow
      >
        {text}
        <meshStandardMaterial
          color="#da1b3e"
          emissive="#931028"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.6}
        />
      </Text3D>
    </Center>
  );
};

export default Recomendation3D;