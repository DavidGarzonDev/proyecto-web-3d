import { Text3D } from "@react-three/drei";

const Particle = ({ position, text }) => {
  return (
    <Text3D
      position={position}
      font="/fonts/Heavitas.json"
      size={0.15}
      height={0.02}
      bevelEnabled
      bevelSize={0.008}
      bevelThickness={0.03}
      curveSegments={8}
    >
      {text}
      <meshStandardMaterial
        color="#d32f2f"
        emissive="#1E1C1E"
        emissiveIntensity={0.5}
      />
    </Text3D>
  );
};

const ParticlesText = () => {
  const particleTexts = [
    { text: "Polvo", position: [-2, 1, 0.5] },
    { text: "Ácaros", position: [1.2, 2.5, -1] },
    { text: "Humo", position: [0.5, -1, 2] },
    { text: "Contaminación", position: [-1.5,2.3, -1.5] },
    { text: "Pelo", position: [1.3, 0.4, 1.8] },
    { text: "Moho", position: [-0,2, -3] },
  ];

  return (
    <>
      {particleTexts.map((p, index) => (
        <Particle key={index} text={p.text} position={p.position} />
      ))}
    </>
  );
};

export default ParticlesText;
