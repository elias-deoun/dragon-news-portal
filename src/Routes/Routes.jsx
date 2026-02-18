import { createBrowserRouter } from "react-router";
import Layout from "../layOut/Layout";
import Home from "../Components/Home/Home";
import CategoryNews from "../Components/CategoryNews/CategoryNews";

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
  }
])

export default Routes;