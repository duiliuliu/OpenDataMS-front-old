import * as ActionsConstant from '../constant/ActionsConstant';
export const submitJob = (jobConfig) => {
  return {
    type: ActionsConstant.SUBMIT_JOB,
    jobConfig
  }
}

export const getJob = () => {
  return {
    type: ActionsConstant.GET_JOB,
  }
}

export const getJobList = id => {
  return {
    type: ActionsConstant.GET_JOBLIST,
  }
}