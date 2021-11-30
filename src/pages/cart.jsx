import React from 'react';
import images from '../components/request';
import './cart.css'
import {useSelector} from 'react-redux'
import Item from '../components/items';
const Cart = () => {
  const cartItems =  useSelector(state => state.carts.cart);
  const cartList = cartItems.map((cart, index) => <Item  key= {index} id={cart.id} title= {cart.title} description= {cart.description} image= {cart.image} price= {cart.price}/>) 
 const prices = cartItems.reduce((total, item) => total+item.price, 0);
 
    return(
        <div className= 'cart'>
           <div className= 'cart__image'>
            <img src= {images.image5} alt= 'cart__image' />
           </div>
           <div className='cart__total'>
             <span>Subtotal {prices.toFixed(2)}</span>
             <button>Sigin to Checkout</button>
           </div>
           <h5>{cartItems.length === 0 ? 'Your amazon Shopping basket is empty': 'Shopping Basket'}</h5>
           <div className='cart__items'>
            {cartList}
            </div>
        </div>
    );
}

export default Cart;