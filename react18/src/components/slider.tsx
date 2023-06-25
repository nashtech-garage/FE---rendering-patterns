import React, { useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Slider() {
    useEffect(() => console.log("Slider"), []);
    return (<div className='my-4 w-full'>
        <Carousel showThumbs={true} dynamicHeight={false} width="100%" centerMode={true}>
            <div>
                <img src="/1.png" alt="Image 1" width={'1200'} height={'400'} />
                <p className="legend">Image 1</p>
            </div>
            <div>
                <img src="/2.png" alt="Image 2" width={'1200'} height={'400'} />
                <p className="legend">Image 2</p>
            </div>
            <div>
                <img src="/3.png" alt="Image 3" width={'1200'} height={'400'} />
                <p className="legend">Image 3</p>
            </div>
            <div>
                <img src="/4.png" alt="Image 4" width={'1200'} height={'400'} />
                <p className="legend">Image 4</p>
            </div>
            <div>
                <img src="/5.png" alt="Image 5" width={'1200'} height={'400'} />
                <p className="legend">Image 5</p>
            </div>
        </Carousel>
  </div>)
}