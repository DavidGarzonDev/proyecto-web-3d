import React from 'react';
import { Sparkles } from '@react-three/drei';

// Red blood-like particle effect for SymptomsCancer canvas
const BloodParticles = () => (
  <Sparkles
    count={100}              // fewer, denser drops
    size={[1, 3]}      // small droplets
    scale={[1.5, 1.5, 1.5]}  // around lungs
    noise={0.6}              // swirling motion
                 // slow drift
    color="#BF1534"        // blood red
    opacity={10}            // semi-transparent
  />
);

export default BloodParticles;
