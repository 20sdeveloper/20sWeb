import React from "react";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <div className="logo">
                    <Link to="/">
                      <img src="/img/logo/w_logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="footer-social">
                    <ul className="list-wrap">
                      <li>
                        <a href="https://facebook.com/20sDevelopers">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="active">
                        <a href="https://twitter.com/20sDevelopers">
                        <i className="fab fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.google.com/search?q=20s+developers&sca_esv=89a14cf8da278dde&sxsrf=AE3TifMvjwNPSmmx-rNPtOOwIlPkWhlXYg%3A1750240539490&ei=G41SaO7RHdWjvr0PoZGZGA&ved=0ahUKEwiuy4KN2vqNAxXVka8BHaFIBgMQ4dUDCBA&uact=5&oq=20s+developers&gs_lp=Egxnd3Mtd2l6LXNlcnAiDjIwcyBkZXZlbG9wZXJzMgUQABiABDILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMgUQABjvBTIFEAAY7wUyBRAAGO8FSOccUI4BWJUacAF4AZABAJgBkASgAdsUqgELMC40LjUuMS4wLjG4AQPIAQD4AQGYAgygAoIWwgIKEAAYsAMY1gQYR8ICDRAAGIAEGLADGEMYigXCAgoQABiABBhDGIoFwgIREC4YgAQYxwEYmAUYmgUYrwHCAgsQABiABBiRAhiKBcICAhAmwgIGEAAYFhgewgIIEAAYFhgKGB6YAwCIBgGQBgqSBwkxLjMuNi4xLjGgB5pAsgcJMC4zLjYuMS4xuAfoFcIHCDItMS4xMC4xyAeZAQ&sclient=gws-wiz-serp">
                          <i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://linkedin.com/company/20sDevelopers">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-contact">
                    <span>For Support</span>
                    <h2 className="title">
                      <a href="tel:8625874209">+91 8625874209</a>
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Primary Pages</h4>
                  <div className="fw-link">
                    <ul className="list-wrap">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/about-us">About</Link>
                      </li>
                      <li>
                        <Link to="/services-details">Service</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">Description</h4>
                  <div className="fw-link">
                  <p>At 20s Developers, we are dedicated to delivering innovative digital solutions tailored to your business needs. Our expert team specializes in web and mobile application development, digital marketing, and advanced AI technologies.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="footer-widget">
                  <h4 className="fw-title">About Store</h4>
                  <div className="footer-about">
                    <ul className="list-wrap">
                      <li>
                        <img src="/img/icon/phone_icon.svg" alt="" />
                        <a href="tel:8625874209">+91 8625874209</a>
                      </li>
                      <li>
                        <img src="/img/icon/mail_icon.svg" alt="" />
                        <a href="mailto:20sdevelopers4209@gmail.com">20sdevelopers4209@gmail.com</a>
                      </li>
                      <li>
                        <img src="/img/icon/loction_icon.svg" alt="" />
                        <span>Panvel, Mumbai, Maharashtra, India </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="cart-img">
                  {/* <img src="/img/images/cart_img.png" alt="" /> */}
                </div>
              </div>
              <div className="col-md-6 " >
                <div className="copyright-text ">
                  <p>© 2025 20s Developers. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;

