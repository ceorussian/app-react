import * as type from "../types";

export function getPosts() {
    return {
        type: type.GET_POST
    }
}

export function getPostSuccess(payload) {
    return {
        type: type.GET_POST_SUCCESS,
        payload
    }
}