import React from 'react'




function Product(props){


    // const {title , price } = props.item
    return (
       
    <div>
        <h3>{props.item.title}   ${props.item.price} * {props.quantity}</h3>
    </div>
    )
}
export default Product