import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import thumb1 from '../images/Thumbnails.png';
import thumb2 from '../images/Thumbnails2.png';
import thumb3 from '../images/Thumbnails3.png';

function Exclusive() {
   return (
      <section className="exclusive">

         
         <div className='splide__buttons'>
               <h1>Exclusive Videos</h1>
               <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>See more</a>
         </div>
         
         <Splide
            
            className='splide'
            
            options={{
               rewind: true,
               perPage: 2.5,
               drag: 'free',
               pagination: false,
               perMove: 1,
            }}

            aria-label="React Splide Example"
         >

            <SplideSlide className='video__slide'>
                  <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className='video__slide--card'>
                     <div className="video__slide--img">
                        <img src={thumb1} alt="Image1"/>
                     </div>
                     <div className='video__slide--title'>
                        <p>The Suicide Squad : John Cena Interview</p>
                     </div>

                  </a>
            </SplideSlide>

            <SplideSlide className='video__slide'>
                  <div className='video__slide--card'>
                     <div className="video__slide--img">
                        <img src={thumb2} alt="Image1"/>
                     </div>
                     <div className='video__slide--title'>
                        <p>The Suicide Squad : John Cena Interview</p>
                     </div>

                  </div>
            </SplideSlide>

            <SplideSlide className='video__slide'>
                  <div className='video__slide--card'>
                     <div className="video__slide--img">
                        <img src={thumb3} alt="Image1"/>
                     </div>
                     <div className='video__slide--title'>
                        <p>The Suicide Squad : John Cena Interview</p>
                     </div>

                  </div>
            </SplideSlide>

         </Splide>
         
      </section>
    );
}

export default Exclusive