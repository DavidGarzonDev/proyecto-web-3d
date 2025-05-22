import { Html } from "@react-three/drei";
import "./Title2.css";

const Title3 = ({ title3 }) => {
  return (
    <Html
    center
    position={[-0.5, 2, 1]}
    transform
    distanceFactor={2}
    wrapperClass="title3"
    >
        <h1> {title3} </h1>      
    </Html>
  );
};

export default Title3;
