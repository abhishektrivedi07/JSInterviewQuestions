let arr = [1,2,[3,4,5,[6,7,8,[9]]]];

let res = [];

function flaten(arr, i) {
    if(i == arr.length) {
        return;
    }
    //console.log(typeof arr[i], i, arr.length);
    if(typeof arr[i] == 'object') {
        flaten(arr[i], 0);
    } else {
        res.push(arr[i]);
    }
    i++;
    flaten(arr, i);
}
flaten(arr, 0);
console.log(res);



