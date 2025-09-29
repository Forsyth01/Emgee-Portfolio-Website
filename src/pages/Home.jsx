import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Experience from "../components/Experience";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonial />
      <Experience />
      <Contact />
      {/* <Footer/> */}
    </div>
  );
};

export default Home;
