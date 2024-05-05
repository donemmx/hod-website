import { Link } from "react-router-dom";

const FactSection = () => {
  return (
    <>
      <div className="about_fact-section  section-padding-120">
        <div className="container">
          <div className="row row--custom ">
            <div className="col-xxl-auto  col-lg-7 col-md-10 col-auto">
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-md text-black">
                  Your Trusted Partner for Modern Business Solutions
                  </h2>
                  <p>
                    Our exceptional performance and track record of delivering
                    top notch products and services has made us a go-to company
                    for companies seeking to take advantage of modern day tools
                    to advance their businesses. Our customers are special to us
                    and your satisfaction is top priority.
                  </p>
                </div>
                <div className="content-button-block">
                  <Link
                    to="/contact"
                    className="btn-hod btn-primary rounded-pill btn-fill--up"
                  >
                    <span>Get in touch</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8 col-auto">
              <div className="about_stats-wrapper">
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">15+</h2>
                    <span>Satisfied clients</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">80%</h2>
                    <span>Active Engagement</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about_stats-single">
                    <h2 className="about_stats-single__count">25+</h2>
                    <span>Success projects</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="about_stats-single">
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactSection;
