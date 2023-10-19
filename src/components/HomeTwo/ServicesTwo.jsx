import Link from 'next/link';
import servicesData from '../../data/servicesData';

const ServicesTwo = () => {
  return (
    <>
      <section id="tpservices-area" className="tpservices-area-2 pt-50 pb-85 p-relative">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title text-center">
                <span className="tp-sub-title-2 mb-15">Our Offerings</span>
                <h2 className="tp-title">Choose Your Service</h2>
              </div>
            </div>
          </div>
          <div className="row mt-20">
            {
              servicesData.slice(0, 8).map(item => {
                return (
                  <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="tpservices tpservices-3 text-center mb-5">
                      <div className="tpservices__icon mb-10">
                        <img
                          src={item.icon}
                          alt={`Icon for ${item.title}`}
                          style={{ width: '75px', height: '75px' }} // Adjust the width and height as needed
                        />
                      </div>
                      <div className="tpservices__content">
                        <h4 className="tpservices__title mb-10">
                          <Link href={`/service-details/${item.id}`}>
                            <a>{item.title}</a>
                          </Link>
                        </h4>
                        <div className="tpservices__btn mt-10">
                          <Link href={`/service-details/${item.id}`}>
                            <a>
                              <span></span>
                              <span></span>
                              <span></span>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesTwo;