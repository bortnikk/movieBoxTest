import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';

import Imdb from '../images/imdb__logo.svg'
import RottenTomato from '../images/rottenTomato.svg'

function NewArrivals() {
   return (
      <section className="featured__movie">

         
         <div className='splide__buttons'>
               <h1>New Arrival</h1>
               <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>See more</a>
         </div>
         
         <Splide
            
            className='splide'
            
            options={{
               rewind: true,
               perPage: 4,
               pagination:false,
            }}

            aria-label="React Splide Example"
         >

            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image6} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image5} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Super Stranger Things Super Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image4} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image3} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image2} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image1} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>

            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image1} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image2} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image3} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image3} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image4} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image5} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
            <SplideSlide className='slide'>
                  <div className='slide__card'>
                     <div className="slide__card--img">
                        <img src={image6} alt="Image1"/>
                     </div>
                     <div className='slide__card--date'>
                        <p>USA, 2016 - Current</p>
                     </div>
                     <div className='slide__card--title'>
                        <h2>Stranger Things</h2>
                     </div>
                     <div className="slide__card--ratings">
                        <div className='Imdb'>
                           <img src={Imdb} alt="Imdb" />
                           <p>86.0 / 100</p>
                        </div>
                        <div className='RottenTomato'>
                           <img src={RottenTomato} alt="rotten tomato" />
                           <p>97%</p>
                        </div>
                     </div>
                     <div className='slide__card--type'>
                        <p>Action, Adventure, Horror</p>
                     </div>
                  </div>
            </SplideSlide>
         </Splide>
         
      </section>
    );
}

export default NewArrivals