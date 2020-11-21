
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_TO_CART = "REMOVE_TO_CART";


export const addToCart = book => {
      return {
            type: ADD_TO_CART,
            payload: book
      }
};
export const removeToCart = book => {
      return {
            type: REMOVE_TO_CART,
            payload: book
      }
};
