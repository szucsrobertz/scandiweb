import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router';

import {selectCartHidden} from '../../redux/cart/cart.selectors'
import CartDropDown from '../CartDropDown';
import CartIcon from '../CartIcon';

import CurrencyPicker from '../CurrencyPicker';

import { IoIosHome } from "react-icons/io";

import './styles.scss'

class NavBar extends React.Component {
    
    render() {
        const history = this.props.history
        const {hidden} = this.props
        return(
            <div className="nav-container">
                <div className='options'>
                <NavLink className='option' to={{pathname:'/clothes', state: {category:'clothes'}}} activeClassName="active-link" >Clothes</NavLink>
                <NavLink className='option'  to={{pathname:'/tech', state: {category:'tech'}}} activeClassName="active-link">Tech</NavLink>
                </div>
                <div className="logo-container"  onClick={() =>{history.push('/')}}>
                    <IoIosHome size={30} color="#05df46"/>
                </div>
                <div className="selections">
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

export default withRouter(connect(mapStateToProps)(NavBar))