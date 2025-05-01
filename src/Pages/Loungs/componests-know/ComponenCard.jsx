import React from "react";
import "../KnowYourLungs.css"


const props = {
    
}

const ComponenCard = () => {
  return (
    <div className="card-scroll">
      <div className="card-rotation">
        <div className="card-inner">
          <div className="card-curiosity-front">
            <h2 className="card-title">{title}</h2>
            <div className="img-loungs-curiosity">img.png</div>
          </div>
          <div className="card-curiosity-back">
            <h2 className="card-title">Tamaño</h2>
            <p className="card-text">
              Los pulmones son órganos esponjosos y flexibles que ocupan la
              mayor parte de la cavidad torácica. En un adulto promedio, los
              pulmones tienen un volumen total de aproximadamente 6 litros,
              aunque solo una parte de este volumen se utiliza para el
              intercambio de gases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponenCard;
