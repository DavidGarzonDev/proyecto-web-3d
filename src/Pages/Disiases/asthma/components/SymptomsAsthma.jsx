
import { Canvas } from "@react-three/fiber";
import LightsNight from "../lights-asthma/LigthsNight";
import Person from "../models-3d-asthma/Person";
import Recipe from "../models-3d-asthma/Recipe";
import TextSymptoms from "../texts/TextSymtomps";
import StagingSymptoms from "../staging/StagingSymptoms";

const SymptomsAsthma = () => {
  return (
    <Canvas
      className="canvas-symptoms-asthma"
      camera={{ position: [-3, 3, -10], fov: 70 }}
      shadows
    >
      <LightsNight />
      <Person position={[0, -7.5, 0]} rotation={[0, -3, 0]} />
      <TextSymptoms />
      <Recipe />
      <StagingSymptoms />
    </Canvas>
  )
}

export default SymptomsAsthma
