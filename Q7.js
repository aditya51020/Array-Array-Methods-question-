function sumValueA(arr){
    const filteredArray = arr.filter(obj =>{
        return obj.name.charAt(0).toLowerCase() === 'a';
    });
    const reducedArray = filteredArray.reduce((total, obj) =>{
        return total + obj.value;
    },0);

    return reducedArray
}

const objArray =[
    {name: 'apple', value: 100},
    {name: 'mi', value: 10},
    {name: 'vivo', value: 40},
    {name: 'apple', value: 90},
    {name: 'apix', value: 30}
];

console.log(sumValueA(objArray));