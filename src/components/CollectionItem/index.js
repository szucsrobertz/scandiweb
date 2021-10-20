import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import {Link,withRouter} from 'react-router-dom'

import {baseCurrency} from '../../redux/currencies/currencies.selectors'

import './styles.scss'

class CollectionItem extends React.Component{
    render() {
        const {...product} = this.props.product
        const {baseCurrency} = this.props
        const res = product.prices.filter(currency => currency.currency === baseCurrency)
      
        return(
            <Link
            className="collection-item" 
            to={{
                pathname:`/details/${product.id}`,
                state:{
                    product:product
                }}}>
            <div >
                <div className="item-photo">
                 <img src={product.gallery[0]} alt="product" />
                </div>
                <div>
                    <p>{product.brand}</p>
                    <p>{product.name}</p>
                    <p>{res[0].currency} {res[0].amount}</p>
                </div>
            </div>
            </Link>
            
        )
    }
}

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,
})




export default withRouter(connect(mapStateToProps)(CollectionItem))