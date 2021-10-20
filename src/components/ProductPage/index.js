import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import Carousel from '../Carousel';

import {baseCurrency} from '../../redux/currencies/currencies.selectors'

import './styles.scss'


class ProductPage extends React.Component {
    render() {
        const {...product} =this.props.location.state.product   
        const {baseCurrency} = this.props
        const res = product.prices.filter(currency => currency.currency === baseCurrency)

        let col =product.attributes.find(x => x.type ==="swatch")
        let size = product.attributes.find(x => x.type ==="text")

        return(
            <div className="product-container">
                <Carousel images={product.gallery} />
                <div className="product-description">
                    {product.name} {product.brand}
                    

            {col ? <div> 
                     <p>Color :</p>
                        <div className="size-container">
 
                         {col.items.map((size) => (<div className="size-value" style={{backgroundColor:`${size.value}`}}></div>))}
                        </div>
                     
                     </div> : null
                    } 

            {size ? 
            <div> 
            <p>Size :</p>
               <div className="size-container">

                {size.items.map((size) => (<div className="size-value" style={{backgroundColor:`${size.value}`}}>{size.value}</div>))}
               </div>
            
            </div> : null}

                    <div>
                           <p>Price:</p>
                           <p>{res[0].currency} {res[0].amount}</p>
                       </div> 


                  
                       <div><button>ADD TO CART</button></div>
                <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
                </div>

                
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,
})

export default connect(mapStateToProps)(ProductPage)