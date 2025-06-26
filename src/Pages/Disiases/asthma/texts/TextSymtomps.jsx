import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextSymtomps.css'; // Usa tu archivo de estilos ajustado

const TextSymptoms = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    
    return (
        <Html center position={[-3.5, 5, 0]} className="text-container">
            <div className="text-treatment">
                <button className="info-button" onClick={openModal}>ⓘ</button>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>
                                &times;
                            </button>
                            <h3>Toca el modelo o presiona la tecla T para escuchar</h3>
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};

export default TextSymptoms;
