import { createStore } from "redux";
import * as actions from './actions'
const initialState = { cart: [], total: 0 };
// const actions ={
//   ADD_TO_CART : ()=>{

//   },
//   REEMOVE_FROM_CART : ()=>{

//   }
// }
const reducer = (state =  initialState , action) => {
  // actions[action.type]();
  if (action.type === "ADD_TO_CART") {
    
    let cart = [...state.cart];
    let total = state.total;
    let alreadyIn = cart.find((elm) => elm.id === action.payload.id);
    if (alreadyIn) {
     alreadyIn.quantity++;
     }
     else{
       cart.push({...action.payload, quantity:1})
     }
     total++;
    
    return {cart, total}
  }
  if (action.type ==="REMOVE_FROM_CART") {
    let cart = [...state.cart];
    let total = state.total;
    let alreadyIn = cart.find((elm) => elm.id === action.payload.id);
    console.log({alreadyIn})
    if (alreadyIn) {
     alreadyIn.quantity--;
     if(alreadyIn.quantity==0) cart=cart.filter(elm=>elm!==alreadyIn.id)
     }
    total--;
    return {cart, total}
  }
  return state;
};

const store = createStore(reducer);
export default store;
