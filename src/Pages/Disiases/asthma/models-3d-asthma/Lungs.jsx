import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
const Lungs = (props) => {
    const { nodes, materials } = useGLTF('/models-3d-asthma/lungs-model.glb');
    const { camera } = useThree();
    
    useEffect(() => {
        camera.position.set(0, 0, 5);
        camera.lookAt(0, 0, 0);
        materials.LungsMaterial.color = new THREE.Color(0.8, 0.6, 0.6);
    }, [camera, materials.LungsMaterial]);

    const refLoung = useRef()
    
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        const scaleValue = 20 + Math.sin(t * 9) * 0.5
        refLoung.current?.scale.set(scaleValue, scaleValue, scaleValue)
    })


    return (
        <group {...props} dispose={null} scale={20} position={[0, 0, 0]} ref={refLoung}>
            <mesh 
                geometry={nodes.Lungs.geometry} 
                material={materials.LungsMaterial}
                castShadow
                receiveShadow
            />
        </group>
    );
};

useGLTF.preload('/models-3d-asthma/lungs-model.glb');
export default Lungs;