import * as type from "../types";

export function getColumn() {
    return {
        type: type.GET_COLUMNS
    }
}

export function getColumnSuccess(payload) {
    return {
        type: type.GET_COLUMNS_SUCCESS,
        payload
    }
}