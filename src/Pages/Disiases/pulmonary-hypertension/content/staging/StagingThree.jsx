import { Cloud } from '@react-three/drei';

const StagingThree = () => {
  return (
    <>
      <Cloud
        seed={2}
        bounds={[40, 15, 30]} // Área ocupada por la nube
        volume={12}           // Densidad (mayor = más denso)
        color="#ffffff"
        fade={90}             // Suaviza los bordes
        scale={2.5}           // Tamaño global
        segments={60}         // Detalle (más = más suave)
        position={[0, 20, -10]} // Ubicación sobre el pulmón
        material={{ opacity: 0.75 }}
      />
      <Cloud
        seed={7}
        bounds={[30, 12, 25]}
        volume={10}
        color="#eeeeee"
        fade={70}
        scale={2}
        segments={60}
        position={[10, 25, -15]}
        material={{ opacity: 0.75 }}
      />
    </>
  );
};

export default StagingThree;