import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { baseCurrency } from '../../redux/currencies/currencies.selectors';
import { addItem, removeItem } from '../../redux/cart/cart.actions';

import ImageSlider from '../ImageSlider'

import './styles.scss';

import getSymbolFromCurrency from 'currency-symbol-map'

class CheckOutItem extends React.Component{
    render() {

        const {...product} = this.props.item
        const {baseCurrency,addItem,removeItem} = this.props
        const selectedCurrency = product.prices.filter(currency => currency.currency === baseCurrency)
   
     
        let col =product.attributes.find(x => x.type ==="swatch")
        let size = product.attributes.find(x => x.name ==="Size")
        let capacity = product.attributes.find(x => x.name === "Capacity")
        let usb = product.attributes.find(x=> x.name === "With USB 3 ports")
        let touchId = product.attributes.find(x => x.name === "Touch ID in keyboard")
        return(
            <div className="checkout-container">
               <div>
                  <h2>{product.brand}</h2>
                  <p>{product.name}</p>
                 <h2>{getSymbolFromCurrency(selectedCurrency[0].currency)} {product.quantity *selectedCurrency[0].amount}</h2>

                  {col ? <div> 
                 
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
    
               <div className="size-container">

                {size.items.map((size,index) => 
                (<div 
                className={` ${product.size === size.value ? "size-value-active" : "size-value"} `}
                key={index}
                >
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            {capacity ? 
            <div> 
               <div className="size-container">
                {capacity.items.map((size,index) => 
                (<div 
                className={`${product.capacity === size.value ? "size-value-active" : "size-value"} `}
              
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            {usb ? 
            <div> 
                <h6>USB 3 ports</h6>
               <div className="size-container">

                {usb.items.map((size,index) => 
                (<div 
                className={`${product.usb === size.value ? "size-value-active" : "size-value"} `}
             
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            {touchId ? 
            <div> 
                <h6>Touch ID in keyboard</h6>
               <div className="size-container">

                {touchId.items.map((size,index) => 
                (<div 
                className={`${product.touchId === size.value ? "size-value-active" : "size-value"} `}
               
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}
               </div>
               <div className="end">
               <div className="quantity-continaer">
                <p className="quantity" onClick={() => addItem(product)}>+</p>
                <p>{product.quantity} </p>
                <p className="quantity" onClick={() => removeItem(product)}>-</p>
            </div>
            <div className="image-slider">
            <ImageSlider images={product.gallery} />
            </div>
               </div>
          
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})


const mapStateToProps = createStructuredSelector({
    baseCurrency:baseCurrency
})

export default connect(mapStateToProps,mapDispatchToProps)(CheckOutItem)