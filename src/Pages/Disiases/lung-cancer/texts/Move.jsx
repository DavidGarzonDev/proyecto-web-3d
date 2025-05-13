import { Center, Text3D, Html } from "@react-three/drei";
import { IoIosMove } from "react-icons/io";
import './Move.css';

// Renders rotating prompt text and icon. Hides on pointer enter.
const Move = ({ text, hidden }) => {
  if (hidden) return null;
  return (
    <Center position={[0, -1.6, 0.9]} rotation={[-0.5, 0, 0]}>      
      <Text3D
        font="/fonts/Heavitas.json"
        bevelEnabled
        bevelSize={0.016}
        bevelThickness={0.1}
        size={0.2}
        height={0.2}
        curveSegments={12}
        castShadow
        receiveShadow
      >
        {text}
        <meshStandardMaterial 
          color="#3A3A3A"
          emissive="#1E1C1E"
          emissiveIntensity={0.7}
          roughness={0.3}
          metalness={6}
        />
      </Text3D>
      {/* Icon below text */}
      <Html center position={[1.8, -0.3, 0]}>  
        <IoIosMove size={34} color="#3A373A" />
      </Html>
    </Center>
  );
};
export default Move;