import React, { Suspense } from 'react';
import Product from "@/components/product";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";
import Contact from "@/components/contact";

function HomePage() {
    return (
      <>
        <Suspense>
          <Slider /> {/* Selective / Partial Hydration - Later */}
        </Suspense>
        <Product />
        <Testimonial /> {/* Selective / Partial Hydration - First */}
        <Contact />
      </>
    );
  }
  
  export default HomePage;