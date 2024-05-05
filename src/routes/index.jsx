import { createBrowserRouter } from "react-router-dom";
import App from "../pages";
import Homepage from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import ServicePage from "../pages/ServicePage";
import ContactPageOne from "../pages/ContactPageOne";
import ErrorPage from "../pages/ErrorPage";
import BlogPage from "../pages/BlogPage";
import BlogDetailsPage from "../pages/BlogDetailsPage";
import AboutPage from "../pages/AboutPage";
import PortfolioDetailsPage from "../pages/PortfolioDetailsPage";
import PortfolioOnePage from "../pages/PortfolioOnePage";
import FaqOnePage from "../pages/FaqOnePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/home",
    element: <Homepage />,
  },
 
  {
    path: "/about",
    element: <AboutPage />,
  },

  {
    path: "/service",
    element: <ServicePage />,
  },
  {
    path: "/service-details",
    element: <ServiceDetails />,
  },
  {
    path: "/contact",
    element: <ContactPageOne />,
  },
 
  {
    path: "/404",
    element: <ErrorPage />,
  },

  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog-details",
    element: <BlogDetailsPage />,
  },
 
  {
    path: "/portfolio",
    element: <PortfolioOnePage />,
  },

  
  {
    path: "/portfolio-details",
    element: <PortfolioDetailsPage />,
  },
  {
    path: "/faq",
    element: <FaqOnePage />,
  },
  
]);
