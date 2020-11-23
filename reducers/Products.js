

const Products = (state = {} ,action) => {


    switch (action.type) {
        case 'RECIEVE_PRODUCTS' :
            return{
                ...state,
                ...action.product.reduce( (obj , product) => {
                    obj[product.id] = product
                    return obj;
                },{})
               
            }
            case 'ADDTO_CARD' : 
            let {productId} = action
            let product = state[productId]
            return {
                ...state,
                [productId] : {
                    ...product,
                    inventory : product.inventory - 1 
                }
            }
         
        default:
            break;
    }
    return state
}
export default Products