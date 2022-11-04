import { combineReducers } from "redux";
import columns from "./column"
import posts from "./posts"

const rootReducer  = combineReducers({
    columns: columns,
    posts: posts
});

export default rootReducer;