import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import PortfolioSection from "@sections/inner-pages/PortfolioOne/Portfolio";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "brand-logo/hod-logo.png",
  },
};
const PortfolioOnePage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-hod btn-hod--header rounded-pill btn-fill--up" />
        <Banner title="Portfolio" text="Portfolio" />
        <PortfolioSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default PortfolioOnePage;
