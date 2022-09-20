import React from "react";

import "./FlippingCard.css";

const FlippingCard = ({ skill, icon }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">{skill}</div>
        <div className="flip-card-back">
          {icon !== "Express" ? (
            <iconify-icon inline icon={icon}></iconify-icon>
          ) : (
            <>
              <p className="express-icon">{icon}</p>
              <iconify-icon inline icon="logos:javascript"></iconify-icon>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
