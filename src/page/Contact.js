import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

//import components
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

const Privacy = () => {
  Aos.init();
  return (
    <div className="flex flex-col max-w-xl mx-auto w-full items-center overflow-hidden">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Privacy;
