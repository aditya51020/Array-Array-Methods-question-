function arrayLikeToArray(aar){
    return Array.from(aar);
}

const arratLikeObj = {0: 'a', 1: 'b', 2: 'c', length: 3};
const reuslt = arrayLikeToArray(arratLikeObj);
console.log(reuslt)


// ---------OR---------

function arrayLikeToArray1(aar){
    return Array.prototype.slice.call(aar);
}

const arratLikeObj1 = {0: 'a', 1: 'b', 2: 'c', length: 3};
const reuslt1 = arrayLikeToArray1(arratLikeObj1);
console.log(reuslt1)