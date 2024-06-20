
const number = [1,2,3,4,5];
number.forEach((num, index)=>{
    number[index] = num *2
});
console.log(number)



// ------------OR----------

const number1 = [1,2,3,4,5];
const multipledNumber = number1.map(num => num *2);
console.log(multipledNumber)
