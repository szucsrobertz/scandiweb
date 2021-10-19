import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {toggleCurrencyHidden} from '../../redux/currencies/currencies.actions'
import {selectCurrencyHidden} from '../../redux/currencies/currencies.selectors'
import {selectCurrencies} from '../../redux/currencies/currencies.selectors'
import { baseCurrency} from '../../redux/currencies/currencies.selectors'
import {changeBaseCurrency} from '../../redux/currencies/currencies.actions'

import './styles.scss'

class CurrencyPicker extends React.Component {
    render() {
        const {toggleCurrencyHidden,hidden,currencies,baseCurrency, changeBaseCurrency} = this.props
        return(
            <div>
                <div className="currency-container" onClick={toggleCurrencyHidden}>
                    {baseCurrency} &#xf107;
                </div>

            {hidden ? null : 
                <div className="currency-dropdown">
                  {currencies.map((currency,index) => (
                        <div className='currencies-items' key={index} onClick={() => changeBaseCurrency(currency)}>
                            {currency}
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