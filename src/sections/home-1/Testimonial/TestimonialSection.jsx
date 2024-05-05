import SectionHeading from "@components/Layout/SectionHeading/SectionHeading";
import { Link } from "react-router-dom";

let settingProps = {
  sectionHeading: {
    title: "Most of our satisfied clients leave their feedback",
    column: "col-xxl-6 col-xl-7 col-lg-8 col-md-9",
    classes: {
      row: "justify-content-center text-center",
      title: "heading-md text-black",
    },
  },
};

const TestimonialSection = () => {
  return (
    <div
      className="home-1_testimonial-section section-padding-120 bg-light-2"
      id="testimonial"
    >
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading} />

        <div className="testimonial-widget-large">
          <div className="row row--custom ">
            <div
              className="col-lg-6 col-md-8 col-sm-10 col-xs-10"
              data-aos-duration={1000}
              data-aos="fade-right"
            >
              <div className="testimonial-widget-large__image">
                <img
                  src="/image/home-1/tunde-adegbola.webp"
                  alt="handsome-smiling-bearded-man-glasses-working-laptop"
                  className="testimonialImage"
                />
              </div>
            </div>
            <div
              className=" col-lg-6 col-md-10 col-auto"
              data-aos-duration={1000}
              data-aos="fade-left"
            >
              <div className="testimonial-widget-large__body">
                <div className="testimonial-widget-large__icon">
                  <img
                    src="/image/home-1/testimonial-icon.svg"
                    alt="testimonial icon"
                  />
                </div>
                <p className="testimonial-widget-large__review-text">
                  A very resourceful company. They are driven individuals who
                  have mastered technological tools in a way that gives them
                  competitive advantage.
                </p>
                <h4 className="testimonial-widget-large__user-name">
                  Dr Adegbola
                </h4>
                <span className="testimonial-widget-large__user-position">
                  AI Expert, a Research Scientist, Consulting Engineer and Cultural Activist 
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
