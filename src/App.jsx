import { lazy, useEffect, useState } from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router";
import { Loading } from "../public/assets";
import { Player } from "@lottiefiles/react-lottie-player";
const Navbar = lazy(() => import ("./Components/Navbar"));
const Home = lazy(() => import ("./Pages/Home"));
const Signin = lazy(() => import ("./Pages/Signin"));
const System_Data = lazy(() => import ("./Pages/System_Data"));
const Footer = lazy(() => import ("./Components/Footer"));
import "../src/App.css";

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const App = () => {
  // Loading State And Chanages
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    },3000)
  },[])

  // Routes
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="signin" element={<Signin/>}/>
        <Route path="data" element={<System_Data/>}/>
      </Route>
    </Route>
  ))

  return (
    <>
      {/* Check Loading Spinner */}
      {!loading ? <div className="panal_img flex items-center justify-center h-[100vh]">
        <Player
          autoplay
          loop
          src={Loading}
          style={{ height: '300px', width: '300px' }}
        />
      </div> : <RouterProvider router={router}/>}
    </>
  )
}

export default App