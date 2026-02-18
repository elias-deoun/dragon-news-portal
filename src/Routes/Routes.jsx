import { createBrowserRouter } from "react-router";
import Layout from "../layOut/Layout";
import Home from "../Components/Home/Home";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AuthLayout from "../layOut/AuthLayout";

const Routes=createBrowserRouter([
  {
    path:'/',
    Component:Layout,
    children:[
      {path:'/',Component:Home},
      {path:'/category/:id',
        Component:CategoryNews,
      loader: ()=>fetch('/news.json')
      }
    ]
  },
  {
    path:'auth',
    element:<AuthLayout></AuthLayout>,
    children:[
      {path:'/auth/login',
        Component:Login
      },
      {path:'/auth/register',
        Component:Register
      }
    ]
  }
])

export default Routes;