import React from "react";

//import animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

//import components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {

  Aos.init(
    {
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    }
  )
  return (
    <div className="flex flex-col max-w-xl w-full items-center overflow-hidden">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
