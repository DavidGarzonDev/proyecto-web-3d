import { Environment, Sky } from '@react-three/drei'


const StagingOne = () => {
  return(
    <Environment
      files={"staging-hypertension/hdris/hospital/hospital-4k.hdr"}
      ground={{
        height: 60,
        radius: 100,
        scale:60,
      }}  
      background      
    />

  );  
};
export default StagingOne;
