'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="sticky mb-4">
        <ul className="flex space-x-4">
          <li>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </header>
      <section>
        <Carousel dynamicHeight={false} width="100%" centerMode={true}>
          <div>
              <Image src="/1.png" alt="Image 1" width={'1200'} height={'400'} />
              <p className="legend">Image 1</p>
          </div>
          <div>
              <Image src="/2.png" alt="Image 2" width={'1200'} height={'400'} />
              <p className="legend">Image 2</p>
          </div>
          <div>
              <Image src="/3.png" alt="Image 3" width={'1200'} height={'400'} />
              <p className="legend">Image 3</p>
          </div>
          <div>
              <Image src="/4.png" alt="Image 4" width={'1200'} height={'400'} />
              <p className="legend">Image 4</p>
          </div>
          <div>
              <Image src="/5.png" alt="Image 5" width={'1200'} height={'400'} />
              <p className="legend">Image 5</p>
          </div>
        </Carousel>
      </section>
      <section>
        <h2>HOT PRODUCTS</h2>
        <div className="flex space-x-3 my-2">
          <div className="w-1/3 text-center">
              <Image src="/6.png" alt="Image 6" width={'600'} height={'600'} />
              <p className="legend my-2">Image 6</p>
              <button className="bg-yellow-300 text-black text-sm px-4 py-1 font-bold">Buy</button>
          </div>
          <div className="w-1/3 text-center">
              <Image src="/7.png" alt="Image 7" width={'600'} height={'600'} />
              <p className="legend my-2">Image 7</p>
              <button className="bg-yellow-300 text-black text-sm px-4 py-1 font-bold">Buy</button>
          </div>
          <div className="w-1/3 text-center">
              <Image src="/8.png" alt="Image 8" width={'600'} height={'600'} />
              <p className="legend my-2">Image 8</p>
              <button className="bg-yellow-300 text-black text-sm px-4 py-1 font-bold">Buy</button>
          </div>
        </div>
      </section>
      <section>
        <h2>CLIENT SAID</h2>
        
      </section>
      <footer>
        Footer
      </footer>
    </main>
  )
}
