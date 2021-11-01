import React from 'react'

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CartItem';

import { selectCartItems,selectCartTotal,selectCartItemsCount,selectCartHidden } from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './styles.scss'

class CartDropDown extends React.Component{
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      
      }
      myRef = React.createRef();
  
      handleClickOutside = e => {
        if (e.target.className === "cart-icon") {
            this.props.toggleCartHidden()
        }else if( !this.myRef.current.contains(e.target) && !this.props.hidden){
            this.props.toggleCartHidden()
        }
      };

    render() {
        const {cartItems,total,itemCount,toggleCartHidden} = this.props
        const history = this.props.history
       
        return(
            <div className="cart-dropdown" ref={this.myRef} >
                <div>
                <h2  className="bag-container">My bag</h2>, {itemCount} items
                </div>
            <div className="cart-items">
            {cartItems.map((item) =>(
                <CartItem item={item} key={item.id}/>
            ))}
            </div>
                
                <div className="total-container">
                <h2>Total: </h2>
                <h2> {total.toFixed(2)}</h2>
                     </div>
                <div className="button-container">
            <button className="checkout-button"
                onClick={() =>{history.push('/checkout'); toggleCartHidden()}}
                >Checkout
                </button>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    itemCount:selectCartItemsCount,
    hidden: selectCartHidden
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CartDropDown))