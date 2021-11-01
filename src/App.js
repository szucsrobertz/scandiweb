import React from "react";
import { Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";
import { gql, useQuery } from '@apollo/client';

import './App.css';

import {getCurrencies} from './redux/currencies/currencies.actions'

import NavBar from "./components/NavBar";
import ProductPage from "./components/ProductPage";
import CheckOutPage from "./components/CheckOutPage";
import HomePage from "./components/HomePage";
import ProductsListingPage from "./components/ProductsListingPage";

const get_currencies = gql`
query{
  currencies
}
`

function App({getCurrenciesTest}) {

  const {loading,data} = useQuery(get_currencies)

  if(!loading){
    getCurrenciesTest(data.currencies)
  }

  return (
    <div> 
        <NavBar/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path='/clothes' component={ProductsListingPage}></Route>
          <Route path='/tech' component={ProductsListingPage}></Route>
          <Route path="/details/:id" component={ProductPage}></Route>
          <Route path='/checkout' component={CheckOutPage}></Route>
        </Switch>
      </div>
   
  );
}

const mapDispatchToProps = dispatch => ({
  getCurrenciesTest: (currencies) => dispatch(getCurrencies(currencies)),
})

export default connect(null,mapDispatchToProps)(App);