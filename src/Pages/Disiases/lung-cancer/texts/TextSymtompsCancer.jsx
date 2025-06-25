import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextSymtompsCancer.css';

const TextSymptomsCancer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    
    return (
        <Html center position={[2, 1.5, 0]} className="text-container-cancer-principal">
            <div className="text-symptom-cancer">
                <button onClick={openModal}>ⓘ</button>
                
                {isModalOpen && (
                    <div className="modal-overlay-cancer-principal" onClick={closeModal}>
                        <div className="modal-content-cancer-principal" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-cancer-principal" onClick={closeModal}>
                                &times;
                            </button>
                            <h3>Mueve el modelo usando el raton, explora y divierte con este modelo del pulmon!</h3>
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};  

export default TextSymptomsCancer;