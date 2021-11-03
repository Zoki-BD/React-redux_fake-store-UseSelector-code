import { ActionTypes } from "../constants/action-types";

const initialState = {
   products: [],
   cart: [],

};



export const productReducer = (state = initialState, action) => {

   switch (action.type) {
      case ActionTypes.SET_PRODUCTS:
         state = { ...state, products: action.payload };
         return state;


      case ActionTypes.IZBRISI_PRODUCT:
         return { ...state, products: state.products.filter(proizvod => proizvod.id !== action.payload) }


      //Check it
      case ActionTypes.DODADI_PRODUCT:
         return { ...state, products: action.payload };

      case ActionTypes.ADD_TO_CART:
         //we get the items from products array
         const item = state.products.find(product => product.id === action.payload.id)

         // we check is the item is in the cart already
         const isItInCart = state.cart.find(item => item.id === action.payload.id)

         return {
            ...state,
            cart: isItInCart ? state.cart.map(item => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item)
               : [...state.cart, { ...item, qty: 1 }]
         };




      case ActionTypes.REMOVE_FROM_CART:
         return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.payload.id)
         };


      case ActionTypes.ADJUST_QTY:
         return {
            ...state,
            cart: state.cart.map(item =>
               item.id === action.payload.id
                  ? { ...item, qty: + action.payload.qty }
                  : item
            ),
         };

      default:
         return state;
   }
}


export const selectedProductReducer = (state = {}, action) => { //we wait for object

   switch (action.type) {
      case ActionTypes.SELECTED_PRODUCT:
         state = { ...state, ...action.payload };

         return state;

      // clean up for useeffect after selected details  
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
         return {};

      //Check it
      case ActionTypes.ADD_TO_CART_FROM_DETAILS_PAGE:
         return { ...state, ...action.payload }

      default:
         return state;
   }
}



