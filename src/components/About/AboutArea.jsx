import Link from 'next/link';

const AboutArea = () => {
  return (
    <>
      <div id="about-area" className="tpabout-area pt-140 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-content-2 pb-50">
                <h3 className="tpabout-xd-title mb-15"><b>Whizfortune</b></h3>
                <span className="tpabout-xs-title mb-40">Digital Solution For your Business</span>
                <p className="tpab-text mb-30">At Whizfortune, we are driven by a relentless passion for technology and a commitment to delivering exceptional solutions that transform businesses. Established with a vision to empower organizations with cutting-edge digital services, we have been at the forefront of innovation and excellence since our inception.</p>
                <p></p>
                <div className="tpabout-btn mt-50">
                  <Link href="/contact"><a className="tp-solid-btn">Get in touch</a></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="tpabout-image-2 pb-50">
                <img src="assets/img/about/tpabout-img.jpg" alt="about-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArea;