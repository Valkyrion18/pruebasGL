import { types } from "../types/types"

const initialState = {
    coordinates: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.register:
            return {
                coordinates: [action.payload]
            }
        case types.list:
            return {
                coordinates: [...action.payload]
            }
        case types.delete:
            return {
                // coordinates: state.products.filter(product => product.product !== action.payload)
            }
        default:
            return state;
    }
}


