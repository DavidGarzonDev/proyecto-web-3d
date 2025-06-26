
import { Html } from "@react-three/drei";
import { useState } from "react";
import './TextPrecautionCancer.css';

const TextPrecautionCancer = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
  
      const closeModal = () => setIsModalOpen(false);
      const openModal = () => setIsModalOpen(true);
      
      return (
          <Html center position={[0, -3, -6]} className="text-precaution-cancer2">
              <div className="text-precaution-cancer2">
                  <button onClick={openModal}>ⓘ</button>
                  
                  {isModalOpen && (
                      <div className="modal-overlay-precaution" onClick={closeModal}>
                          <div className="modal-content-precaution" onClick={(e) => e.stopPropagation()}>
                              <button className="modal-close-precaution" onClick={closeModal}>
                                  &times;
                              </button>
                              <h3>Toca el modelo o presiona la tecla O para ver increibles animaciones!</h3>
                          </div>
                      </div>
                  )}
              </div>
          </Html>
      );
}

export default TextPrecautionCancer