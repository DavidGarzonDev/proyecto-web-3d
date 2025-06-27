import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextAlert3.css';

const TextAlert3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <Html center position={[12, 4, 0]} className="text-container-hypertension-principal">
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
              <h3>¡Anota gol presionando "F" o "G"!</h3>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

export default TextAlert3;