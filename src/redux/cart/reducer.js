import {CART} from "./type"
import { REMOVE } from "./type"
const initialState = {
    cart: [],
}


const cartReducer= (state =initialState, action) =>{
       switch(action.type){
        
        case CART :
           
            return {
                
             cart: state.cart = [...state.cart, action.payload],
            }

            case REMOVE:
                const {id} = action.payload;
                console.log(id);
                
                return {
                     ...state,
                    cart: state.cart.filter(item => item.id !== id)
                    
                }
            
            default: 
              return state;
       }
}

export  default cartReducer;