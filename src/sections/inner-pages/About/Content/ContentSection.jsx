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
                    Our vision is to build brands and provide world-class
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
                  <div className="content-divider" />
                </div>
                <div className="content-testimonial">
                  <div className="content-testimonial__text">
                    <p>
                      “We love what we do &amp; create partnerships with our
                      clients to ensure their digital transformation is
                      positioned for long-term success.”
                    </p>
                  </div>
                  <div className="content-testimonial__user-metadata">
                    <div className="content-testimonial__user">
                      <img
                        src="/image/about/user-image.png"
                        alt="alternative text"
                      />
                    </div>
                    <div className="content-testimonial__body">
                      <h4 className="content-testimonial__user-name">
                        Karen Lynn
                      </h4>
                      <span>CEO &amp; Co-founder @ Company</span>
                    </div>
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

export default ContentSection;
