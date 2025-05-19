/* eslint-disable react/prop-types */
import { Html } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Html
    center
    position={[-0.4, 1.1, 0]}
    transform
    distanceFactor={3}
    wrapperClass="title"
    >
        <h1> {title} </h1>      
    </Html>
  );
};

export default Title;
