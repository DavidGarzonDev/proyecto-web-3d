import { Environment, Sky } from '@react-three/drei'


const StagingTwo = () => {
  return (
    <Sky
        sunPosition={[0, 0, -1]}
        inclination={0.2}
        azimuth={180}
        mieCoefficient={0.005}
        mieDirectionalG={0.07}
        rayleigh={3}
        turbidity={10}
    />
  )
}

export default StagingTwo;