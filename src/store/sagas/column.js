import { call, put, takeEvery } from 'redux-saga/effects'
import * as type from "../types";

import axios from "axios";
import {getColumnSuccess} from "../actions/column"

async function getColumnsRequest () {
    try {
        const url = "http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1";
        return await axios.get(url);
         
    } catch (error) {
        console.log("err");
    }
}


function* getColumns() {
   try {
      const columns = yield call(getColumnsRequest);
      const payload = {
        columns: columns.data.data
      }

      yield put(getColumnSuccess(payload));
   } catch (e) {
      yield put({type: "COLUMN_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
    yield takeEvery(type.GET_COLUMNS, getColumns);
}

export default mySaga;