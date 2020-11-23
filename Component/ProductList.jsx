import React from 'react'
import ProductItem from './ProductItem.jsx'
import {connect} from 'react-redux'
import {addtocard} from './../action/Index.js'


const ProductList = (props) => {


const {product} = props
    return(
       <div>
           <h3>Products</h3>
          {product.map( (item) => {
              return (
                  <ProductItem key = {item.id} item = {item} addtocardOnClick = {() => props.dispatch(addtocard(item.id))}/>
              )
          })}
       </div>
    )
}



const getproduct = product =>  Object.keys(product).map(id => product[id])


const mapStatetoProps = (state) => {
    return{
 product : getproduct(state.Products)
    }
}

export default connect(mapStatetoProps)(ProductList);