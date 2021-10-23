import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import { createStructuredSelector } from 'reselect';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


import './styles.scss'


class CartIcon extends React.Component{

    render(){
        const {toggleCartHidden,itemCount} = this.props
        return(
        
                  <div className="cart-icon" onClick={toggleCartHidden}>
                        <ShoppingIcon className="shopping-icon" />
                        <span className="item-count">{itemCount}</span>
                </div>
          
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  
    itemCount:selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)