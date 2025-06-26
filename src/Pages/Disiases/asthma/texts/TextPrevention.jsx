import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextTreatment.css';

const TextTreatment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () => setIsModalOpen(false);
    const openModal = () => setIsModalOpen(true);
    
    return (
        <Html center position={[0, 2, 0]} className="text-container">
            <div className="text-treatment">
                <button className = "info-button" onClick={openModal}>ⓘ</button>

                {isModalOpen && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>
                                &times;
                            </button>
                            <h3>Mueve , Presiona P para ver el video en 3d y cerrarlo</h3>
                        </div>
                    </div>
                )}
            </div>
        </Html>
    );
};  

export default TextTreatment;