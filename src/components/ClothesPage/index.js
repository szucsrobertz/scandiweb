import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../CollectionItem'

import {selectClothesProducts} from '../../redux/products/products.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import './styles.scss'

class ClothesPage extends React.Component{
  
    render() {
        const {clothesProducts} =this.props
    
        return(
         

            <div className="clothes-page">
                {clothesProducts[0].products.map((product,index) =>
                <CollectionItem key={index} product={product}/>)}
            </div>
         
        )
    }
}

const mapStateToProps = createStructuredSelector({
    clothesProducts: selectClothesProducts,
    hidden : selectCartHidden

})

export default connect(mapStateToProps)(ClothesPage)