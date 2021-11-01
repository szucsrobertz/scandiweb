import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import { IoIosArrowDown } from "react-icons/io";

import {toggleCurrencyHidden} from '../../redux/currencies/currencies.actions'
import {selectCurrencyHidden} from '../../redux/currencies/currencies.selectors'
import {selectCurrencies} from '../../redux/currencies/currencies.selectors'
import { baseCurrency} from '../../redux/currencies/currencies.selectors'
import {changeBaseCurrency} from '../../redux/currencies/currencies.actions'

import getSymbolFromCurrency from 'currency-symbol-map'

import './styles.scss'

class CurrencyPicker extends React.Component {
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
      }
    
      componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
      }
      myRef = React.createRef();
      
      handleClickOutside = e => {
        if (!this.myRef.current.contains(e.target) && !this.props.hidden) {
            this.props.toggleCurrencyHidden()
        }
      };
    

    render() {
        const {toggleCurrencyHidden,hidden,currencies,baseCurrency, changeBaseCurrency} = this.props
        
        return(
            <div  ref={this.myRef}> 
                <div className="currency-container" onClick={toggleCurrencyHidden} >
                  {getSymbolFromCurrency(baseCurrency)}  <IoIosArrowDown />
                </div>

            {hidden ? null : 
                <div className="currency-dropdown">
                  {currencies.map((currency,index) => (
                        <div className='currencies-items' key={index} onClick={() => {changeBaseCurrency(currency); toggleCurrencyHidden()}}>
                         {getSymbolFromCurrency(currency)} {currency}
                        </div>
                  ))}
                </div>}
            </div>
            
        )
    }
}

const mapStateToProps = createStructuredSelector({
    hidden: selectCurrencyHidden,
    currencies: selectCurrencies,
    baseCurrency: baseCurrency

})

const mapDispatchToProps = dispatch => ({
    toggleCurrencyHidden: () => dispatch(toggleCurrencyHidden()),
    changeBaseCurrency: (item) =>dispatch(changeBaseCurrency(item))
})

export default connect(mapStateToProps,mapDispatchToProps)(CurrencyPicker)