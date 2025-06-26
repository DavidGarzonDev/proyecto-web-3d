/* eslint-disable react/prop-types */
import { Html } from "@react-three/drei";
import "./Title.css";

const SymptomsText = ({ text }) => {
  return (
    <Html
      center
      position={[0, -5, 0]}
      transform
      wrapperClass="title"
    >
      <h1> {text} </h1>
    </Html>
  );
};

export default SymptomsText;