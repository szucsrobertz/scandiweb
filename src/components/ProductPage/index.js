import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import Carousel from '../Carousel';

import { addItem } from '../../redux/cart/cart.actions';
import {baseCurrency} from '../../redux/currencies/currencies.selectors'

import './styles.scss'


class ProductPage extends React.Component {
    state ={
        selectedColor: "",
        selectedSize: ""
    }
    render() {
        const {...product} =this.props.location.state.product   
        const {baseCurrency,addItem} = this.props
        const selectedCurrency = product.prices.filter(currency => currency.currency === baseCurrency)
        const {selectedColor,selectedSize} = this.state

        
        let col =product.attributes.find(x => x.type ==="swatch")
        let size = product.attributes.find(x => x.type ==="text")

        return(
            <div className="product-container">
                <Carousel images={product.gallery} />
                <div className="product-description">
                   <p><h2>{product.name}</h2></p> 
                   <p>{product.brand}</p>  
                    

            {col ? <div> 
                     <p><h2>Color :</h2></p>
                        <div className="size-container">
 
                         {col.items.map((color ,index) =>
                          (<div className={`color-value ${selectedColor === color.value ? "color-value-active" : ""} `} 
                          style={{backgroundColor:`${color.value}`}} 
                          onClick={() => this.setState({selectedColor:color.value})}   key={index}>
                            
                          </div>))}
                        </div>
                     
                     </div> : null
                    } 

            {size ? 
            <div> 
            <p><h2>Size:</h2></p>
               <div className="size-container">

                {size.items.map((size,index) => 
                (<div 
                className={`size-value ${selectedSize === size.value ? "size-value-active" : ""} `}
                onClick={() => this.setState({selectedSize:size.value})} 
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

                    <div>
                           <p><h2>Price:</h2></p>
                           <p><h2>{selectedCurrency[0].currency} {selectedCurrency[0].amount}</h2></p>
                       </div> 


                  
                       <div>
                           <button onClick={() => addItem(product,selectedSize,selectedColor)} className="button-container">ADD TO CART</button>
                        </div>
                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,
})

const mapDispatchToProps = dispatch => ({
    addItem: (item,size,color) => dispatch(addItem(item,size,color))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)