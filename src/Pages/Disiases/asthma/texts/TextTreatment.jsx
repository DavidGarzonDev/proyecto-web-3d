import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextTreatment.css';

const TextTreatment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    
    return (
        <Html center position={[0, -3, 0]} className="text-container">
            <div className="text-treatment">
                <button onClick={openModal}>Información</button>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>
                                &times;
                            </button>
                            <h3>Toca el modelo o presiona la tecla I para escuchar</h3>
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};  

export default TextTreatment;