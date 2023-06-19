// //Impure
// let numberArray = [];
// const impureAddNumber = (number) => numberArray.push(number);
// //Pure
// const pureAddNumber = (number) => (argNumberArray) =>
//   argNumberArray.concat([number]);

// const myNewFn = (number, argNumberArray) => 
//     argNumberArray.concat([number]);  


//   //Display the results
// console.log(impureAddNumber(6)); // returns 1
// console.log(numberArray); // returns [6]
// console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
// console.log(pureAddNumber(8)(numberArray)); // returns [6, 8]
// console.log(myNewFn(8, numberArray)); // returns [6, 8]
// console.log(myNewFn(9, numberArray)); // returns [6, 8]
// console.log(numberArray); // returns [6]


let arr = [1,2,3];
function fun(x, n) {
    // x.push(n);
    return x.concat([n]);
}

console.log(fun(arr, 5), arr);
console.log(fun(arr, 6), arr);