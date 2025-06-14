import { Html } from "@react-three/drei";
import { useState } from "react";
import "./InfoPulmonaryFibrosis.css";

const InfoPreventionFibrosis = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <Html center position={[0, 1.3, 0]} className="text-container">
      <div className="text-treatment">
        <button onClick={openModal}>Información</button>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
              <h3>
                Rota el modelo con el mouse, Dale clic o a la tecla G para animar
              </h3>
            </div>
          </div>
        )}
      </div>
    </Html>
  );
};

export default InfoPreventionFibrosis;
