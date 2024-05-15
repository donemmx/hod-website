import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import Button from "@components/Buttons";

const HeroSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="home-1_hero-section" id="hero">
      <div className="home-1_hero-shape-1">
        <img src="/image/home-1/hero-shape-1.svg" alt="hero shape One" />
      </div>
      <div className="home-1_hero-shape-2">
        <img src="/image/home-1/hero-shape-2.svg" alt="hero shape two" />
      </div>
      <div className="container">
        <div className="row row--hero-content">
          <div className="col-xxl-auto col-lg-6 col-md-7 col-sm-8 col-10  transform-none ">
            <div className="home-1_hero-image-block">
              <div className="home-1_hero-image">
                <img src="/image/home-1/business-solution.png" alt="hero image" />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-auto col-lg-6 col-md-10"
            data-aos-duration={1000}
            data-aos="fade-right"
            data-aos-delay={300}
          >
            <div className="home-1_hero-content">
              <div className="home-1_hero-content-text">
                <h1 className="hero-content__title heading-lg">
                  Enabling Business Growth with Software Solutions
                </h1>
                <p>
                Build top-tier digital products with our design, development, and strategy specialists—all in one team. We deliver comprehensive software solutions to drive your business forward.
                </p>
              </div>
              <div className="home-1_hero-newsletter">
                {/* <form action="#" className="newsletter-form-1">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                  /> */}
                  <Button className="rounded-pill w-fit" href={'/contact'}>
                    Contact Us
                  </Button>
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
