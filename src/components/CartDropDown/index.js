import React from 'react'

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './styles.scss'

class CartDropDown extends React.Component{
    render() {
        const {cartItems} = this.props
        return(
            <div className="cart-dropdown">
            <div className="cart-items">
            {cartItems.map(item =>(
                <CartItem item={item}/>
            ))}
            </div>
           
                <button>Checkout</button>
        </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropDown)