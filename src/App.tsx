import Home from "./Pages/Homepage/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Users from "./Pages/Users/Users";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Login from "./Pages/Login/Login";
import './styles/global.scss'
import User from "./Pages/User/User";
import Product from "./Pages/Product/Product";

function App() {
// 02:08:10 --Youtube
  const Layout = () =>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
            <Menu/>
          </div>
          <div className="contentContainer">
           <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
     path:'/',
     element:<Layout/>,
     children:[
       {
        path:'/',
        element:<Home/>
       },
       {
        path:'/users',
        element:<Users/>
       },
       {
        path:'/products',
        element:<Products/>
       },
       {
        path:'/user/:id',
        element:<User/>
       },
       {
        path:'/product/:id',
        element:<Product/>
       }
     ],
    },
     {
      path:'/login',
      element:<Login/>
     }
  ]);
  

  return <RouterProvider router={router}/>
}

export default App
