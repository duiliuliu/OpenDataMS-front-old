import {
    combineReducers
} from 'redux';
import JobReduce from './JobReduce';

const allReducers = {
    JobReduce
}

const rootReducer = combineReducers(allReducers);

export default rootReducer;