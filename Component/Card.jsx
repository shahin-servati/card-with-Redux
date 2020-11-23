import React from 'react'
import {connect} from 'react-redux'
import {addtocard} from './../action/Index.js' 
import Product from './Product.jsx'
import {checkout} from './../action/Index.js'



function Card (props) {
    console.log(props.product)
const {product} = props
const hascard  = product.length > 0 
const nodes = hascard ? (
         product.map(item => <Product item = {item} quantity = {item.quantity}/>)
) : (
    <h3>سبد شما  خالی است</h3>
)




    return(
<div>
  <h3></h3>
  <div>{nodes}</div>
    <div>total : ${props.total}</div>
  <button disabled = {hascard ? '' : 'disabled'} onClick = {() => props.dispatch(checkout())}>
      check out
  </button>
</div>

    )
}

let getcardProduct = state => {
    return state.Card.addedIds.map(id => ({
        ...state.Products[id],
        quantity : (state.Card.quantityById[id] || 0)
    }))
}

let getTotal = state => state.Card.addedIds.reduce((total , id) => total + state.Products[id].price * (state.Card.quantityById[id] || 0),0)

const mapStateToProps = state => ({
    product :  getcardProduct(state),
    total : getTotal(state)
})

export default connect(mapStateToProps)(Card)