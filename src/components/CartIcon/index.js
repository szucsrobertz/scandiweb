import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'


import './styles.scss'


class CartIcon extends React.Component{

    render(){
        const {toggleCartHidden} = this.props
        return(
            <div>
                  <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
           
        </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})


export default connect(null,mapDispatchToProps)(CartIcon)