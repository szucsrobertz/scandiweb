import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {Link,withRouter} from 'react-router-dom'

import {baseCurrency} from '../../redux/currencies/currencies.selectors'
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { IoIosCart } from "react-icons/io";

import { addItem } from '../../redux/cart/cart.actions';

import getSymbolFromCurrency from 'currency-symbol-map'

import './styles.scss'

class CollectionItem extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            hover:false
        }
    }
    render() {
        const {...product} = this.props.product
        const {baseCurrency,addItem} = this.props
        const selectedCurrency = product.prices.filter(currency => currency.currency === baseCurrency)

        return(
        
            <Link
            className="collection-item"
            to={{
                pathname:`/details/${product.id}`,
                state:{
                    id:product.id
                }}}
                onMouseEnter={() => this.setState({hover:true})}
                onMouseLeave={() => this.setState({hover:false})}>
            <div className={`${product.inStock ? null: "not-in-stock"}`}>
             
               {product.inStock ?null : <p className="stock">out of stock</p>}
               {product.attributes.length ===0 && this.state.hover && product.inStock? <div className="cart-icon" onClick={() => addItem(product)}> <IoIosCart size={30}  color="white" /></div>
               : null}
                    <div className="item-photo">
                 <img src={product.gallery[0]} alt="product" />
          
                </div>
                <div>
                    <p>{product.brand} {product.name}</p>
                    <p></p>
                    <p  className="currency-container">   {getSymbolFromCurrency(selectedCurrency[0].currency)} {selectedCurrency[0].amount}</p>
                 
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

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})




export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CollectionItem))