import React from "react";
import Navi from "./components/navi/Navi";
import CarouselImg from "./components/hero/CarouselImg";
import Testimonial from "./components/testimonials/Testimonial";
import Plans from "./components/plans/Plans";
import Contact from "./components/contactus/Contact";
import AboutUs from "./components/aboutus/AboutUs";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolios/Portfolio";
import Services from "./components/services/Services";

function App() {
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
}

export default App;
