import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {baseCurrency} from '../../redux/currencies/currencies.selectors'


import './styles.scss'

class CollectionItem extends React.Component{
    render() {
        const {...product} = this.props.product
        const {baseCurrency} = this.props
        console.log(product.prices)

        const res = product.prices.filter(currency => currency.currency === baseCurrency)
        console.log(res[0],"res")
      
        return(
            <div className="collection-item">
                <div className="item-photo">
                 <img src={product.gallery[0]} alt="product" />
                </div>
                <div>
                    <p>{product.brand}</p>
                    <p>{product.name}</p>
                    <p>{res[0].currency} {res[0].amount}</p>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,

})




export default connect(mapStateToProps)(CollectionItem)