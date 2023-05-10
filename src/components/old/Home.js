// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Contact from "./components/Contact";
// import CarouselImg from "./components/CarouselImg";
// import Navi from "./components/Navi";
// import Cards from "./components/_TwoDivs";
// import TwoDivs from "./components/_TwoDivs";
// import Plans from "./components/Plans";
// import Testimonial from "./components/Testimonial";
// import TestimonialsPage from "./components/TestimonialsPage";
// import "./index.css";

// function Home() {
//   return (
//       <div>
//         <Navi />
//         <CarouselImg />
//         <Testimonial />
//         <Plans />
//         <Contact />
//       </div>
//   );
// }

// export default Home;

import React from "react";
import Navi from "./Navi";
import CarouselImg from "./CarouselImg";
import Testimonial from "./Testimonial";
import Plans from "./Plans";
import Contact from "./Contact";
import AboutUs from "./../components/aboutus/AboutUs";
import FAQ from "./../components/faq/FAQ";
import Footer from "./../components/footer/Footer";
import Portfolio from "./../components/portfolios/Portfolio";
import Services from "./../components/services/Services";

const Home = () => {
  return (
    <div>
      <Navi />
      <CarouselImg />
      <Services />
      <Portfolio />
      <div id="plans">
        <Plans />
      </div>
      <Testimonial />
      <FAQ />
      <AboutUs />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
