import React from 'react';
import './product.css';
import TextTruncate from 'react-text-truncate'; 
import StarRateIcon from '@material-ui/icons//StarRate';
import SectionBanner from './section_banner';
import {useDispatch} from 'react-redux';
import { addToCart } from '../redux';
const Product = ({id, title, description, category, image, price, rating}) =>{
    const dispatch = useDispatch();
    const addItem = () => {
        const product = {
           id, title, description, category, image, price, rating
        }

        dispatch(addToCart(product))
    }
    return(
        <div className= 'product'>
         <div className= 'product__image'>
         <img src={image} loading='lazy' alt='product__images' />
         </div>
         <p className= 'product__title'>{title.slice(0,15)}</p>
         <div className= 'product__icons'>
          <StarRateIcon className= 'product__icon' />
          <StarRateIcon className= 'product__icon' />
          </div>
         <TextTruncate className= 'product__decription'
    line={2}
    element="p"
    truncateText="…"
    text= {description}
    
/>
         <p className= 'product__price'>${price}</p>
       <p className= 'product__category'><i>{category}</i></p>
       <div className= 'product__button'>
       <button onClick= {addItem}>Add to Basket</button>
       </div>
    
        </div>
    );
}

export default Product;