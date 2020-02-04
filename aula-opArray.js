//AULA SOBRE OPERAÇOES EM ARRAY
//MAP
const arr = [1, 2, 3, 4, 5, 6];

const newArray = arr.map(function (item, index) {
    return item + index;
});

console.log(newArray);

//REDUCE
const sum = arr.reduce(function (total, next) {
    return total + next;
});

console.log(sum);

//FILTER
const filter = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(filter);

//FIND
const find = arr.find(function (item) {
    return item === 2;
});

console.log(find);

