import PortfolioWidgetOne from "@components/Widgets/Portfolio/One/PortfolioWidgetOne";
import SectionHeading from "@components/Layout/SectionHeading";
import Button from "@components/Buttons/Button";

const settings = {
  sectionTitle: {
    columnLeft: "col-xl-6  col-md-8",
    className: "text-center text-md-initial",
    title: "We create world-class web applications",
    titleClass: "heading-md text-black",
    buttonClass: "btn-hod rounded-pill btn-fill--up",
    buttonText: "See more works",
    link: "portfolio.html",
  },
  cardOne: {
    image: "/image/portfolio/heirs-mobile.png",
    title: "Heirs Insurance",
    category: "Mobile App",
    url: "/portfolio-details",
    button: true,
  },
  cardTwo: {
    image: "/image/portfolio/the-mirror.png",
    title: "The Mirror",
    category: "Web App",
    url: "/portfolio-details",
    button: true,
  },
  cardThree: {
    image: "/image/portfolio/charis.png",
    title: "Charis coding",
    category: "Web App",
    url: "/portfolio-details",
    button: true,
  },
};

let settingProps = {
  sectionHeading: {
    type: "double",
    title: "We create world-class web applications",
    buttonText: "See more works",
    classes: {
      columnLeft: "col-xl-6  col-md-8 ",
      columnRight: "col-xl-3 col-lg-4 col-md-4",
      className: "text-center text-md-initial",
      title: "heading-md text-black",
      row: "text-center text-md-initial",
    },
  },
};
const Portfolio = () => {
  return (
    <div
      className="home-1_portfolio-section section-padding-120"
      id="portfolio"
    >
      <div className="portfolio-shape">
        <img src="/image/home-1/portfolio-shape.png" alt="shape" />
      </div>
      <div className="container">
        <SectionHeading {...settingProps.sectionHeading}>
          <Button
            className="btn-hod rounded-pill btn-fill--up"
            href={'/portfolio'}
          >
            See more works
          </Button>
        </SectionHeading>

        <div className="row row--portfolio-gutter">
          <div
            className="col-md-4 col-xs-10"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <PortfolioWidgetOne {...settings.cardOne} />
          </div>
          <div
            className="col-md-4 col-xs-10"
            data-aos-duration="1000"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <PortfolioWidgetOne {...settings.cardTwo} />
          </div>
          <div
            className="col-md-4 col-xs-10"
            data-aos-duration="1000"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <PortfolioWidgetOne {...settings.cardThree} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
