import React from 'react';
import images from './request';
import './section_banner.css';
const SectionBanner = () =>{
    return(
        <div className='section__banner'>
          <img src={images.image4} alt= 'product__banner' />
        </div>
    );
}

export default SectionBanner;