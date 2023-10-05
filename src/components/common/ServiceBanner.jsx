import React from "react";
import Counter from "../common/Counter";
import servicesData from "../../data/servicesData";


const ServiceBanner = ({ serviceName }) => {
  // Find the service object by matching the serviceName
  const service = servicesData.find((service) => service.title === serviceName);

  // Access the image URL from the service object
  const imageUrl = service?.image || ''; // Provide a default value if service or image is undefined

  // Define the inline styles for the div
  const divStyles = {
    backgroundImage: `url(${imageUrl})`, // Set the background image URL
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '300px',
  };
  return (
    <>
      <div className="sd-banner-area">
        <div className="sd-banner-wrapper">
          <div
            className="sd-banner-item sd-banner-item-height p-relative"
            style={divStyles} // Apply styles directly here
          >
            <div className="container">
              <div className="row justify-content-end">
                <div className="col-xl-6">
                  <div className="sd-banner-content">
                    <div className="sd-banner-sm-item">
                      <h5 className="count-number">
                        <Counter number={249} />
                      </h5>
                      <h2>Get Started with {serviceName}</h2>
                    </div>

                    <div className="sd-banner-sm-item sd-banner-sm-item-df">
                      <h5 className="count-number">
                        <Counter number={450} />
                      </h5>
                      <p>Statisfied Customers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceBanner;
