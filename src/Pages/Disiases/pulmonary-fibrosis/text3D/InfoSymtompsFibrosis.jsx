import { Html } from "@react-three/drei";
import { useState } from "react";
import "./InfoPulmonaryFibrosis.css";

const InfoSymtompsFibrosis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <Html center position={[10, 6, 0]} className="text-container">
      <div className="text-treatment">
        <button onClick={openModal}>ⓘ</button>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <h3>
                Rota el modelo con el mouse o pulsa E para escucharlo toser
              </h3>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

export default InfoSymtompsFibrosis;