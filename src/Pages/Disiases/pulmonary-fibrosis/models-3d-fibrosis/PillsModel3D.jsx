/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import { useCallback, useEffect, useRef, useState } from "react";

const useAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio("/sounds/person-coughing-fibrosis.mp3");
  }, []);

  const toggleAudio = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0; // Reinicia al detener
      setIsPlaying(false);
    } else {
      audio.currentTime = 0;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.warn("Error al reproducir:", err);
        });
    }
  }, [isPlaying]);

  return { toggleAudio };
};

export function PillsModel3D(props) {
  const { nodes, materials } = useGLTF("/models-3d-fibrosis/Pill.glb");
  const { toggleAudio } = useAudio();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "e") {
        toggleAudio();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleAudio]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blister1001.geometry}
        material={materials.BlisterColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Blister2001.geometry}
        material={materials.BlisterColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cover1001.geometry}
        material={materials.CoverColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cover2001.geometry}
        material={materials.CoverColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.label1001.geometry}
        material={materials.LabelColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.label2001.geometry}
        material={materials.LabelColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill1001.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill100.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill110.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill120.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill130.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill140.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill150.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill200.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill300.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill400.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill50.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill60.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill70.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill80.geometry}
        material={materials.PillColor}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pill90.geometry}
        material={materials.PillColor}
      />
    </group>
  );
}

useGLTF.preload("/Pill.glb");

export default PillsModel3D;
