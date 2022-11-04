import * as type from "../types";

const initialState = {
    columns: [],
    loading: false
};

export default function columns(state = initialState, action) {
    switch (action.type) {
        case type.GET_COLUMNS:
            
            return {
                ...state,
                loading: true
            }
        case type.GET_COLUMNS_SUCCESS:
        
            return {
                ...state,
                columns: action.payload.columns,
                loading: false
            }
        default:
            return state;
    }
}