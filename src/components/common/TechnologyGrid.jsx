import React, { useState, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';
import technologyData from '../../data/technologyData';

const TechnologyGrid = () => {
  const [active, setActive] = useState('Frontend');
  const [filteredTechnologies, setFilteredTechnologies] = useState([]);

  // Initialize filteredTechnologies with the full technologyData array
  useEffect(() => {
    setFilteredTechnologies(technologyData);
  }, []);

  // Update filteredTechnologies whenever active category changes
  useEffect(() => {
    if (technologyData[active]) {
      setFilteredTechnologies(technologyData[active]);
    } else {
      setFilteredTechnologies([]);
    }
  }, [active]);

  // Handle filtering technology items
  const handleFilterItems = (category) => {
    setActive(category);
  };

  return (
    <div className="tp-creative-lists-area tp-creative-padding pt-140 pb-140">
      {/* Add your filter buttons here */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-creative__menu tp-creative__menu-grid text-center filter-button-group mb-70">
              {/* Map over categories and create filter buttons */}
              {Object.keys(technologyData).map((category) => (
                <button
                  key={category}
                  className={`filter-button ${active === category && 'active'}`}
                  onClick={() => handleFilterItems(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Display technology logos */}
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 900: 3 }}>
        <Masonry gutter="25px">
          {filteredTechnologies.map((item) => (
            <motion.div
              layout
              animate={{ scale: 1 }}
              initial={{ scale: 0.9 }}
              exit={{ scale: 1 }}
              transition={{ duration: 0.8 }}
              key={item.id}
              className="technology-item mb-60"
            >
              <div className="technology-logo">
                {/* Adjust the image size as needed */}
                <img
                  src={item.logo}
                  alt={item.name}
                  style={{ width: '100px', height: 'auto' }}
                />
              </div>
              <div className="technology-name">{item.name}</div>
            </motion.div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TechnologyGrid;