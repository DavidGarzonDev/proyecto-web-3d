import React from "react";
import "../KnowYourLungs.css";

const ComponenCard = ({ title, imageSrc, backTitle, description }) => {
  return (
    <div className="card-scroll">
      <div className="card-rotation">
        <div className="card-inner">
          <div className="card-curiosity-front">
            <h2 className="card-title">{title}</h2>
            <div className="img-loungs-curiosity">
              <img src={imageSrc} alt={title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </div>
          </div>
          <div className="card-curiosity-back">
            <h2 className="card-title">{backTitle}</h2>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponenCard;
