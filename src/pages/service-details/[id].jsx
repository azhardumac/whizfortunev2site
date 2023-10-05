import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import BrandArea from '../../components/common/BrandArea';
import Breadcrumb from '../../components/common/Breadcrumb';
import { useRouter } from 'next/router';
import FooterTwo from '../../components/common/Footers/FooterTwo';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import ServiceContact from '../../components/Service-details/ServiceContact';
import servicesData from '../../data/servicesData';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ServiceBanner from '../../components/common/ServiceBanner';

const ServiceDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const serviceItem = servicesData.find((item) => item.id == id);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the component is mounted
    let isMounted = true;

    // Update the isMobile state based on window width
    const handleResize = () => {
      if (isMounted) {
        setIsMobile(window.innerWidth < 768);
      }
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    // Clean up by removing the event listener
    return () => {
      isMounted = false;
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!serviceItem) {
    // Handle the case where the service with the specified ID is not found
    return (
      <>
        <SEO pageTitle="Service Details" />
        <Header />
        <Breadcrumb title="Service Details" subtitle="Service Details" />
        <div className="container">
          <p>Service details not found.</p>
        </div>
        <FooterTwo />
      </>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const divStyles = {
    maxWidth: "1500px", // You can adjust the width as needed
    // Other styles...
  };



  return (
    <>
      <SEO pageTitle={serviceItem.title} />
      <Header />
      <Breadcrumb title={serviceItem.title} subtitle="Service Details" />

      <div className="services-details-area pt-100 pb-105 ">
        <div className="container" >
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img
                  src={serviceItem.image}
                  alt="Service Image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="services-sm-image w-img mb-45">
                <img
                  src={serviceItem.image2}
                  alt="Service Image"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="services-details-area tpservices services-text mb-25">
            <h2 className="tpservices__title center-text-heading">
              {serviceItem.sections[0].sectionTitle}
            </h2>
            <div className="services-list-area services-details-area why-choose-us-grid">
              {serviceItem.sections[0].subsections.map((subsection, subIndex) => (
                <div className="services-details-area grid-item" key={subIndex}>
                  <div className="tpservices__icon-container">
                    <img
                      src={subsection.icon}
                      alt={`Icon for ${subsection.title}`}
                      className="tpservices__icon"
                    />
                  </div>
                  <h3>{subsection.title}</h3>
                  <div className="content-box">
                    <p>{subsection.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Packages Section */}
          <div className="tpservices tpservices-2  services-text mb-25">
            <h2 className="center-text-heading">
              {serviceItem.sections[1].sectionTitle}
            </h2>
            {/* Check if it's mobile, and if so, render the slider */}
            {isMobile ? (
              <Slider className="custom-slider" {...sliderSettings} pauseOnHover={false} pauseOnFocus={false}>
                {serviceItem.sections[1].subsections.map((subsection, subIndex) => (
                  <div className="package-item " key={subIndex}>
                    <div className="package-icon">
                      {/* Render the icon here */}
                      <i className={`fa ${subsection.icon} icon-large`}></i>
                    </div>
                    <h3>{subsection.title}</h3>
                    <p>{subsection.content}</p>
                  </div>
                ))}
              </Slider>
            ) : (
              // On larger screens, render the packages as-is
              <div className="tpservices__content packages-container">
                {serviceItem.sections[1].subsections.map((subsection, subIndex) => (
                  <div className="package-item" key={subIndex}>
                    <div className="package-icon">
                      {/* Render the icon here */}
                      <i className={`fa ${subsection.icon} icon-large`}></i>
                    </div>
                    <h3>{subsection.title}</h3>
                    <p>{subsection.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Technologies Section */}
          <div className="centered-container services-text mb-25">
            <div className="services-text mb-25">
              <h2 className="center-text-heading">Technologies</h2>
              <p className="section-subtitle">Subtitle goes here</p> {/* Add your subtitle here */}
              {/* Check if it's mobile, and if so, render the slider */}
              {isMobile ? (
                <Slider className="custom-slider" {...sliderSettings}>
                  {serviceItem.technologies.map((techCategory) => (
                    <div className="technologies-section" key={techCategory.category}>
                      <img
                        src={techCategory.icons} // Use the icon path for the category
                        alt={`Icon for ${techCategory.category}`}
                        className="category-icon"
                      />
                      <h3 className="technologies-category">{techCategory.category}</h3>
                      <ul>
                        {techCategory.techList.map((tech, index) => (
                          <li key={index} className="technology-item">
                            - {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Slider>
              ) : (
                // On larger screens, render the technologies as-is
                <div className="technologies-grid">
                  {serviceItem.technologies.map((techCategory) => (
                    <div className="technologies-section" key={techCategory.category}>
                      <img
                        src={techCategory.icons} // Use the icon path for the category
                        alt={`Icon for ${techCategory.category}`}
                        className="category-icon"
                      />
                      <h3 className="technologies-category">{techCategory.category}</h3>
                      <ul>
                        {techCategory.techList.map((tech, index) => (
                          <li key={index} className="technology-item">
                            - {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

         
        </div>
        <ServiceBanner serviceName={serviceItem.title} />

      </div>

      {/* ServiceContact */}
      <ServiceContact />
      {/* BrandArea */}
      <BrandArea padd="services-padd" />
      {/* FooterTwo */}
      <FooterTwo />
    </>
  );
};

export default dynamic(() => Promise.resolve(ServiceDetails), { ssr: false });
