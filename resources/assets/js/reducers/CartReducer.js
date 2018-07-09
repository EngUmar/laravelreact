import {userConstants} from "../constants";
let total_items = JSON.parse(localStorage.getItem('total_items'));

const initialState = total_items ? { count: total_items } : { count: 0 };

export function cart(state = initialState, action) {

    switch (action.type){
        case userConstants.UPDATE_CART :
            return {
                count: action.count
            }

        default:
            return state
    }
}