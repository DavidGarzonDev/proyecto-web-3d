/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Center, Text3D, Html } from "@react-three/drei";
import { IoIosMove } from "react-icons/io";
import './MoveHypertension.css';



const Move = ({ text, hidden }) => {
  if (hidden) return null;
  
  return (
    <Center position={[0, 2, 10]} rotation={[-0.2, 0, 0]}>
      <Text3D
        font="/fonts/Heavitas.json"
        bevelEnabled
        bevelSize={0.05}
        bevelThickness={0.2}
        size={0.5}                // Aumentado para ser visible desde lejos
        height={0.5}
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
          metalness={0.6}       // Corregido el valor
        />
      </Text3D>

      <Html center position={[-1, 0.2, 0]}>
        <IoIosMove size={20} color="#3A373A" />
      </Html>
    </Center>
  );
};

export default Move;