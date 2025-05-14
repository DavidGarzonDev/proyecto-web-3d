
import { Environment, Sky } from '@react-three/drei'

const StagingPrecaution = () => {
  return (
    <Sky 
        sunPosition={[0, 20, -100]}
        inclination={0.2}
        azimuth={0.2}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        rayleigh={0.1}
        turbidity={1}
        />
  )
}

export default StagingPrecaution