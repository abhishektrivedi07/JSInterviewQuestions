// let i;


// Use var to pring 0 1 2
// 1. Pass i to setTimeout
// for (var i = 0; i < 3; i++) {
//   setTimeout(function(i) {
//     console.log(i); 
//   }, i*1000, i);
// }

// 2. Use clouser
// for (var i = 0; i < 3; i++) {
//     function clsr(x) {
//         setTimeout(function() {
//             console.log(x); 
//         }, i*1000);
//     }
//     clsr(i);
// }
//Make this code run only once
let view;
function shouldRunOnce() {
    let called = 0;

    return function () {
        if(!called) {
            view = 'Only once';
            console.log('This function run', view);
            called++;
        } else {
            console.log('This function has been called already');
        }
    }
}

let x = shouldRunOnce();
x();
x();
