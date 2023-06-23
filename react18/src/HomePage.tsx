import React from 'react';
import Product from "@/components/product";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";

function HomePage() {
    return (
      <>
        <Slider />
        <Product />
        <Testimonial />
        <Contact />
      </>
    );
  }
  
  export default HomePage;