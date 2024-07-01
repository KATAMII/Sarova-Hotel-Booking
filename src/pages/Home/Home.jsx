import React from "react";
import Hero from "./Hero";
import About from "./About";
import Featured from "./Featured"
import Testimonials from "./Testimonials"
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Featured />
      <Testimonials />
    </div>
  );
}

export default Home;
