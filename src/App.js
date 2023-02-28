import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

//import components
import Hero from "./components/Hero";
import Header from "./components/Header";
import About  from "./components/About";
import Benifit from "./components/Benifit";
import Trustedmonial from "./components/Trustedmonial";
import Cta from "./components/Cta";
import Features from "./components/Features";
import Footer from "./components/Footer";

const App = () => {

  Aos.init()
  return (
    <div className="flex flex-col max-w-xl mx-auto w-full items-center overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Benifit />
      {/* <Trustedmonial /> */}
      {/* <Cta /> */}
      {/* <Features /> */}
      <Footer />
    </div>
  );
}

export default App;
