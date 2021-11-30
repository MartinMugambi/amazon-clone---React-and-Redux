import React from 'react';
import './item.css';
import TextTruncate from 'react-text-truncate';
import StarRateIcon from '@material-ui/icons//StarRate';
import {useDispatch,useSelector} from 'react-redux';
import { addToCart } from '../redux';
import { removeItem } from '../redux';
const Item = ({id, title, description, image, price}) =>{
 const dispatch = useDispatch();
 const dispatch2 = useDispatch();
  
const  cartItems = useSelector(state => state.carts.cart);
 
 
const prices = cartItems.reduce((total, item) => total+item.price, 0);
console.log(prices);

 

 const addToBasket = () =>{

  const basket = {
    id,
    title,
    description,
    image,
    price,
  }

  dispatch(addToCart(basket));
 }

 const deleteItem = () =>{
  dispatch2(removeItem({id}));
 }
    return(
        <div className= 'item'>
          <div className='item__image'>
             <img src={image} alt='product_image' />
          </div>
          <div className= 'item__content'>
           <h5>{title}</h5>
           <StarRateIcon  className= 'item__icon'/>
           <TextTruncate
            line = {2}
            element= 'p'
            truncateText='...'
            text= {description} 
           />
           <h4>${price}</h4>
          </div>
          <div className= 'item__button'>
            <button onClick= {addToBasket}>Add to Basket</button>
            <button onClick= {deleteItem}>Remove from basket</button>
          </div>
        </div>
    );
}

export default Item;