// function Custom_Map(arr, CB){
//     const result = [];
//     for(let i = 0; i< arr.length; i++){
//         result.push(CB(arr[i],i+1));
//     } 
//     return result 

// }

// const MappedArray = Custom_Map([1,2,3], (Element, idx) =>{
//     console.log("element at index", idx, "is", Element);
//     return Element * 2
// })
// console.log(MappedArray);




function Custom_Map(arr, CB){
    const result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(CB(arr[i], i+1));
    }
    return result
}

const MappedArray = Custom_Map([1,2,3], (Element, idx) =>{
    console.log("element at index", idx, "is", Element);
    return Element*3
})
console.log(MappedArray);