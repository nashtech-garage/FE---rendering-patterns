import React from 'react';
import Buy from "@/components/buy";
import Product from "@/components/product";
import Slider from "@/components/slider";
import Review from "@/components/review";

function ProductPage() {
    return (
      <>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <Slider />  {/* Progressive Hydration */}
        </div>
        <div className="w-2/3">
          <Buy />
        </div>
      </div>
      <Product />
      <section className="my-4 w-full">
        <h2 className="my-2">REVIEW</h2>
        {Array.from({length: 1000}, (_, i) => i + 1).map(i => (<Review key={i} id={i} />))}  {/* Progressive Hydration */}
      </section></>
    );
  }
  
  export default ProductPage;