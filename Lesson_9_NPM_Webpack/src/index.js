'use strict';

import { sum } from './math';


// function log(...args) {
//     console.log(args);
// }

// log([]);


function checkField(obj) {
    return obj.credentials.name;
}

console.log(checkField({
    credentials: {
        name: 'Name'
    }
}));

// function getArrayField(arr) {
//     return arr?.[0]?.name;
// }
// console.log(getArrayField([]));


console.log(sum(2, 2));
