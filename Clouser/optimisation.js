function fun() {
    let arr = [];
    for(let i=0; i<100000000; i++) {
        arr.push(i*2);
    }
    
    return x => arr[x];
}


let getNum = fun();

console.time('1');
console.log(getNum(10));
console.timeEnd('1');


console.time('2');
console.log(getNum(100));
console.timeEnd('2');


console.time('3');
console.log(getNum(1000));
console.timeEnd('3');