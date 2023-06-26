import Slider from "@/components/slider";
import Product from "@/components/product";
import Testimonial from "@/components/testimonial";
import dynamic from "next/dynamic";
import RSCProduct from "@/components/rsc-product";
import { Suspense } from "react";

const Contact = dynamic(() => import("@/components/contact"), { ssr:false })

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Slider /> {/* Selective / Partial Hydration - Later */}
      </Suspense>
      <Product>
        <RSCProduct id={6} />
      </Product>
      <Testimonial /> {/* Selective / Partial Hydration - First */}
      <Contact />
    </>
  )
}
