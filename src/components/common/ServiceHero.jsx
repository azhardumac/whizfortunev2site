import React from 'react';
import servicesData from '../../data/servicesData';


const ServiceHero = ({ selectedService,openModal}) => {
  if (!selectedService) {
    return null; // Handle the case where no service is selected
  }

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
          <h1 className=" center-text-heading">
              {selectedService.title}
            </h1>
            <h3 className="hero-title">
              {selectedService.bannertitle}
            </h3>
            <p className="hero-description">
              {selectedService.description}
            </p>
            <button onClick={() => openModal(selectedService)} className="cta-button" >Schedule a Consultation</button>
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
