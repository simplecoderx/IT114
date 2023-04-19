import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
import Testimonials from './components/Testimonials'
// import Demo from './components/Demo'
// import Footer from './components/Footer'
// import Services from './components/Services'
// import Portfolio from './components/Portfolio'
// import PricingPlans from './components/PricingPlans'
// import FAQ from './components/FAQ'
import Contact from './components/Contact'
// import CarouselImg from './components/CarouselImg'
import Navbar from './components/Navbar'
import CarouselImg from './components/CarouselImg';
import Navi from './components/Navi';
import Cards from './components/TwoDivs';
import TwoDivs from './components/TwoDivs';
import Plans from './components/Plans';
import BarTxt from './components/BarTxt';
import Divider from './components/Divider';
import PopupForm from './components/PopupForm';
import PricingPage from './components/PricingPage';
import MyFormcarry from './components/MyFormcarry';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TestimonialsPage from './components/TestimonialsPage';
function App() {
  return (
    <div>
      {/* <div><Navbar /></div>
      <div className='sectionNavCar'><CarouselImg/></div>
      <Hero />
      <About />
      <Testimonials />
      <Demo />
      <Services/>
      <Portfolio/>
      <PricingPlans/>
      <FAQ/>
      <Contact/>
      <Footer /> */}
      {/* <Navbar/> */}
      <Navi/>
      <CarouselImg/>
      <div className='sectionNavCar'><TwoDivs/></div>

            {/* <div><BarTxt/></div> */}
     
            {/* <Cards/> */}
      <Divider/>
      <Plans/>
            {/* <Testimonials/> */}
            {/* <PopupForm/> */}
            {/* <PricingPage/> */}
            {/* <MyFormcarry/> */}
      <Contact/>
      <TestimonialsPage/>
    </div>
  );
}

export default App;
