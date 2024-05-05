import Header from "@components/Header";
import ErrorSection from "@sections/error/ErrorSection";
import Layout from "@components/Layout/PageWrapper/PageWrapper";
const ErrorPage = () => {
  return (
    <>
      {" "}
      <Layout>
        <Header signUpButtonClass="btn-hod btn-hod--header rounded-pill btn-fill--up" />
        <ErrorSection />{" "}
      </Layout>
    </>
  );
};

export default ErrorPage;
