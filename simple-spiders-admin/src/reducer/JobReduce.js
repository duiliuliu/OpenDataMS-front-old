import * as ActionsConstant from '../constant/ActionsConstant';

const initialState = {
  param: {},
  message: ""
}

export default function (state = initialState, action) {
  console.log("reduce", action)
  switch (action.type) {
    case ActionsConstant.SUBMIT_JOB:
      {
        return {
          ...state,
        }
      }

    case ActionsConstant.GET_JOBLIST:
      {
        return {
          ...state,
        }
      }

    default:
      return state;
  }
}