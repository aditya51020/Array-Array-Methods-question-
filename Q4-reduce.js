function sumOfSquare(num){
    const square = num.reduce((acc, cv)=>{
        return  [...acc,cv*cv];
    },[])
    square.forEach(square => console.log(square));
}
const num = [1, 2, 3, 4];
sumOfSquare(num)
