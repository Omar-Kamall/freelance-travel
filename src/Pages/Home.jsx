import { lazy } from "react";
const Panal = lazy(() => import ("../Components/Panal"));
const Offers = lazy(() => import ("../Components/Offers"));
const Landmark = lazy(() => import ("../Components/Landmark"));
const About = lazy(() => import ("../Components/About"));
const Questions = lazy(() => import ("../Components/Questions"));

const Home = () => {
    return (
        <div dir="rtl" className="pt-[80px]! px-[5%]!">
            <Panal/>
            <Offers/>
            <Landmark/>
            <About/>
            <Questions/>
        </div>
    )
}

export default Home