
import { useGLTF } from '@react-three/drei';
import { useCallback, useEffect, useRef } from 'react';

const useAudio = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/sounds/puff.mp3');
    }, []);

    const playSquishSound = useCallback(() => {
        try {
            if (audioRef.current) {
                audioRef.current.currentTime = 0; // 
                audioRef.current.play();
            }
        } catch (error) {
            console.error("Error reproduciendo sonido:", error);
        }
    }, []);

    return { playSquishSound };
};
export default function Inhaler(props) {

    const { playSquishSound } = useAudio();

    useEffect(() => {


        const handleKeyDown = (event) => {
            if (event.key === 'i' || event.key === 'I') {
                playSquishSound();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [playSquishSound]);

    const handleClick = () => {
        playSquishSound();
    };



    const { nodes, materials } = useGLTF('/models-3d-asthma/innaler-model.glb');
    return (
        <group {...props} dispose={null} scale={8}
            onClick={handleClick}>
            <mesh
                geometry={nodes.Cartridge.geometry}
                material={materials.CartridgeMaterial}
                castShadow
                receiveShadow
            />
            <mesh
                geometry={nodes.Actuator.geometry}
                material={materials.ActuatorMaterial}
                castShadow
                receiveShadow
            />
        </group>
    );
}

useGLTF.preload('/models-3d-asthma/innaler-model.glb');
