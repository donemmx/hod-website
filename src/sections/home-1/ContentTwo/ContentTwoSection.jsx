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
                  Why reinvent the wheel? We build on the work of great Open
                  Source giants
                </h2>
                <p>
                Instead of starting from scratch, we embrace the foundational work of established Open Source giants. This approach allows us to innovate more efficiently and deliver robust, high-quality solutions to our clients. By leveraging existing open-source technologies, we can focus on enhancing and customizing these resources to meet our clients' unique needs. 
                </p>
              </div>
              <div className="content-list-block">
                <ul className="content-list">
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                   This strategy saves time and effort 
                  </li>
                  <li className="content-list-item">
                    <img
                      src="/image/icons/icon-check-blue.svg"
                      alt="alternative text"
                    />
                   Contributes to a collaborative ecosystem that benefits the entire tech community.
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
