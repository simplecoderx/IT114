import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
//import TestimonialsPage from "./components/TestimonialsPage";
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
      // {
      //   path:"/testimonials",
      //   element:<TestimonialsPage />
      // },
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
