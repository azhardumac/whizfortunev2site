import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import CustomModal from '../common/CustomModal';
import popupData from '../../data/popupData';

const CtaTwo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ctaText, setCtaText] = useState('');

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    // Set the CTA text with the service name from popupData
    setCtaText(`Schedule a Meeting for ${popupData.serviceName}`);
  }, []);

  return (
    <section className="tpcta-area p-relative box-plr-85">
      <div className="container-fluid">
        <div
          className="tpcta-wrapper-2 text-center pt-130 pb-150"
          style={{
            backgroundImage: 'url(assets/img/bg/cta-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xxl-12">
                <div className="tpcta-inner tpcta-inner-2">
                  <div className="tpcta-button">
                    <button className="tp-white-btn" onClick={openModal}>
                      {ctaText} {/* Display dynamic CTA text */}
                    </button>
                    <Link href="/contact">
                      <a className="tp-white-btn">Schedule a Meeting</a>
                    </Link>
                  </div>

                  <CustomModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    title={popupData.title}
                    content={popupData.content}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
