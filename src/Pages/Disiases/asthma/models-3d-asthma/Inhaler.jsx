/* eslint-disable react/no-unknown-property */

import { useGLTF } from '@react-three/drei';

export default function Inhaler(props) {
    const { nodes, materials } = useGLTF('/models-3d-asthma/innaler-model.glb');
    return (
        <group {...props} dispose={null} scale={8}>
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
