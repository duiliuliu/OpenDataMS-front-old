import { takeLatest } from 'redux-saga/effects';
import { take, put, call, fork, select, all } from 'redux-saga/effects'
import {getJobListAsync} from './JobSagas';
import * as ActionsConstant from '../constant/ActionsConstant'

// export default function* rootSaga() {
//   yield [
//     takeLatest(ActionsConstant.GET_JOBLIST, getJobListAsync),
//   ];
// }

export default function* root() {
  yield all([
    fork(getJobListAsync),
  ])
}
