import React from 'react'
import Contact from './Contact'
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
      <CarouselImg/>
      <div className='sectionNavCar'><TwoDivs/></div>
      <Divider/>
      <Plans/>
      <Contact/>
    </div>
  )
}

export default Home;