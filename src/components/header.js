import React  from 'react';
import logo  from './amazon-logo.png';
import './header.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import SearchIcon from '@material-ui/icons/Search';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


const Header = () => {
   const count  = useSelector(state => state.carts.cart);
    const navigate = useNavigate();

    const move = () =>{
      navigate('/cart');
    }
  
    const home = () => {
      navigate('/')
    }
    return(
        <header>
         <div className= 'header__logo'>
        <img src ={logo} alt= 'amazon__logo' onClick= {home} />
         </div>
         <div className= 'header__input'>
          <input type= '' />
          <SearchIcon className= 'header__input__icon' />
         </div>
          <div className = 'header__account'>
           <p>Sign in</p>
           <h5>Account  & Lists</h5>
          </div>
          <div className= 'header__items'>
              <p>Returns</p>
              <h5>Orders</h5>
          </div>
          <div className= 'header__basket' onClick= {move} >
            <ShoppingCartOutlinedIcon   className= 'basket'/>
            <p>Basket</p>
            <span>{count.length}</span>
          </div>
        </header>
    );
}


export default Header;