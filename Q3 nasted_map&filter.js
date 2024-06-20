const array = [[1,2,3], [4,5,6], [7,8,9]];
const result = array.map(arr => arr.filter(num => num % 2 === 0));

console.log(result)
console.log(array)