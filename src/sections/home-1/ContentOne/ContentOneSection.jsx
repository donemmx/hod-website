const ContentSectionOne = () => {
  return (
    <div className="home-1_content-section-1 section-padding-120" id="about">
      <div className="container">
        <div className="row row--custom">
          <div
            className="offset-xl-1 col-lg-5 col-auto"
            data-aos-duration={1000}
            data-aos="fade-left"
          >
            <div className="home-1_content-image-1 content-image--mobile-width">
              <img
                src="/image/home-1/content-image-1.png"
                alt="Content Image Main"
              />
              <div className="home-1_content-image-1-shape">
                <img
                  src="/image/home-1/content-image-1-shape.svg"
                  alt="Content Image Shape"
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-7 col-md-10 col-auto"
            data-aos-duration={1000}
            data-aos="fade-right"
          >
            <div className="content">
              <div className="content-text-block">
                <h2 className="content-title heading-md text-black">
                We leverage top technology to maximize our productivity.
                </h2>
                <p>
                By harnessing the latest advancements in technology, we empower our clients to reach new heights of productivity. Our tailored solutions optimize workflows, enhance efficiency, and support sustained business growth.
                </p>
                <p>
                With our expertise, businesses can achieve more in less time and stay ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSectionOne;
