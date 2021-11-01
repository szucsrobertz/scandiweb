import { combineReducers } from "redux";

import cartReducer from './cart/cart.reducer';
import currencyReducer from "./currencies/currencies.reducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  currency: currencyReducer,
});

export default rootReducer;
