import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';

import {baseCurrency} from '../../redux/currencies/currencies.selectors'
import { addItem, removeItem } from '../../redux/cart/cart.actions';

import './styles.scss'

class CartItem extends React.Component {
    render(){
        const {...product} = this.props.item
        const {baseCurrency,addItem,removeItem} = this.props
        const selectedCurrency = product.prices.filter(currency => currency.currency === baseCurrency)
        
        let col =product.attributes.find(x => x.type ==="swatch")
        let size = product.attributes.find(x => x.type ==="text")
        return(
            <div className='cart-item'>
            <div className='item-details'>
                <span className='name'>{product.name}</span>
                <span className='price'><h3>{selectedCurrency[0].currency} {product.quantity * selectedCurrency[0].amount}</h3></span>
                {col ? <div> 
                     <p>Color :</p>
                        <div className="size-container">
 
                         {col.items.map((color,index) =>
                          (<div className={` ${product.colorSelected === color.value ? "color-value-active" : "color-value"} `} 
                          style={{backgroundColor:`${color.value}`}} 
                          key={index}
                        >
                          </div>))}
                        </div>
                     
                     </div> : null
                    } 

            {size ? 
            <div> 
            <p>Size :</p>
               <div className="size-container">

                {size.items.map((size,index) => 
                (<div 
                className={` ${product.size === size.value ? "size-value-active" : "size-value"} `}
                key={index}
                >
                    {size.value}</div>))}
               </div>
            
            </div> : null}
            </div>
            <div className="quantity-continaer">
                <p className="quantity" onClick={() => addItem(product)}>+</p>
                <p>{product.quantity} </p>
                <p className="quantity" onClick={() => removeItem(product)}>-</p>
            </div>
            <img  src={product.gallery[0]} alt="product"  />
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,
})


export default connect(mapStateToProps,mapDispatchToProps)(CartItem)