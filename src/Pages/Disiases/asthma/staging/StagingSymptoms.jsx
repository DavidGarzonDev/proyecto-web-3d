import { Environment } from '@react-three/drei'
import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'

const StagingSymptoms = () => {
  const { scene } = useThree()

  useEffect(() => {
    return () => {
      scene.background = null
    }
  }, [scene])

  return (
    <Environment
      key="symptoms-environment"
      path="/staging-asthma/cubemaps/hotel/"
      files={["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]}
      background
    />
  )
}

export default StagingSymptoms
