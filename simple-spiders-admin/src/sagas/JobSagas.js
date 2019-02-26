import {select, put, call} from 'redux-saga/effects';
import * as JobAction from '../action/JobAction'
import {getJobs, url} from '../api/JobApi';

const { submitJob, getJob, getJobList } = JobAction


export function* getJobListAsync() {
  // 获取Store state 上的数据
//   const auth = yield select(getAuth);
//   const user = auth.get('user');
  // 发起 ajax 请求
  const response = yield call(getJobs.bind(this, {page:1}));
  if (response.success) {
    localStorage.setItem('token', response.data);
    // 发起 loginSuccessAction
    yield put(getJobList(response.data));
  } else {
    // 发起 loginFailureAction
    console.log("失败")
  }
}