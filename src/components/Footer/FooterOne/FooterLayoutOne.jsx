import { hasClassProps } from "@utils/helpers";
import { Link } from "react-router-dom";

const FooterLayoutOne = ({ className, logo, socialClass }) => {
  const today = new Date().getFullYear()
  return (
    <div className={`footer${hasClassProps(className)}`}>
      <div className="container">
        <div className="row row--footer-main">
          <div className="col-md-8 col-lg-5 col-xl-5 col-xxl-4">
            <div className="footer__content-block">
              <div className="footer__content-text">
                <div className="footer-brand">
                  <img className="brandLogo" src={`/image/${logo}`} alt="image alt" />
                </div>
                <p>
                  We are strategic & creative digital agency who are focused on
                  user experience, mobile, social, data gathering and
                  promotional offerings.
                </p>
              </div>

              <a href="mailto:contact@headofdays.com" className="footer-link">
                contact@headofdays.com
              </a>
              <br />
              <ul
                className={`list-social${socialClass ? ` ${socialClass}` : ""}`}
              >
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-lg-7 col-xl-6 col-xxl-7 offset-xl-1">
            <div className="row row--list-block">
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Links</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/service">Services</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto">
                <h3 className="footer-title">Others</h3>
                <ul className="footer-list">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  
                </ul>
              </div>
              <div className="col-auto col-md-4 col-lg-auto col-xl-auto col-xxl-auto"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-block">
        <div className="container">
          <div className="copyright-inner text-center  copyright-border">
            <p>© Copyright {today}, All Rights Reserved by Head of days LTD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
