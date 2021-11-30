import {CART} from "./type";
import { REMOVE } from "./type";
  export const addToCart = cart => {
     return {
         type: CART,
         payload: cart ,
     }
}


export const removeItem  = id =>{
  return {
    type: REMOVE,
    payload: id,
  }
}