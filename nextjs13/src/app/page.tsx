import Slider from "@/components/slider";
import Product from "@/components/product";
import Testimonial from "@/components/testimonial";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Contact = dynamic(() => import("@/components/contact"), { ssr:false })

export default function HomePage() {
  return (
    <>
      <Suspense>
        <Slider /> {/* Selective / Partial Hydration - Later */}
      </Suspense>
      <Product />
      <Testimonial /> {/* Selective / Partial Hydration - First */}
      <Contact />
    </>
  )
}
