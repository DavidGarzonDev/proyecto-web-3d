import { Html } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Html
    center
    position={[0, 24, 0]}
    transform
    distanceFactor={30}
    wrapperClass="title"
    >
        <h1> {title} </h1>      
    </Html>
  );
};

export default Title;
