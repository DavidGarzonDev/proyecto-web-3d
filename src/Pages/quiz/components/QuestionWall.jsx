import { Text3D, Center } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const QuestionWall = ({ text, position = [-10, 2, 0], visible = true, onAnimationComplete }) => {
  const wallRef = useRef();
  const textRef = useRef();
  const animationTime = useRef(0);
  
  // Animate the wall rising and falling
  useFrame((state, delta) => {
    if (!wallRef.current || !visible) return;
    
    // Animate the wall up when it becomes visible
    if (animationTime.current < 1) {
      animationTime.current += delta * 0.5; // Speed of animation
      // Rise up animation
      wallRef.current.position.y = position[1] - 4 + 4 * Math.min(1, animationTime.current);
    }
    
    // After 5 seconds, animate the wall down
    if (animationTime.current >= 1 && state.clock.elapsedTime % 5 > 4.5 && visible) {
      // Start falling animation
      wallRef.current.position.y -= delta * 8; // Fall speed
      
      // If it's gone below the floor, trigger completion event
      if (wallRef.current.position.y < -3) {
        onAnimationComplete && onAnimationComplete();
      }
    }
    
    // Subtle floating animation for the text
    if (textRef.current) {
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + 2;
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });
  
  // Reset animation when visibility changes
  useEffect(() => {
    if (visible) {
      animationTime.current = 0;
    }
  }, [visible]);
  
  // If not visible, don't render
  if (!visible) return null;
  
  return (
    <group position={position} ref={wallRef}>
      {/* Wall */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[20, 10, 0.5]} />
        <meshStandardMaterial
          color="#34495e"
          metalness={0.2}
          roughness={0.8}
        />
      </mesh>
      
      {/* Text */}
      <group ref={textRef} position={[0, 3, 1]}>
        <Center>
          <Text3D
            font="/fonts/Heavitas.json"
            size={0.4}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelSegments={5}
            maxWidth={10}
            lineHeight={0.8}
            textAlign="center"
          >
            {text}
            <meshStandardMaterial
              color="#fff"
              metalness={0.1}
              roughness={0.4}
              emissive="#4fc3f7"
              emissiveIntensity={0.2}
            />
          </Text3D>
        </Center>
      </group>
    </group>
  );
};

export default QuestionWall;
