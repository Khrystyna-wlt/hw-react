import React from "react";
import './Card.css'; // Імпорт стилів

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <img src={img} alt={title} className="card-img" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;
