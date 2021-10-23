import React from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem';

import { selectCartItems,selectCartTotal,selectCartItemsCount } from '../../redux/cart/cart.selectors';

import './styles.scss'

class CartDropDown extends React.Component{
    render() {
        const {cartItems,total,itemCount} = this.props
        const {...history} = this.props.history
        return(
            <div className="cart-dropdown">
                <div>

                <h2 style={{display:"inline"}}>My bag</h2> , {itemCount} items
                </div>
            <div className="cart-items">
            {cartItems.map((item) =>(
                <CartItem item={item} key={item.id}/>
            ))}

           
            </div>
           
                <button className="button-container"
                onClick={() =>{history.push('/checkout')}}
                >Checkout
                </button>
                <h2>Total: {total}</h2>
        </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    itemCount:selectCartItemsCount
})

export default withRouter(connect(mapStateToProps)(CartDropDown))