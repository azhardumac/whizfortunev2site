import React from 'react';
import servicesData from '../../data/servicesData';

const ServiceHero = ({ selectedService }) => {
  if (!selectedService) {
    return null; // Handle the case where no service is selected
  }

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Get Consulted for {selectedService.title}
            </h1>
            <p className="hero-description">
              {selectedService.description}
            </p>
            <button className="cta-button">Schedule a Consultation</button>
          </div>
          <div className="hero-image">
            <img
              src={selectedService.image}
              alt={`Featured Image for ${selectedService.title}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
