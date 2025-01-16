import React from "react";
import { Link } from "react-router-dom";
import "./RecommendedProducts.scss";

const RecommendedProducts = () => {
  return (
    <section className="recommended-section">
      <div className="recommended-container">
        <h2>Productos Recomendados</h2>
        <Link to="/productos" className="recommended-button">
          Ver Productos Recomendados
        </Link>
      </div>
    </section>
  );
};

export default RecommendedProducts;
