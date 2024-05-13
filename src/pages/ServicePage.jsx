import Header from "@components/Header";
import ServiceSection from "@sections/inner-pages/Service/Service";
import Banner from "@components/Banner/Banner";
import ContentSection from "@sections/inner-pages/Service/Content";
import PricingSection from "@sections/inner-pages/Service/Pricing";
import FaqSection from "@sections/inner-pages/Service/FAQ/FaqSection";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "brand-logo/hod-logo.png",
  },
};
const ServicePage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-hod btn-hod--header rounded-pill btn-fill--up" />
        <Banner title="Our Services" text="Our Services" />
        <ServiceSection />
        <ContentSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default ServicePage;
