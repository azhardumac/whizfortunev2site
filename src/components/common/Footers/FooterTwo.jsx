import React from 'react';

const FooterTwo = () => {
  return (
    <>
      <footer>
        <div className="tpfooter-area black-bg-2 pt-115 pb-75">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-4 col-md-6">
                <div className="footer__widget">
                  <h5 className="footer-sm-title mb-20">FEEL FREE TO CONTACT US</h5>
                  <h5 className="footer-sp-title mb-15"><i className="fa-solid fa-comment"></i> <a href="tel:+08956786421">+91-8956786421</a></h5>
                  <span className="footer-sp-contact"><a href="mailto:info@whizfortune.com">info@whizfortune.com</a></span>
                  <div className="footer-xs-wrapper mt-60 mb-30">
                    {/* <h5 className="footer-xs-title">Career</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt.</p> */}
                    <img src='assets/img/logo/whizlogo.png' style={{ maxWidth: '300px' }}></img>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 offset-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20">Useful links</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Help & About us</a></li>
                      <li><a href="#">Shipping & Returns</a></li>
                      <li><a href="#">Refund Policy</a></li>
                    </ul>
                  </div>
                  <h5 className="footer-xs-title mb-20">Useful links</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">How it Works</a></li>
                      <li><a href="#">Help & About us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h5 className="footer-xs-title mb-20">Support service</h5>
                  <div className="footer-links mb-30">
                    <ul>
                      <li><a href="#">Orders</a></li>
                      <li><a href="#">Downloads</a></li>
                      <li><a href="#">Shipping & Returns</a></li>
                      <li><a href="#">Addresses</a></li>
                      <li><a href="#">Account details</a></li>
                      <li><a href="#">Logout</a></li>
                      <li><a href="#">Lost password</a></li>
                      <li><a href="#">Orders</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tpcopyright-area-4 border-top-2 black-bg-2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-7">
                <p>© 2023 Whizfortune. All Rights Reserved.</p>
              </div>
              <div className="col-xl-6 col-lg-5">
                <div className="copyright-links">
                  <a href="#">Terms and conditions</a>
                  <a href="#">Privacy policy</a>
                  <a href="#">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;