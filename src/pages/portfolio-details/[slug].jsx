import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FooterTwo from '../../components/common/Footers/FooterTwo';
import Header from '../../components/common/Header';
import SEO from '../../components/seo';
import portfolioData from '../../data/portfolioData';

const PortfolioDetails = () => {
  const router = useRouter();
  const [portfolioItem, setPortfolioItem] = useState({});
  const id = router.query.slug;

  useEffect(() => {
    if (!id) {

    }
    else {
      setPortfolioItem(portfolioData.find(item => item.id == id))
    }
  }, [id])
  return (
    <>
      <SEO pageTitle="Profile Details" />
      <Header />
      <div className="project-details-area pt-140 pb-130">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="aboutme-image mb-40">
                <img className="b-radius" src="/assets/img/project/project-d.jpg" alt="project img" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="aboutme-wrapper mb-40">
                <div className="aboutme-content">
                  <h3 className="tpabout-xd-title mb-50">
                    <b>{portfolioItem.title}</b>
                  </h3>
                </div>
                <div className="aboutme-feature-list mt-25">
                  <ul>
                    <li><p>Client:<a href="#"> {portfolioItem.client}</a></p></li>
                    <li><p>Category:<a href="#"> {portfolioItem.category}</a></p></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="project-details-content">
                {portfolioItem.aboutProject && Array.isArray(portfolioItem.aboutProject) ? (
                  portfolioItem.aboutProject.map((point, index) => (
                    <div key={index}>
                      <h4 className="tab-pane-title mb-30">{point.title}</h4>
                      <p>{point.content}</p>
                    </div>
                  ))
                ) : (
                  <p>No project details available.</p>
                )}
              </div>
              <div className="row mt-45">
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="project-details-dimage w-img mb-45">
                    <img className="b-radius" src={portfolioItem.img4} alt="project ig" />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="project-details-dimage w-img mb-45">
                    <img className="b-radius" src={portfolioItem.img3} alt="project img" />
                  </div>
                </div>
              </div>
              <p>Whizfortune Technologies is a dynamic digital solutions provider known for innovation and excellence. Our team of experts specializes in web design, custom software development, mobile apps, digital marketing, and more. We&apos;re passionate about creating unique and user-friendly digital experiences that exceed client expectations.
              <br/><br/>
At Whizfortune, we&apos;re committed to staying ahead of industry trends and delivering results that drive success. We believe in tailoring solutions to meet your unique needs. Whether you&apos;re a startup or an established enterprise, we&apos;re ready to be your digital partner.
<br/><br/>
Let&apos;s collaborate on your next project. Contact us at <a href="mailto:contact@whizfortune.com" className='custom-link'>contact@whizfortune.com</a> and discover how we can elevate your digital presence.</p>
              {/* <div className="project-details-nav mt-55">
                <div className="details-nav-item">
                  <Link href="/portfolio-details">
                    <a><i className="fas fa-long-arrow-left"></i> Back</a>
                  </Link>
                </div>
                <div className="details-nav-item">
                  <Link href="/portfolio-details">
                    <a>Next <i className="fas fa-long-arrow-right"></i></a>
                  </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <FooterTwo />
    </>
  );
};

export default PortfolioDetails;