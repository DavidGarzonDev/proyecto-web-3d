import { Html } from "@react-three/drei";
import './TextSymtomps.css';

const TextSymptoms = () => {
    return (
        <Html center position={[0, 5, 0]} className="text-container">
            <div className="text-symptom">
                <h3>Toca o presiona la tecla "T" para escuchar</h3>
            </div>
        </Html>
    );
};  

export default TextSymptoms;
