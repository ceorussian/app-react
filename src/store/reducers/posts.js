import * as type from "../types";

const stateInit = {
    posts: [],
    loading: false
};

export default function posts(state = stateInit, action) {
    switch (action.type) {
        case type.GET_POST:
            
            return {
                ...state,
                loading: true
            }
        case type.GET_POST_SUCCESS:
        
            return {
                ...state,
                posts: action.payload.posts,
                loading: false
            }
        default:
            return state;
    }
}