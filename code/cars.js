const fp = require('lodash/fp')

const cars = [
    {name: 'Ferrari FF', horsepower: 660, doller_value:700000, in_stock: true},
    { name: 'Spyker c12 Zagato', horsepower: 650, doller_value:648000, in_stock: false},
    {name: 'Jaguar XKR-S', horsepower: 550, doller_value:132000, in_stock: false},
    { name: 'Aston Martin One-77', horsepower: 750, doller_value:185000, in_stock: true},
    { name: 'Pagani Huayra', horsepower: 700, doller_value:1300000, in_stock: false},
]

let lastCar = (cars) => fp.last(cars);

let isInStock = (car) => fp.prop('in_stock', car);

let isLastInStock = fp.flowRight(isInStock, lastCar);

console.log(isLastInStock(cars));

let firstCar = (cars) => fp.first(cars);

let getName = (car) => fp.prop('name', car);

let getFirstCarName = fp.flowRight(getName, firstCar);

console.log(getFirstCarName(cars));

let _average = function(xs) {
    return fp.reduce(fp.add, 0 , xs) / xs.length
}

let getCarDollarValues = (cars) => fp.map((car) => {return car.doller_value}, cars);

let averageDollarValue = fp.flowRight(_average,getCarDollarValues);

console.log(averageDollarValue(cars));

let _underscore = fp.replace(/\W+/g, '_');
let lowerCase = (str) => fp.lowerCase(str);
let lowerCaseUnderScore = fp.flowRight(_underscore, lowerCase);
let sanitizeNames = (strList) => fp.map((str) => {return lowerCaseUnderScore(str)}, strList);

let strList = ["Hello   World"];
console.log(sanitizeNames(strList));
