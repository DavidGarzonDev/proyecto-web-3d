import { Center, Text3D, Html } from "@react-three/drei";
import { IoIosMove } from "react-icons/io";
import './Move.css';

const Move = ({ text, hidden }) => {
  if (hidden) return null;
  return (
    <Center position={[2, 1.4, -0.1]} rotation={[0, -0.2, 0]}>      
      <Text3D
        font="/fonts/Heavitas.json"
        bevelEnabled
        bevelSize={0.016}
        bevelThickness={0.1}
        size={0.2}
        height={0}
        curveSegments={12}
        
      >
        {text}
        <meshStandardMaterial 
          color="#d32f2f"
          emissive="#1E1C1E"
          emissiveIntensity={0.7}
          
          
        />
      </Text3D>
      
      <Html center position={[1.2, -0.7, 0]}>  
        <IoIosMove size={34} color="#d32f2f" />
      </Html>
    </Center>
  );
};
export default Move;