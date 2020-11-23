
 const initialState =  {
  addedIds : [],
  quantityById : {}
 }

const addedIds = (state = initialState.addedIds ,action) => {
    if(state.indexOf(action.productId) !== -1){
        return state
    }
    return[...state , action.productId];
}


const quantityById = (state = initialState.quantityById ,action) => {
    const {productId} = action
return {
    ...state,
    [productId] : (state[productId] || 0) + 1
}
}


 const Card = (state = initialState, action) =>{
     switch (action.type) {
         case 'CHECKOUT' :
             return initialState;
         case 'ADDTO_CARD':
             return{
                addedIds : addedIds(state.addedIds , action),
                quantityById : quantityById(state.quantityById , action)
             }
             break;
     
         default:
             break;
     }
     return state
 }
 export default Card;