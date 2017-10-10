import {getNames} from '../utils/mock-name-server';

// Singleton service, make sure of the mock name server.
export class NamesService {
  static fetchNames(filter) {
    return new Promise((resolve, reject) => {
      getNames(filter, names => {
        resolve(names);
      });
    });
  }
}
