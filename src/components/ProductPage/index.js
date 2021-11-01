import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import Carousel from '../Carousel';

import { client } from "../../index";
import gql from "graphql-tag";

import { addItem } from '../../redux/cart/cart.actions';
import {baseCurrency} from '../../redux/currencies/currencies.selectors'

import getSymbolFromCurrency from 'currency-symbol-map'

import './styles.scss'
import ReactHtmlParser from 'react-html-parser';



class ProductPage extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            selectedColor: "",
            selectedSize: "",
            selectedCapacity:"",
            selectedUsb:"",
            selectedTouchId:"",
            product: {},
            loading:true
        }
    }


    componentDidMount() {
        const query = gql`
           query product($id:String!){
               product(id:$id){
                name,
                inStock,
                gallery,
                description,
                category,
                attributes{
                    id,
                    name,
                    type,
                    items{
                        value,
                        id}},
                prices{
                currency,
                amount},
                brand
               }
           }
        `

        client.query({
            query:query,
            variables:{
                id:this.props.location.state.id
            }
        }).then(result => this.setState({
            product: result.data.product,
            loading: result.loading
        }))
    }
    render() {
  
      
   const product = this.state.product

        const {baseCurrency,addItem} = this.props
        if(!this.state.loading){
            var selectedCurrency = product.prices.filter(currency => currency.currency === baseCurrency)
           
            var {selectedColor,selectedSize,selectedCapacity,selectedUsb,selectedTouchId} = this.state
    
            var col =product.attributes.find(x => x.type ==="swatch")
            var size = product.attributes.find(x => x.name ==="Size")
            var capacity = product.attributes.find(x => x.name === "Capacity")
            var usb = product.attributes.find(x=> x.name === "With USB 3 ports")
            var touchId = product.attributes.find(x => x.name === "Touch ID in keyboard")
        }

        return(
            <div className="product-container">
                <Carousel images={product.gallery} />
                <div className="product-description">
                   <h2>{product.name}</h2>
                   <p>{product.brand}</p>  
                    

            {col ? <div> 
                    <h2>Color :</h2>
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
            <h2>Size:</h2>
               <div className="size-container">

                {size.items.map((size,index) => 
                (<div 
                className={`size-value ${selectedSize === size.value ? "size-value-active" : ""} `}
                onClick={() => this.setState({selectedSize:size.value})} 
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            {capacity ? 
            <div> 
            <h2>Capacity:</h2>
               <div className="size-container">

                {capacity.items.map((size,index) => 
                (<div 
                className={`size-value ${selectedCapacity === size.value ? "size-value-active" : ""} `}
                onClick={() => this.setState({selectedCapacity:size.value})} 
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            {usb ? 
            <div> 
            <h2>With USB 3 ports</h2>
               <div className="size-container">

                {usb.items.map((size,index) => 
                (<div 
                className={`size-value ${selectedUsb === size.value ? "size-value-active" : ""} `}
                onClick={() => this.setState({selectedUsb:size.value})} 
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            {touchId ? 
            <div> 
            <h2>Touch ID in keyboard</h2>
               <div className="size-container">

                {touchId.items.map((size,index) => 
                (<div 
                className={`size-value ${selectedTouchId === size.value ? "size-value-active" : ""} `}
                onClick={() => this.setState({selectedTouchId:size.value})} 
                key={index}>
                    {size.value}</div>))}
               </div>
            
            </div> : null}

            

                    <div>
                           <h2>Price:</h2>
                        {!this.state.loading ?  <h2>  {getSymbolFromCurrency(selectedCurrency[0].currency)} {selectedCurrency[0].amount}</h2>: null} 
                       </div> 


                  
                       <div>
                           <button onClick={() => {
                               if(product.inStock){
                                   if(size){
                                       if(!selectedSize) {
                                        alert("pick a size")
                                       } else {

                                           addItem(product,selectedSize,selectedColor,selectedCapacity,selectedUsb,selectedTouchId)
                                       }
                                   } else if(col && capacity){
                                       if( selectedColor && selectedCapacity){
                                        addItem(product,selectedSize,selectedColor,selectedCapacity,selectedUsb,selectedTouchId)
                                    } else if(!selectedColor && selectedCapacity) {
                                        alert("pick a color")
                                    }else if(!selectedColor && !selectedCapacity){
                                        alert("pick a color and capacity")
                                    } else if(selectedColor && !selectedCapacity) {
                                           alert("pick a capacity")
                                       }
                                   } else if(capacity && usb && touchId){
                                    if(selectedCapacity && selectedUsb && selectedTouchId){
                                        addItem(product,selectedSize,selectedColor,selectedCapacity,selectedUsb,selectedTouchId)
                                    } else if(!selectedColor || !selectedCapacity || !selectedTouchId) {
                                        alert("please select all attributes")
                                    }
                                   }
                               }else {
                                   alert("item not in stock")
                               }

                               }} className="button-container">ADD TO CART</button>
                        </div>

                <div>{ReactHtmlParser(product.description)}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    baseCurrency: baseCurrency,
})

const mapDispatchToProps = dispatch => ({
    addItem: (item,size,color,capacity,usb,touchId) => dispatch(addItem(item,size,color,capacity,usb,touchId))
})


export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)