import { Html } from "@react-three/drei";
import "./Title2.css";

const Title2 = ({ title2 }) => {
  return (
    <Html
    center
    position={[-0.5, 2.5, 1]}
    transform
    distanceFactor={5}
    wrapperClass="title2"
    >
        <h1> {title2} </h1>      
    </Html>
  );
};

export default Title2;
