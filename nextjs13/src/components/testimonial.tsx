import Image from 'next/image';
import ReactTestimonial from 'react-testimonial';

export default function Testimonial() {
    return (<section className='my-4 w-full'>
        <h2 className="my-2">CLIENT SAID</h2>
        <ReactTestimonial>
          <div className="card content mx-auto">
              <div className="flex space-x-4">
                  <Image src="/9.png" alt="Image 9" width={'100'} height={'100'} />
                  <span>
                      He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                  </span>
              </div>
          </div>
          <div className="card content mx-auto">
              <div className="flex space-x-4">
                  <Image src="/10.png" alt="Image 10" width={'100'} height={'100'} />
                  <span>
                      He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                  </span>
              </div>
          </div>
          <div className="card content mx-auto">
              <div className="flex space-x-4">
                  <Image src="/11.png" alt="Image 11" width={'100'} height={'100'} />
                  <span>
                      He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                  </span>
              </div>
          </div>
      </ReactTestimonial>
    </section>)
}