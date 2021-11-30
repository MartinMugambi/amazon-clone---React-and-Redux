import React from 'react';
import  './nav_down.css';
import MenuIcon from '@material-ui/icons/Menu';
const NavDown = () =>{
    return(
        <div className= 'nav'>
         <div className= 'nav__menu'>
             <MenuIcon />
             <h5>All</h5>
         </div>
         <div className= 'nav__content'>
           <h5>Today's Deals</h5>
           <h5>Customer Service</h5>
           <h5>Registery</h5>
           <h5>Gift cards</h5>
           <h5>Sell</h5>
         </div>
          <h5 className= "nav__deals">Shop early Black Friday deals </h5>
        </div>
    );
}

export default NavDown;
