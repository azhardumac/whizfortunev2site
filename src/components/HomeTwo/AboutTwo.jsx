import Link from 'next/link';
import useGlobalContext from '../../hooks/useGlobalContext';
import VideoModal from '../common/VideoModal';

const AboutTwo = () => {
  const { show, handleClose, handleShow } = useGlobalContext();
  return (
    <>
      <section className="tpagency-about-area box-plr-85">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-12">
              <div className="tpagency-about-wrapper pt-120 pb-120" style={{ backgroundImage: 'url(assets/img/bg/about-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} >
                <div className="row justify-content-center">
                  <div className="col-xxl-6 col-xl-8 col-lg-12 col-md-10">
                    <div className="tpagency-about text-center">
                      <div className="tp-section-title">
                        <span className="tp-sub-title-2 mb-20">About Whizfortune</span>
                        <h2 className="tp-title tp-title-df mb-30">Digital Solutions For Business Success</h2>
                      </div>
                      <p>At Whizfortune, we have been at the forefront of the digital and IT software and services industry since 2011. Based in Pune, we are committed to providing top-quality digital solutions that help businesses thrive in the online world. With a specialization in web design services for both small and large-scale enterprises, we combine creativity, innovation, and technical expertise to create stunning and effective websites.</p>
                      <div className="tpagency-about-button mt-55">
                        <Link href="/contact">
                          <a className="tp-solid-btn mr-20">Get Free Consultation</a>
                        </Link>
                        <button onClick={handleShow} className="tp-white-btn popup-video mb-20">View Our Portfolio <i className="fas fa-play"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal show={show} handleClose={handleClose} videoId="0kRBTJW4lL0" />
    </>
  );
};

export default AboutTwo;