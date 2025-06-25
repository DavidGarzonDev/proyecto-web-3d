import { Html } from "@react-three/drei";
import './Text2dPrevention.css';

const Text2dPrevention = () => {
    return (
        <Html center position={[0, -2.8, 0]} className="text-container">
            <div className="text-treatment">
                Prepara tu cuerpo, protege tus pulmones.
            </div>
        </Html>
    );
};

export default Text2dPrevention;
