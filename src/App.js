import React from "react";
import './App.css';
import NavBar from "./components/NavBar";
import { Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";

import ClothesPage from './components/ClothesPage';

import {getCurrencies} from './redux/currencies/currencies.actions'
import {getClothesProducts,getTechProducts} from './redux/products/products.actions'

import { gql, useQuery } from '@apollo/client';
import TechPage from "./components/TechPage";
import ProductPage from "./components/ProductPage";
import CheckOutPage from "./components/CheckOutPage";
import HomePage from "./components/HomePage";




const get_currencies = gql`
query{
  currencies
categories{name,
  products{
    id,
    name,
    inStock,
    gallery,
    description,
    category,
    attributes{id,name,type,items{value,id}},
    prices{currency,
      amount},
    brand}}

}
`

function App({getCurrenciesTest,getClothesProductsTest,getTechProductsTest}) {
  // const { loading, data } = useQuery(get_currencies);

  const {loading,data} = useQuery(get_currencies)


  if(!loading){
    getCurrenciesTest(data.currencies)
    const tech  = data.categories.filter(obj =>
       obj.name === "tech")
    getTechProductsTest(tech)
    const clothes  = data.categories.filter(obj =>
      obj.name === "clothes")
      getClothesProductsTest(clothes)
  }

  

  // useEffect(() => {
  //   getCurrenciesTest(data.currencies)
  // }, [data]);

  return (
    <div> 
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path='/clothes' component={ClothesPage}></Route>
          <Route path='/tech' component={TechPage}></Route>
          <Route path="/details/:id" component={ProductPage}></Route>
          <Route path='/checkout' component={CheckOutPage}></Route>
        </Switch>
      </div>
   
  );
}

const mapDispatchToProps = dispatch => ({
  getCurrenciesTest: (currencies) => dispatch(getCurrencies(currencies)),
  getClothesProductsTest: (products) => dispatch(getClothesProducts(products)),
  getTechProductsTest: (products) => dispatch(getTechProducts(products))
})


export default connect(null,mapDispatchToProps)(App);