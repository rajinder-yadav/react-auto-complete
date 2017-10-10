import { NAMES_FETCHED } from '../actions/names-actions';

// Default state value for names
const InitialState = [];

export default function NamesReducer(state = InitialState, {type, payload}) {
  switch(type) {
    case NAMES_FETCHED:
      return payload;

    default:
    // Fall through, silence linter error.
  }
  return state;
}
