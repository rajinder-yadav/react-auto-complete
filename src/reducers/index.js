import {combineReducers} from 'redux';
import NamesReducer from './names-reducer';
import NamesFilterReducer from './names-filter-reducer';

// Combine application reducers to be registered with Redux.
const rootReducer = combineReducers({
  names: NamesReducer,
  filter: NamesFilterReducer
});

export default rootReducer;
