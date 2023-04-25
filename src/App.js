import React from 'react'
import Contact from './components/Contact'
import CarouselImg from './components/CarouselImg';
import Navi from './components/Navi';
import Cards from './components/_TwoDivs';
import TwoDivs from './components/_TwoDivs';
import Plans from './components/Plans';
import Testimonial from './components/Testimonial';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navi/>
      <CarouselImg/>
      <Testimonial />
      <Plans/>
      <Contact/>
    </div>
  );
}

export default App;

