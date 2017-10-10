import { NamesService } from '../services/names-service';

export const NAMES_FETCHED = 'NAMES_FETCHED';
export const NAMES_FILTER_UPDATE = 'NAMES_FILTER_UPDATE';

export const doFetchFilteredNames = filter => {
  const names = NamesService.fetchNames(filter);
  return {
    type: NAMES_FETCHED,
    payload: names
  };
}

export const doNamesFilterUpdate = filter => {
  return {
    type: NAMES_FILTER_UPDATE,
    payload: filter
  };
}
