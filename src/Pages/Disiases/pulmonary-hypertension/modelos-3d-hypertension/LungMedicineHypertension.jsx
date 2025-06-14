/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF, Html } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const LoungMedicineHypertension = ({
  meshRef,
  bouncing,
  setBouncing,
  velocityRef,
  positionYRef,
  ...props
}) => {
  const { nodes, materials } = useGLTF('/models-3d-hypertension/football-ball.glb');

  useFrame((_, delta) => {
    if (bouncing && meshRef.current) {
      velocityRef.current -= 9.8 * delta; // gravedad
      positionYRef.current += velocityRef.current * delta;

      if (positionYRef.current < 1) {
        positionYRef.current = 1;
        velocityRef.current = -velocityRef.current * 0.7; // rebote con pérdida

        if (Math.abs(velocityRef.current) < 0.5) {
          velocityRef.current = 0;
          positionYRef.current = 1;
          meshRef.current.position.y = 1;
          setBouncing(false);
        }
      }

      meshRef.current.position.y = positionYRef.current;
    }
  });

  const handleBounce = () => {
    if (!bouncing) {
      velocityRef.current = 10; // Rebote inicial más alto
      setBouncing(true);
    }
  };

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

      {/* Botón fijo en la esquina superior derecha */}
      {!bouncing && (
        <Html
          position={[0, 0, 0]}
          transform={false}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            pointerEvents: "auto",
          }}
        >
          <button
            onClick={handleBounce}
            style={{
              padding: "8px 16px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
            }}
          >
            Presione
          </button>
        </Html>
      )}
    </group>
  );
};

export default LoungMedicineHypertension;

useGLTF.preload('/models-3d-hypertension/football-ball.glb');