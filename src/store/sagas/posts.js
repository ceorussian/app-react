import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from "../types";

import axios from "axios";
import {getPostSuccess} from "../actions/posts"

async function getPostRequest () {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        return await axios.get(url);
         
    } catch (error) {
        console.log("err");
    }
}

function* getPosts() {
   try {
      const posts = yield call(getPostRequest);
      const payload = {
        posts: posts.data
      }

      yield put(getPostSuccess(payload));
   } catch (e) {
      yield put({type: "POST_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
    yield takeEvery(type.GET_POST, getPosts);
}

export default mySaga;