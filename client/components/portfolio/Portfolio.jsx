import React, { useEffect, useState } from 'react';
import PortfolioList from './PortfolioList';
import { featuredPortfolio, wineStore, portfolioCreator } from './data';
const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);

  const list = [
    {
      id: 'featured',
      title: 'Featured',
    },
    {
      id: 'wine',
      title: 'Wine Shop',
    },
    {
      id: 'kard',
      title: 'Portfolio Creator',
    },
  ];

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'wine':
        setData(wineStore);
        break;
      case 'kard':
        setData(portfolioCreator);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1 className="portfolio-header">Portfolio</h1>
      <ul className="portfolio-list">
        {list.map((item) => (
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
        ))}
      </ul>
      <div className="portfolio-container">
        {data.map((d) => (
          <div className="portfolio-item">
            <img className="portfolio-img" src={d.img} alt="" />
            <h3 className="portfolio-title">{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
