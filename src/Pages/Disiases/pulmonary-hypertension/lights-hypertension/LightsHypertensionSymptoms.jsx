/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useHelper } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import { DirectionalLight } from "three";

const LightsHypertensionSymptoms = ({ lightPosition = [0, 10, 0] }) => {
  // Referencia para la luz direccional (útil para visualizar su dirección)
  const directionalLightRef = useRef(null);
  useHelper(directionalLightRef, DirectionalLight);

  // Referencia para la luz puntual (pointLight)
  const pointLightRef = useRef(null);
  // Puedes activar esta línea para ver el helper visual de la pointLight
  // useHelper(pointLightRef, PointLightHelper, 4, "blue");

  // Estado que controla si las luces ambientLight y directionalLight están activas
  const [lightsEnabled, setLightsEnabled] = useState(true);

  // Hook que escucha eventos de teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Si se presiona la tecla "o", alternar visibilidad de las luces
      if (e.key === "o" || e.key === "O") {
        setLightsEnabled((prev) => !prev);
      }
    };

    // Añadir el listener al presionar una tecla
    window.addEventListener("keydown", handleKeyDown);

    // Limpiar el listener al desmontar el componente
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Luz puntual siempre activa */}
      <pointLight
        ref={pointLightRef}
        color={"blue"}
        position={[2, 2, 3]}
        intensity={50}
      />

      {/* Luces ambiente y direccional, controladas por el estado */}
      {lightsEnabled && (
        <>
          <ambientLight intensity={0.5} color="white" />
          <directionalLight
            ref={directionalLightRef}
            color="white"
            intensity={10}
            castShadow={true}
            position={lightPosition}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={0.5}
            shadow-camera-far={20}
          />
        </>
      )}
    </>
  );
};

export default LightsHypertensionSymptoms;