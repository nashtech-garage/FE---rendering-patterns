'use client'
import Slider from "@/components/slider";
import Product from "@/components/product";
import Layout from "@/app/layout";
import Image from 'next/image';
import Buy from "@/components/buy";
import Review from "@/components/review";

export default function ProductPage() {
  return (
    <Layout>
      <div className="flex space-x-4">
        <div className="w-1/3">
          <Slider />
        </div>
        <div className="w-2/3">
          <Buy />
        </div>
      </div>
      <Product />
      <section className="my-4 w-full">
        <h2 className="my-2">REVIEW</h2>
        {Array.from({length: 1000}, (_, i) => i + 1).map(i => (<Review key={i} id={i} />))}
      </section>
    </Layout>
  )
}
