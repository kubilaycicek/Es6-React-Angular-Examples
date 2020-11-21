import { data } from '../data';
import { ADD_TO_CART, REMOVE_TO_CART } from '../actions';

const INITIAL_STATE = {
      bookList: data,
      cart: []
}

export const reducer = (state = INITIAL_STATE, action) => {
      switch (action.type) {
            case ADD_TO_CART:
                  
                  return { ...state, cart: [...state.cart, action.payload] }
            case REMOVE_TO_CART:
                  console.log("jnjnljn")
                  return {...state, cart: state.cart.filter((item, index) => {
                          return item.id !== action.payload.id;}
                  )}
            default:
                  return state;
      }
}