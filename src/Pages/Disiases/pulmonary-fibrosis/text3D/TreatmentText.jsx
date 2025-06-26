/* eslint-disable react/prop-types */
import { Html } from "@react-three/drei";
import "./Title.css";

const TreatmentText = ({ text }) => {
  return (
    <Html
      center
      position={[1, 2, 0]}
      transform
      distanceFactor={4}
      rotation={[0, 0.5, 0]}
      wrapperClass="title"
    >
      <h1> {text} </h1>
    </Html>
  );
};

export default TreatmentText;
