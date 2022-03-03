import React, { useEffect, useState } from 'react';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul className="portfolio-list">
        <li className="li-active">Featured</li>
        <li>E-Commerce Store</li>
        <li>Web App</li>
        <li>Web App</li>
        <li>Web App</li>
      </ul>
      <div className="portfolio-container">
        <div className="portfolio-item">
          <img src="assets/empty-project.png" alt="" className="portfolio-img" />
          <h3 className="portfolio-title">In Vino Veritas</h3>
        </div>
        <div className="portfolio-item">
          <img src="assets/empty-project.png" alt="" className="portfolio-img" />
          <h3 className="portfolio-title">Blank</h3>
        </div>
        <div className="portfolio-item">
          <img src="assets/empty-project.png" alt="" className="portfolio-img" />
          <h3 className="portfolio-title">Project: Placeholder</h3>
        </div>
        <div className="portfolio-item">
          <img src="assets/empty-project.png" alt="" className="portfolio-img" />
          <h3 className="portfolio-title">Project: Placeholder 2</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
