import * as ActionsConstant from '../constant/ActionsConstant';

const initialState = {
  data: [],
  message: ""
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionsConstant.SUBMIT_JOB:
      {
        return {
          ...state,
          data:action.payload
        }
      }

    case ActionsConstant.GET_JOBLIST:
      {
        return {
          ...state,
          data:action.payload.data
        }
      }

    default:
      return state;
  }
}