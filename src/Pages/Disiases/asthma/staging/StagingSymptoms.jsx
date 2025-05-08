import { Environment } from '@react-three/drei'



const StagingSymptoms = () => {
  return (
    <Environment 
    path={"/staging-asthma/cubemaps/hotel/"}
    files={[ 
      "px.png",
      "nx.png",
      "py.png",
      "ny.png",
      "pz.png",
      "nz.png"]}
    background
    />
  )
}

export default StagingSymptoms