import axios from "../axios";
import { ADD_TRANSACTION_SUCCESS } from "./actionTypes";

const addTransactionSuccess = () => {
    return {type: ADD_TRANSACTION_SUCCESS};
};

export const addTransaction = (data) => {
    return async (dispatch) => {
        try {
            await axios.post("/posttransaction", data);
            dispatch(addTransactionSuccess());
        } catch (e) {
            console.log(e);
        }
    };
};