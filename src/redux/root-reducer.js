import { combineReducers } from "redux";

import cartReducer from './cart/cart.reducer';
import currencyReducer from "./currencies/currencies.reducer";
import productsReducer from "./products/products.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
  products: productsReducer
});

export default rootReducer;
