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


  return (
    <>
      <SEO pageTitle={serviceItem.title} />
      <Header />
      <Breadcrumb title={serviceItem.title} subtitle="Service Details" />

      <div className="services-details-area pt-100 pb-105">
        <div className="container">
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
          <div className="services-text mb-25">
            <h2 className="center-text-heading">
              {serviceItem.sections[0].sectionTitle}
            </h2>
            <div className="why-choose-us-grid">
              {serviceItem.sections[0].subsections.map((subsection, subIndex) => (
                <div className="grid-item" key={subIndex}>
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
           <div className="services-text mb-25">
            <h2 className="center-text-heading">
              {serviceItem.sections[1].sectionTitle}
            </h2>
            {/* Check if it's mobile, and if so, render the slider */}
            {isMobile ? (
               <Slider className="custom-slider" {...sliderSettings}>
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
              </Slider>
            ) : (
              // On larger screens, render the packages as-is
              <div className="packages-container">
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

          {/* 4 Simple Steps Section */}
          <h5 className="services-sm-title mb-25">4 Simple Steps</h5>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet,
          </p>

          {/* 4 Simple Steps Grid */}
          <div className="row mt-70">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6"
                key={index}
              >
                <div className="step-item text-center mb-30">
                  <div className="step-number-wrapper">
                    <span className="step-number">0{index + 1}</span>
                  </div>
                  <h6 className="step-title mt-40">Step {index + 1}</h6>
                  <p>
                    Sed quia non numquam eius <br /> modi tempora incidunt s
                  </p>
                  <div className="step-item-shape shape-1">
                    <img
                      src="/assets/img/shape/arrow-shape-1.png"
                      alt="arrow-shape"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
