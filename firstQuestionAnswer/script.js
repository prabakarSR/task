const _ = require ("lodash");
let obj1 = {
    name: "prabakar",
    age: 18
};
let obj2 = {
    age: 18,
    name: "prabakar"
};
console.log(_.isEqual(obj1, obj2));