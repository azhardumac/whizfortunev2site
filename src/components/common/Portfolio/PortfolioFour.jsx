import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import portfolioData from '../../../data/portfolioData';

const PortfolioFour = ({ padd }) => {
  const [portfolios, setPortfolios] = useState(portfolioData.slice(0, 13));
  const uniqueCategories = ['All',...new Set(portfolioData.map(item => item.category))];
  const [active, setIsActive] = useState('All');

  const handleFilterItems = category => {
    setIsActive(category);
    if (category === 'All') {
      setPortfolios(portfolioData.slice(0, 13));
    } else {
      const filterItems = portfolioData.filter(item => item.category === category);
      setPortfolios(filterItems.slice(0, 13));
    }
  };

  return (
    <>
      <div id="tp-creative" className={`tp-creative-lists-area ${padd ? padd : 'pt-50 pb-140'}`}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-creative__menu tp-creative__menu-grid tp-creative__menu-curve text-center filter-button-group mb-80">
                {uniqueCategories.map(category => (
                  <button
                    key={category}
                    className={`tp-cr-btn ${active === category && 'active'}`}
                    onClick={() => handleFilterItems(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="row grid-masonry">
            {portfolios.map(item => (
              <motion.div
                layout
                animate={{ scale: 1 }}
                initial={{ scale: 0.9 }}
                exit={{ scale: 1 }}
                transition={{ duration: 0.8 }}
                key={item.id}
                className="col-xl-6 col-lg-6 col-md-6"
              >
                <div className="tppg-project mb-35">
                  <div className="tppg-project__thumb">
                    <div className="tppg-project__thumb-image">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>
                          <img src={item.img} alt="project-img" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="tppg-project__content">
                    <span className="tppg-project-tag mb-10">{item.industry}</span>
                    <h4 className="tppg-project-title">
                      <Link href={`/portfolio-details/${item.id}`}>
                        <a>{item.title}</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-xl-12 text-center">
              <div className="cta-banner">
                <p>If you&apose;re impressed, get in touch with us today.</p>
                <Link href="/contact">
                  <a className="tp-solid-btn">Get in Touch</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioFour;
