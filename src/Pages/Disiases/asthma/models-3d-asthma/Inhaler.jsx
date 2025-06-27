import { useGLTF } from '@react-three/drei';
import { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const useAudio = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio('/sounds/puff.mp3');
    }, []);

    const playSquishSound = useCallback(() => {
        try {
            if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.play();
            }
        } catch (error) {
            console.error("Error reproduciendo sonido:", error);
        }
    }, []);

    return { playSquishSound };
};

function Puff({ position = [0, 1.2, 0], trigger }) {
    const meshRef = useRef();
    const [active, setActive] = useState(false);
    const [startTime, setStartTime] = useState(0);

    const count = 40;
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Posiciones iniciales random en un cono sutil
    const offsets = useMemo(() => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const radius = Math.random() * 0.3;
            const height = Math.random() * 0.2;
            arr.push([
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius
            ]);
        }
        return arr;
    }, []);

    useEffect(() => {
        if (trigger > 0) {
            setActive(true);
            setStartTime(performance.now());
        }
    }, [trigger]);

    useFrame(() => {
        if (!active || !meshRef.current) return;

        const elapsed = (performance.now() - startTime) / 1000;

        if (elapsed > 1.5) {
            setActive(false);
            return;
        }

        for (let i = 0; i < count; i++) {
            const [x, y, z] = offsets[i];
            dummy.position.set(
                position[0] + x,
                position[1] + y + elapsed * 1.2,
                position[2] + z
            );
            dummy.scale.setScalar(1 - elapsed * 0.7);
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);
        }

        meshRef.current.material.opacity = 0.6 * (1 - elapsed);
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    if (!active) return null;

    return (
        <instancedMesh ref={meshRef} args={[null, null, count]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshBasicMaterial
                color="#8e8e8e"
                transparent
                opacity={0.6}
                depthWrite={false}
            />
        </instancedMesh>
    );
}

export default function Inhaler(props) {
    const { playSquishSound } = useAudio();
    const groupRef = useRef();
    const [isPressed, setIsPressed] = useState(false);
    const [puffKey, setPuffKey] = useState(0);

    useFrame(() => {
        if (groupRef.current) {
            const target = isPressed ? 7.5 : 8;
            groupRef.current.scale.lerp(new THREE.Vector3(target, target, target), 0.1);
        }
    });

    const triggerAction = () => {
        playSquishSound();
        setIsPressed(true);
        setPuffKey(performance.now());
        setTimeout(() => setIsPressed(false), 200);
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key.toLowerCase() === 'i') {
                triggerAction();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const { nodes, materials } = useGLTF('/models-3d-asthma/innaler-model.glb');

    return (
        <group {...props} ref={groupRef} scale={8} onClick={triggerAction}>
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
            {/* Partículas de humo optimizadas */}
            <Puff position={[0, 0, 0]} trigger={puffKey} />
        </group>
    );
}

useGLTF.preload('/models-3d-asthma/innaler-model.glb');
