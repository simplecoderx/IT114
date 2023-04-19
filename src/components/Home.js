import React from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import About from './components/About'
// import Demo from './components/Demo'
// import Footer from './components/Footer'
// import Services from './components/Services'
// import Portfolio from './components/Portfolio'
// import PricingPlans from './components/PricingPlans'
// import FAQ from './components/FAQ'
import Contact from './Contact'
// import CarouselImg from './components/CarouselImg'
import CarouselImg from './CarouselImg';
import Navi from './Navi';
import TwoDivs from './TwoDivs';
import Plans from './Plans';
import Divider from './Divider';
import './../index.css';
import TestimonialsPage from './TestimonialsPage';
function Home() {
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
      {/* <TestimonialsPage/> */}
    </div>
  )
}

export default Home;