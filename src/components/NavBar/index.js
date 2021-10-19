import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {selectCartHidden} from '../../redux/cart/cart.selectors'
import CartDropDown from '../CartDropDown';
import CartIcon from '../CartIcon';
import CurrencyPicker from '../CurrencyPicker';

import './styles.scss'

class NavBar extends React.Component {
    render() {
        const {hidden} = this.props
        return(
            <div className="nav-container">
                <div className='options'>
                <NavLink className='option'to='/clothes' activeClassName="active-link">Clothes</NavLink>
                <NavLink className='option' to='/tech' activeClassName="active-link">Tech</NavLink>
                <CurrencyPicker />
                <CartIcon />
                </div>
            {hidden ? null : <CartDropDown />}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden,
})

export default connect(mapStateToProps)(NavBar)