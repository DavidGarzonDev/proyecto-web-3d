import { Html } from "@react-three/drei";
import './TextPreventionCanvas.css';

const TextPreventionCanvas = () => {
    return (
        <Html center position={[0, -4, 0]} className="text-container">
            <div className="text-treatment">
                El inhalador: clave en el control y tratamiento del asma.
            </div>
        </Html>
    );
};

export default TextPreventionCanvas;
