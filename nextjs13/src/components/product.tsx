"use client"
import { useEffect } from "react";
export default function Product({children} : {
    children: React.ReactNode
  }) {
    useEffect(() => console.log("Product"), []);
    return (<section className='my-4'>
        <h2>HOT PRODUCTS</h2>
        <div className="flex space-x-3 my-2">
          <div className="w-1/3 text-center">
              {children}
              <button className="bg-yellow-300 text-black text-sm px-4 py-1 font-bold">Buy</button>
          </div>
          <div className="w-1/3 text-center">
              <img src="/7.png" alt="Image 7" width={'600'} height={'600'} />
              <p className="legend my-2">Image 7</p>
              <button className="bg-yellow-300 text-black text-sm px-4 py-1 font-bold">Buy</button>
          </div>
          <div className="w-1/3 text-center">
              <img src="/8.png" alt="Image 8" width={'600'} height={'600'} />
              <p className="legend my-2">Image 8</p>
              <button className="bg-yellow-300 text-black text-sm px-4 py-1 font-bold">Buy</button>
          </div>
        </div>
    </section>)
}