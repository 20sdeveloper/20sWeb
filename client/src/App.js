import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import CreativeAgency from "./pages/Home/CreativeAgency";
import AboutUs from "./pages/About/AboutUs";
import AboutMe from "./pages/About/AboutMe"; 
import TeamPage from "./pages/Team/TeamPage";
// import TeamPageDetails from "./pages/Team/TeamPageDetails";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import ServicesDetailsPage from "./pages/ServicesDetailsPage";
import ContactPage from "./pages/ContactPage";
import BlogPage from "./pages/Blog/BlogPage";
import BlogDetailsPage from "./pages/Blog/BlogDetailsPage";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={0}
        color="0, 0, 0"
        outerAlpha={0}
        innerScale={0}
        outerScale={0}
        showSystemCursor={true}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />

      <Routes>
        <Route path="/" element={<CreativeAgency />} />
        <Route path="/about-us" element={<AboutUs />} />
        {/* <Route path="/about-me" element={<AboutMe />} /> */}
        <Route path="/team" element={<TeamPage />} />
        {/* <Route path="/team-details" element={<TeamPageDetails />} /> */}
        <Route path="/project-details" element={<PortfolioDetailsPage />} />
        <Route path="/services-details" element={<ServicesDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        {/* <Route path="/blog-details" element={<BlogDetailsPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
