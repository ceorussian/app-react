import { spawn, all, call } from 'redux-saga/effects';


import columns from "./column"
import posts from "./posts"

function* rootSaga () {
    const sagas = [
        columns,
        posts
    ];
  
    yield all(sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      }))
    );
  }

export default rootSaga;