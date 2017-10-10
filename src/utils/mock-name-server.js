import faker from 'faker';
import { map, range, uniq } from 'lodash';

const ALL_NAMES = uniq(generateData());

function generateData(count = 1000) {
    return map(range(count), () => {
        return faker.name.findName();
    });
}

function filterNames(input) {
    // Do your filtering here and use ALL_NAMES
    const re = RegExp(input, 'i');
    return ALL_NAMES.filter(name => re.test(name));
}

export function getNames(input, cb) {
    setTimeout(() => {
        cb(filterNames(input));
    }, 300);
};
