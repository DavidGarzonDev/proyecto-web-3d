import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextSymtompsCancer2.css';

const TextSymptomsCancer2 = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    
    return (
        <Html center position={[0, -2.5, 0]} className="text-container-cancer2">
            <div className="text-symptom-cancer2">
                <button onClick={openModal}>Información</button>
                
                {isModalOpen && (
                    <div className="modal-overlay-cancer2" onClick={closeModal}>
                        <div className="modal-content-cancer2" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-cancer2" onClick={closeModal}>
                                &times;
                            </button>
                            <h3>Toca el modelo, para esucharlo tocer!</h3>
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};  

export default TextSymptomsCancer2;