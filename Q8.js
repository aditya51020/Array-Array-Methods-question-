const number = [1,2,3,4,5];
const result = number.reduce((acc, curr) =>{
    if (curr % 2 == 0){
        acc.even.push(curr)
    }else{
        acc.odd.push(curr)
    }
    return acc;

},{odd:[], even:[]});

console.log(result)