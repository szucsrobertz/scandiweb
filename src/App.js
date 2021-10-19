import React ,{useEffect}from "react";
import './App.css';
import NavBar from "./components/NavBar";
import { Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";

import {getCurrencies} from './redux/currencies/currencies.actions'

import { gql, useQuery } from '@apollo/client';



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

// const get_products = gql`
// query{
//   categories{name,
//     products{
//       id,
//       name,
//       inStock,
//       gallery,
//       description,
//       category,
//       attributes{id,name,type,items{value,id}},
//       prices{currency,
//         amount},
//       brand}}
  
//   }
// `


function App({getCurrenciesTest}) {
  // const { loading, data } = useQuery(get_currencies);

  const {loading,data} = useQuery(get_currencies)
  // console.log(typeof(data.currencies),"data")


  if(!loading){
    console.log(data)
    getCurrenciesTest(data.currencies)
    const tech  = data.categories.filter(obj =>
       obj.name === "tech")
    console.log (tech,"result")
    const clothes  = data.categories.filter(obj =>
      obj.name === "clothes")
   console.log (clothes,"clo")
  }

  

  // useEffect(() => {
  //   getCurrenciesTest(data.currencies)
  // }, [data]);

  return (
    <div> 
        <NavBar/>
        <Switch>
          <Route path='/clothes'></Route>
          <Route path='/tech'></Route>
        </Switch>
      </div>
   
  );
}

const mapDispatchToProps = dispatch => ({
  getCurrenciesTest: (currencies) => dispatch(getCurrencies(currencies))
})


export default connect(null,mapDispatchToProps)(App);