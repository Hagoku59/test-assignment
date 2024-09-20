import { ADD_TRANSACTION_SUCCESS } from "./actionTypes"

const initialState = {
    transactions:[] 
}
const transactionReducer = (state = initialState,action) => {
    switch(action.type){
        case ADD_TRANSACTION_SUCCESS:
            return {...state}
        default:
            return state
    }
}
export default transactionReducer;