'use client'
import Slider from "@/components/slider";
import Product from "@/components/product";
import Testimonial from "@/components/testimonial";
import dynamic from "next/dynamic";
import Layout from "@/app/layout";

const Contact = dynamic(() => import("@/components/contact"), { ssr:false })

export default function HomePage() {
  return (
    <Layout>
      <Slider />
      <Product />
      <Testimonial />
      <Contact />
    </Layout>
  )
}
