import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { RigidBody, useRapier } from "@react-three/rapier";

const Player = forwardRef(({ position = [0, 1, 0], onGameOver, cameraRef, isPaused = false }, ref) => {
  // You can replace this with any of your existing models if desired
  // For now we'll use a simple box as a placeholder
  const playerRef = useRef();
  const rigidBodyRef = useRef();
  const [controls, setControls] = useState({
    left: false,
    right: false,
    jump: false,
  });
  
  const [canJump, setCanJump] = useState(true);
  const [hasActiveFloor, setHasActiveFloor] = useState(false);
  const FORWARD_SPEED =3;
  const LATERAL_SPEED = 3;
  const JUMP_FORCE = 8;
  const MAX_LATERAL_POSITION = 8; // Aumentado de 3 a 8 para permitir más movimiento lateral
  
  // Make ref available for parent components
  useImperativeHandle(ref, () => ({
    getPosition: () => {
      if (rigidBodyRef.current) {
        return rigidBodyRef.current.translation();
      }
      return { x: 0, y: 0, z: 0 };
    },
    getRigidBody: () => rigidBodyRef.current
  }));
  
  // Handle collision detection using frames
  useFrame(() => {
    if (!rigidBodyRef.current) return;
    
    // Use position y-velocity as ground check
    const velocity = rigidBodyRef.current.linvel();
    const position = rigidBodyRef.current.translation();
    
    // If we're very close to the ground and not moving up quickly, consider us grounded
    if (Math.abs(velocity.y) < 0.1 && position.y <= 0.6) {
      setHasActiveFloor(true);
    } else if (velocity.y > 0.5) { // If we're moving up quickly, we're not on the ground
      setHasActiveFloor(false);
    }
  });
  
  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isPaused) return; // Don't handle input if paused
      
      if (e.key.toLowerCase() === "a") {
        setControls((prev) => ({ ...prev, left: true }));
      }
      if (e.key.toLowerCase() === "d") {
        setControls((prev) => ({ ...prev, right: true }));
      }
      if (e.key === " " || e.key.toLowerCase() === "w") {
        setControls((prev) => ({ ...prev, jump: true }));
      }
    };
    
    const handleKeyUp = (e) => {
      if (e.key.toLowerCase() === "a") {
        setControls((prev) => ({ ...prev, left: false }));
      }
      if (e.key.toLowerCase() === "d") {
        setControls((prev) => ({ ...prev, right: false }));
      }
      if (e.key === " " || e.key.toLowerCase() === "w") {
        setControls((prev) => ({ ...prev, jump: false }));
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isPaused]);
  
  // Check if player fell and update camera position
  useFrame(() => {
    if (rigidBodyRef.current) {
      const position = rigidBodyRef.current.translation();
      
      // If player falls below a certain level, trigger game over
      if (position.y < -5) {
        onGameOver();
      }
      
      // Update camera to follow player
      if (cameraRef?.current) {
        // Position camera behind and slightly above the player
        cameraRef.current.position.x = position.x;
        cameraRef.current.position.y = position.y + 2;  // Above player
        cameraRef.current.position.z = position.z + 5;  // Behind player
        
        // Make the camera look at the player or slightly ahead
        cameraRef.current.lookAt(position.x, position.y, position.z - 5);
      }
      
      // Auto-move player forward only when not paused
      if (!isPaused) {
        rigidBodyRef.current.setLinvel({ x: 0, y: rigidBodyRef.current.linvel().y, z: -FORWARD_SPEED }, true);
        
        // Handle left-right movement
        let lateralVelocity = 0;
        if (controls.left && position.x > -MAX_LATERAL_POSITION) {
          lateralVelocity = -LATERAL_SPEED;
        } else if (controls.right && position.x < MAX_LATERAL_POSITION) {
          lateralVelocity = LATERAL_SPEED;
        }
        
        // Handle jumping
        if (controls.jump && canJump && hasActiveFloor) {
          rigidBodyRef.current.setLinvel({ 
            x: rigidBodyRef.current.linvel().x, 
            y: JUMP_FORCE, 
            z: rigidBodyRef.current.linvel().z 
          }, true);
          
          // Prevent multiple jumps
          setCanJump(false);
          setTimeout(() => {
            setCanJump(true);
          }, 1000); // Cooldown for jumping
        }
        
        rigidBodyRef.current.setLinvel({ 
          x: lateralVelocity, 
          y: rigidBodyRef.current.linvel().y, 
          z: rigidBodyRef.current.linvel().z 
        }, true);
      } else {
        // When paused, stop lateral and forward movement, but keep gravity
        rigidBodyRef.current.setLinvel({ 
          x: 0, 
          y: rigidBodyRef.current.linvel().y, 
          z: 0 
        }, true);
      }
    }
  });
  
  return (
    <RigidBody
      ref={rigidBodyRef}
      position={position}
      enabledRotations={[false, false, false]} // Lock rotation
      mass={1}
      colliders="ball"
      restitution={0.2}
      friction={0.5}
      linearDamping={0.5}
    >
      <mesh ref={playerRef} castShadow>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#e74c3c"   roughness={0.5}/>
      </mesh>
    </RigidBody>
  );
});

export default Player;
