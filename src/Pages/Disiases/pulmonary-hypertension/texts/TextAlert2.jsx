import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextAlert2.css';

const TextAlert2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <Html center position={[1, 1, 0]} className="text-container-hypertension-principal">
      <div className="text-principal-hypertension">
        <button 
          onClick={openModal} 
          aria-label="Abrir instrucciones" 
          title="Abrir instrucciones"
        >
          ⓘ
        </button>

        {isModalOpen && (
          <div className="modal-overlay-hypertension-principal" onClick={closeModal}>
            <div className="modal-content-hypertension-principal" onClick={(e) => e.stopPropagation()}>
              <button 
                className="modal-close-hypertension-principal" 
                onClick={closeModal}
                aria-label="Cerrar modal"
              >
                &times;
              </button>
              <h3>¡Presions "F" para flotar!</h3>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

export default TextAlert2;