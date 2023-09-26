// src="/assets/img/services/cloudservices.jpg"
       


import React from 'react';

const ServiceBanner = ({ serviceName }) => {
  return (
    <div className="service-banner">
      {/* Background Image */}
      <div
        className="banner-image"
        style={{
          backgroundImage: `url('/assets/img/services/cloudservices.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="overlay">
          <div className="banner-form">
            <h2>Get Started with {serviceName}</h2>
            <p>Fill out the form below to learn more about our {serviceName} services.</p>
            {/* Add your form input fields here */}
            <form>
              {/* Form fields go here */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
