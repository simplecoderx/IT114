// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";
// import Home from "./components/Home";
// //import TestimonialsPage from "./components/TestimonialsPage";
// import Navi from "./components/Navi";
// import GlobalStyle from './components/GlobalComponents';

// const Layout = () => {
// return(
//   <div className="app">
//     <GlobalStyle />
//     <Navi/>
//     <Outlet/>
//   </div>
// )

// }

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"/",
//         element:<Home/>
//       },
//       // {
//       //   path:"/testimonials",
//       //   element:<TestimonialsPage />
//       // },
//     ]
//   },
// ])

// function App() {
//   return (
//     <div>
//        <RouterProvider router={router} />
//     </div>
//   );
// }

// export default App;

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
import Home from "./components/Home";
import Navi from "./components/Navi";
import CarouselImg from "./components/CarouselImg";
import Testimonial from "./components/Testimonial";
import Plans from "./components/Plans";
import Contact from "./components/Contact";
import AboutUs from "./components/aboutus/AboutUs";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolios/Portfolio";
import Services from "./components/services/Services";

function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
