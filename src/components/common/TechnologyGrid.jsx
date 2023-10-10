import React, { useState, useEffect } from 'react';
import Masonry from 'react-responsive-masonry';
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
    <div className="custom-technology-grid mt-50 mb-150">
      <h2 className='custom-technology-item mb-20'>Technologies we work with.</h2>
      {/* Filter buttons */}
      <div className="custom-filter-buttons mt-20">
        {/* Map over categories and create filter buttons */}
        {Object.keys(technologyData).map((category) => (
          <button
            key={category}
            className={`custom-filter-button ${active === category && 'custom-active'} mb-30`}
            onClick={() => handleFilterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technology logos */}
      <div className="custom-technology-items">
        {filteredTechnologies.map((item) => (
          <motion.div
            layout
            animate={{ scale: 1 }}
            initial={{ scale: 0.9 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            key={item.id}
            className="custom-technology-item"
          >
            <div className="custom-technology-logo">
              {/* Adjust the image size as needed */}
              <img
                src={item.logo}
                alt={item.name}
                style={{ width: '100px', height: 'auto' }}
              />
            </div>
            <div className="custom-technology-name">{item.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
