import gql from "graphql-tag";
import React from "react";


import { connect } from 'react-redux';
import{selectCartHidden} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import { client } from "../../index";
import CollectionItem from "../CollectionItem";

import './styles.scss'

class ProductsListingPage extends React.Component{
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }
    componentDidMount() {
        const query = gql`
            query CategoryInput($title: String!){
                category(input: {title:$title}){
                    name
                    products{
                        id,
                        name,
                        inStock,
                        gallery,
                        description,
                        category,
                        attributes{id,name,type,items{value,id}},
                        prices{currency,
                          amount},
                        brand}
                }
            }
        `

        client.query({
            query:query,
            
            variables:{
                title:this.props.location.state.category
            }
        }).then(result => this.setState({products:result.data.category.products}))

    }
    render(){
        const {hidden} = this.props;

        return(
            <div className={` ${!hidden ? 'cart-on': 'null'} `} >

            <div className="products-listing ">
                {this.state.products.map((product,index) =>
                <CollectionItem key={index} product={product}/>)}
            </div>
            </div>
        )
    }
}


const mapStateToProps = createStructuredSelector({
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(ProductsListingPage)
