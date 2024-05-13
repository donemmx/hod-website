const ContentTwo = () => {
  return (
    <div className="home-1_content-section-2 padding-bottom-120">
      <div className="container">
        <div className="row row--custom">
          <div
            className="col-xl-5 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="home-1_content-image-2 content-image--mobile-width">
              <img
                src="/image/home-1/content-image-2.png"
                alt="alternative text"
              />
              <div className="home-1_content-image-2-shape">
                <img
                  src="/image/home-1/content-image-2-shape.svg"
                  alt="alternative text"
                />
              </div>
            </div>
          </div>
          <div
            className="offset-xl-1 col-xl-6 col-lg-7 col-md-11"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-black">
                Why Partner with Us?
                </h2>
                <p>
                At our core, we prioritize excellence. We understand the significance of quality, just as you do. Our commitment to delivering outstanding work is unwavering, ensuring that every project we undertake reflects the highest standards of craftsmanship and innovation.
                <br /> 
                You can expect:
                </p>
              </div>
              <div className="content-list-block">
                <ul className="content-list">
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                   Outstanding quality
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                   Dedication and Timely Execution
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                   Customer Satisfaction
                  </li>
              
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
