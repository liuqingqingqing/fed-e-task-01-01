
new Promise((resolve,) => {
    var a = 'hello';
    resolve(a);
}).then((value) => {
    var b = 'lagou';
    return value + b;
}).then((value) => {
    var c = 'i love you';
    return value + c
}).then((value) => console.log(value));

const fp = require('lodash/fp')
const { Maybe, Container } = require('./support')
let maybe = Maybe.of([5, 6, 1]);
console.log(maybe);
let arrayAdd = (arrayList) => fp.map((value) => {return fp.add(value, 1)}, arrayList);
let ex1 = () => {
    return maybe.map(arrayAdd);
}
console.log(ex1());

let xs = Maybe.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do']);
let first = (items) => fp.first(items);
let ex2 = () => {
    return xs.map(first);
}
console.log(ex2());

let safeProp = fp.curry(function(x, o) {
    return Maybe.of(o[x]);
})

let user = { id: 2, name: 'Albert' };
let ex3 = () => {
    return safeProp('name')(user).map(first);
}
console.log(ex3());

let ex4 = function(n) {
    return Maybe.of(n).map(parseInt);
}
console.log(ex4('3'))