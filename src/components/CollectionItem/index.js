import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {Link,withRouter} from 'react-router-dom'

import {baseCurrency} from '../../redux/currencies/currencies.selectors'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { IoIosCart } from "react-icons/io";

import './styles.scss'

class CollectionItem extends React.Component{
    render() {
        const {...product} = this.props.product
        const {baseCurrency,cartItems} = this.props
        const selectedCurrency = product.prices.filter(currency => currency.currency === baseCurrency)
        
        const inCart =cartItems.some(pro => {return pro.name === product.name})

        return(
            <Link
            className="collection-item"
            to={{
                pathname:`/details/${product.id}`,
                state:{
                    product:product
                }}}>
            <div className={`${product.inStock ? null: "not-in-stock"}`}>
             
               {product.inStock ?null : <p className="stock">out of stock</p>}
               {inCart ? <p className="cart-icon"> <IoIosCart size={100} style={{ borderRadius:"100%", backgroundColor:"#05df46"}} color="white"/></p>
               : null}
                    <div className="item-photo">
                 <img src={product.gallery[0]} alt="product" />
          
                </div>
                <div>
                    <p>{product.brand} {product.name}</p>
                    <p></p>
                    <p style={{fontWeight:"bold"}}>{selectedCurrency[0].currency} {selectedCurrency[0].amount}</p>
                 
                </div>
                </div>
            
            </Link>
            
        )
    }
}

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,
    cartItems: selectCartItems
})




export default withRouter(connect(mapStateToProps)(CollectionItem))