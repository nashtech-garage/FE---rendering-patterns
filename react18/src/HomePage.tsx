import Contact from "@/components/contact";
import Product from "@/components/product";
import Slider from "@/components/slider";
import Testimonial from "@/components/testimonial";

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