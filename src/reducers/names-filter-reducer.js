import { NAMES_FILTER_UPDATE } from '../actions/names-actions';

// Default state value for filter
const InitialState = "";

export default function NamesFilterReducer(state = InitialState, {type, payload}) {
  switch(type) {
    case NAMES_FILTER_UPDATE:
      return payload;

    default:
    // Fall through, silence linter error.
  }
  return state;
}
