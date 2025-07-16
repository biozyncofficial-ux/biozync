import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SolutionsSlider.css';
import c3TreeImg from '../assets/c3supertree.png'; // Add the correct image for C3 Super Tree
import c4TreeImg from '../assets/c4supertree.png';

function SolutionsSlider() {
  const navigate = useNavigate();

  const products = [
    {
      name: 'C3 Super Trees',
      tagline: 'Smart trees that waste less and capture more.',
      image: c3TreeImg,
      route: '/products/c3SuperTree',
    },
    {
      name: 'C4 Super Trees',
      tagline: 'The future of photosynthesis.',
      image: c4TreeImg,
      route: '/products/c4SuperTree',
    },
  ];

  return (
    <section className="solutions-slider" id="products">
      <h2>Our Solutions</h2>
      <div className="slider-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.tagline}</p>
            <button onClick={() => navigate(product.route)}>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SolutionsSlider;
