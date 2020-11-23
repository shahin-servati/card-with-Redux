import React from 'react'
import shop from './../api/shop.js'
import ProductList from './ProductList.jsx'
import {recieveProduct} from './../action/Index.js'
import {connect} from 'react-redux'
import Card from './Card.jsx'



class App extends React.Component{

componentDidMount(){
shop.getProducts( (product) => {
this.props.dispatch(recieveProduct(product))
})
}

render(){
return(

<div>
    <h1>Example shopping center</h1>
   <ProductList/>
    <hr />
<Card/>
</div>


)
}
}

export default connect(null)(App)