import React, { useEffect } from 'react';
import './top_scroll.css';
const TopScroll = () =>{
 
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behaviour: 'smooth',
        });
    }
 
    return(
        <div className='scroll' onClick= {scrollToTop}>
          <h6 >Back to Top</h6>
        </div>
    );
}

export default TopScroll;