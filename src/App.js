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
// import Home from "./components/Home";

// function App() {
//   return (
//     <BrowserRouter>
//       <div>
//         <Home />
//       </div>

//       <Routes>
//         <Route path="/plans" element={<Plans />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/testimonials" element={<TestimonialsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import TestimonialsPage from "./components/TestimonialsPage";
import Navi from "./components/Navi";
import GlobalStyle from './components/GlobalComponents';

const Layout = () => {
return(
  <div className="app">
    <GlobalStyle />
    <Navi/>
    <Outlet/>
  </div>
)

}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/testimonials",
        element:<TestimonialsPage />
      },
    ]
  },
])

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
