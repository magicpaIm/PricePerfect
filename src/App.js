import React from "react";

//import animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

//import components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About  from "./components/About";
import Benifit from "./components/Benifit";
const App = () => {

  Aos.init()
  return (
    <div className="flex flex-col max-w-xl mx-auto w-full items-center overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Benifit />
    </div>
  );
}

export default App;
