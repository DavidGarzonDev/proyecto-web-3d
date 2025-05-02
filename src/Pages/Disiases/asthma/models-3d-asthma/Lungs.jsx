/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

const Lungs = (props) => {
    const { nodes, materials } = useGLTF('/models-3d-asthma/lungs-model.glb');
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(0, 0, 5);
        camera.lookAt(0, 0, 0);
    }, [camera]);

    return (
        <group {...props} dispose={null} scale={20} position={[0, 0, 0]}>
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