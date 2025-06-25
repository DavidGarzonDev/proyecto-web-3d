import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextTreatmentCancer.css';

const TextTreatmentCancer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    
    return (
        <Html center position={[0, 2, 0]} className="text-container-cancer-treatment">
            <div className="text-treatment-cancer-treatment">
                <button onClick={openModal}><strong>ⓘ</strong></button>

                {isModalOpen && (
                    <div className="modal-overlay-cancer-treatment" onClick={closeModal}>
                        <div className="modal-content-cancer-treatment" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close-cancer-treatment" onClick={closeModal}>
                                &times;
                            </button>
                            <h3>Presiona la tecla P en tu teclado para ver un video tratamientos!</h3>
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};  

export default TextTreatmentCancer;