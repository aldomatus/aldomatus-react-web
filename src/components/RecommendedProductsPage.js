import React from "react";
import "./RecommendedProductsPage.scss";

const products = [
  {
    name: "Reposapiés",
    image: "https://http2.mlstatic.com/D_NQ_NP_2X_621165-MLM54346503181_032023-F.webp",
    link: "https://mercadolibre.com/sec/2RMD9Sg",
  }
];

const RecommendedProductsPage = () => {
  return (
    <div className="products-page">
      <h1>Productos Recomendados</h1>
      <ul className="products-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              Ir al producto
            </a>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedProductsPage;
