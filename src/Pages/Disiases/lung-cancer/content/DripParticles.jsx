import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';


const DripParticles = ({ scale , size , opacity, coun}) => {
  const ref = useRef();
  const count = coun;
 
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 0.6;    // x
      arr[i * 3 + 1] = Math.random() * 2 + 1;    // y
      arr[i * 3 + 2] = (Math.random() - 0.5) * 0.6; // z
    }
    return arr;
  }, []);

  useFrame(() => {
    const posArr = ref.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      const yi = i * 3 + 1;
      posArr[yi] -= 0.02;             
      if (posArr[yi] < 0) {           
        posArr[yi] = Math.random() * 2 + 1;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={ref} position={[0, -2, 0]} positions={positions} stride={3} scale={scale}>
      <PointMaterial
        transparent
        color="#500000"
        size={size}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  );
};

export default DripParticles;
