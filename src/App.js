import Home from "./Home/Home";
import Product from "./Product/Product";
import Products from "./Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./app.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const Layout =()=>
{
  return (
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([

  {
    path:"/",
    element:<Layout/>,
    children:[
      {
    path: "/",
    element :<Home/>
  },
  {
    path: "/Products/:id",
    element :<Products/>
  },
  {
    path: "/Product/:id",
    element :<Product/>
  },
],
  },
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
