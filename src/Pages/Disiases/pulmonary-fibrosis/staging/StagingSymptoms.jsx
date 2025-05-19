import { Environment } from "@react-three/drei";

const StagingSymptoms = () => {
  return (
    <Environment
      files={"staging-fibrosis/hdris/apartment/apartment-fibrosis.hdr"}
      ground={{
        height: 60,
        radius: 150,
        scale: 70,
      }}
      background
    />
  );
};

export default StagingSymptoms;
