import React from 'react';
import './banner.css';
import images from './request';
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () =>{

    return(
        <div className= 'banner'>
          <Carousel

          autoPlay= {true}
          infiniteLoop= {true}
          showIndicators= {true}
          showThumbs= {false}
          interval= {5000}
          showStatus= {false}
          >

          <div>
            <img loading='lazy' src={images.image1}  alt= 'banner_poster' />
          </div>
          <div>
          <img loading='lazy' src= {images.image2} alt= 'banner_poster' />

          </div>
          <div>
          <img loading='lazy' src={images.image3}  alt= 'banner_poster' />  
          </div>
          </Carousel>
        </div>
        
    );
}

export default Banner;