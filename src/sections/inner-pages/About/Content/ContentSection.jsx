import { useState } from "react";
import ModalVideo from "react-modal-video";

const ContentSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className="about_content-section bg-light-2  section-padding-120">
        <div className="container">
          <div className="row row--custom ">
            <div className="col-xxl-6 col-lg-5 col-md-6 col-7">
              <div className="about_content-image-block ">
                <div className="about_content-image content-image--mobile-width">
                  <img
                    src="/image/about/video-image.png"
                    alt="alternative text"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-6 col-lg-7 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-md text-black">
                    Our vision is to build solutions and provide world-class
                    experiences to our clients
                  </h2>
                  <p>
                    We create technological tools and provide solutions to
                    businesses and consumers. We create top quality web and
                    mobile applications, visual experiences, as well as provide
                    special services such as automation, data analysis, business
                    digitization, data pipelines, AI implementations and lots
                    more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentSection;
