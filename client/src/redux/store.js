import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { cartReducer } from './reducers/cartReducers'
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers'

const reducer = combineReducers({
    cart: cartReducer,
    getProductDetails: getProductDetailsReducer,
    getProducts: getProductsReducer

})

const middleware = [thunk]


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store











// import { createStore } from 'redux';
// import allReducers from './reducers/index.js';

// const store = createStore(
//     allReducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


// export default store;  