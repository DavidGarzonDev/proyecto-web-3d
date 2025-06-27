/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, PositionalAudio } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

const LoungMedicineHypertension = ({
  meshRef,
  bouncing,
  setBouncing,
  velocityRef,
  positionYRef,
  ...props
}) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/football-ball.glb');
  const audioGoal = useRef();

  // Reproduce rebote animado
  useFrame((_, delta) => {
    if (bouncing && meshRef.current) {
      velocityRef.current -= 9.8 * delta;
      positionYRef.current += velocityRef.current * delta;

      if (positionYRef.current < 1) {
        positionYRef.current = 1;
        velocityRef.current = -velocityRef.current * 0.7;

        if (Math.abs(velocityRef.current) < 0.5) {
          velocityRef.current = 0;
          positionYRef.current = 1;
          meshRef.current.position.y = 1;
          setBouncing(false);

          // 👇 Detener el audio si está sonando
          if (audioGoal.current?.isPlaying) {
            audioGoal.current.stop();
          }
        }
      }

      meshRef.current.position.y = positionYRef.current;
    }
  });

  // Configura audio 3D al cargar
  useEffect(() => {
    if (audioGoal.current) {
      audioGoal.current.setRefDistance(5);
      audioGoal.current.setRolloffFactor(2);
      audioGoal.current.setDistanceModel("linear");
    }
  }, []);

  // Teclas F y G
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (!bouncing) {
        if (key === 'f') {
          velocityRef.current = 8;
          setBouncing(true);
        } else if (key === 'g') {
          velocityRef.current = 15;
          setBouncing(true);

          if (audioGoal.current) {
            audioGoal.current.stop(); // reinicia
            audioGoal.current.play(); // reproduce
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bouncing, setBouncing]);

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Football1.geometry}
        material={materials.Football1Material}
        rotation={[-Math.PI / -1, -1.5, -3]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Football2.geometry}
        material={materials.Football2Material}
        rotation={[-Math.PI / -1, -1.5, -3]}
        scale={100}
      />
      <PositionalAudio
        ref={audioGoal}
        url="/sounds/Goal.mp3"
        distance={10}
        loop={false}
        autoplay={false}
        position={[0, 0, 0]}
      />
    </group>
  );
};

export default LoungMedicineHypertension;

useGLTF.preload('/models-3d-hypertension/football-ball.glb');