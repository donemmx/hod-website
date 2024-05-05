import Header from "@components/Header";
import Banner from "@components/Banner/Banner";
import CtaSection from "@sections/home-1/Cta/CtaSection";
import FooterLayoutOne from "@components/Footer/FooterOne";
import FaqSection from "@sections/inner-pages/FaqThree/Faq/FaqSection";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
let settingProps = {
  footer: {
    className: " footer-padding-default footer--dark-v1",
    logo: "logo-white.svg",
  },
};
const FaqThreePage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-hod btn-hod--header rounded-pill btn-fill--up" />
        <Banner title="FAQs" text="FAQ" />
        <FaqSection />
        <CtaSection />
        <FooterLayoutOne {...settingProps.footer} />{" "}
      </Layout>
    </>
  );
};

export default FaqThreePage;
