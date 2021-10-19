import React from 'react'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect';

import CollectionItem from '../CollectionItem'

import {selectTechProducts} from '../../redux/products/products.selectors'

import './styles.scss'

class TechPage extends React.Component{
    render() {
        const {techProducts} =this.props
        return(
            <div className="tech-page">
                {techProducts[0].products.map((product,index) =>
                <CollectionItem key={index} product={product}/>)}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    techProducts: selectTechProducts,

})

export default connect(mapStateToProps)(TechPage)