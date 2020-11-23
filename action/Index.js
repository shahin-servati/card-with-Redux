
export const recieveProduct = (product) => {
    return{
        type : 'RECIEVE_PRODUCTS',
        product
    }
}

//////////////////////////////////

export const addtocard = (productId) => {
    return{
        type : 'ADDTO_CARD',
        productId
    }
}

//////////////////////////////////

export const checkout = () => {
    return {
        type : 'CHECKOUT_REQUEST'
    }
}