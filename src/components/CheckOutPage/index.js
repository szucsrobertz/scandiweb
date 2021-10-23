import React from 'react';
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {selectCartItems} from '../../redux/cart/cart.selectors';
import CheckOutItem from '../CheckOutItem';

import './styles.scss'

class CheckOutPage extends React.Component{
    render() {
        const {cartItems} = this.props
        return(
            <div className="checkout-page">
                <h1>Cart</h1>
                <div>{cartItems.map(cartItem => (
                    <div>
                            <hr />
                        <CheckOutItem item={cartItem} key={cartItem.id}/>
                
                        </div>
                ))}</div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckOutPage)