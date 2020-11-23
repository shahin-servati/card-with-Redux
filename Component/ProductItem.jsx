import React from 'react'
import Product from './Product.jsx'





function ProductItem(props){

    const {inventory} = props.item
    return (
       
    <div>
       <Product item = {props.item} quantity = {inventory}/>
        <button type = 'button' disabled = {inventory > 0 ? '' : 'disabled'} onClick = {props.addtocardOnClick}>
            {inventory > 0 ? 'Add to card' : 'Sold out'}
        </button>
    </div>
    )
}

export default ProductItem