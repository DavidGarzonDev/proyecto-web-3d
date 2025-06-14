import { Center, Text3D, Html } from "@react-three/drei";
import { IoIosMove } from "react-icons/io";
import './Move.css';

// Renders rotating prompt text and icon. Hides on pointer enter.
const Move = ({ text, hidden }) => {
  if (hidden) return null;
  return (
    <Center position={[0, -1, 1]} rotation={[-0.5, 0, 0]}>
      <Text3D
        font="/fonts/Heavitas.json"
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.2}
        size={0.3} // Aumentado para que sea visible desde lejos
        height={0.3}
        curveSegments={12}
        castShadow
        receiveShadow
      >
        {text}
        <meshStandardMaterial 
          color="red"
          emissive="#1E1C1E"
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={0.6} // Esto antes estaba en 6, lo cual no tiene sentido (el valor máximo es 1)
        />
      </Text3D>
      {/* Icon below text */}
      <Html center position={[0, -2, 0]}>
        <IoIosMove size={80} color="#3A373A" />
      </Html>
    </Center>
  );
};

export default Move;