/* eslint-disable react/prop-types */
import { Html } from "@react-three/drei";
import "./Title.css";

const Rotating = ({ text }) => {
  return (
    <Html
      center
      position={[-0.3, 1.1, 0]}
      transform
      distanceFactor={3}
      wrapperClass="title"
    >
      <h1> {text} </h1>
    </Html>
  );
};

export default Rotating;
