import { Html } from "@react-three/drei";
import './Text2dPrevention.css';

const Text2dPrevention = () => {
    return (
        <Html center position={[0, -4, 0]} className="text-container">
            <div className="text-treatment">
                El inhalador: clave en el control y tratamiento del asma.
            </div>
        </Html>
    );
};

export default Text2dPrevention;
