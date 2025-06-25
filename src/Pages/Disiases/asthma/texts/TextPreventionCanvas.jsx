import { Html } from "@react-three/drei";
import './TextPreventionCanvas.css';

const Text2dPrevention = () => {
    return (
        <Html center position={[0, -2.8, 0]} className="text-container">
            <div className="text-treatment">
                El ejercicio moderado también puede ser parte del manejo del asma.
            </div>
        </Html>
    );
};

export default Text2dPrevention;
