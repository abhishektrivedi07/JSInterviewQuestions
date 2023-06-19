let p1 = Promise.resolve("p1");
let p2 = Promise.resolve("p2");
let p3 = Promise.resolve("p3");


//Running all independent
Promise.all([p1, p2, p3])
.then(val => console.log(val))
.catch(err => console.log('rejetc', err));


//p1 then p2 then p3
// p1.then(valp1 => {
//     console.log(valp1);
//     return p2;
// }).then(valp2 => {
//     console.log(valp2);
//     return p3;
// }).then(valp3 => {
//     console.log(valp3);
// }).catch(err => console.log(err));

//p1 and p2 parallel then p3
// Promise.all([p1, p2])
// .then(valp1p2 => {
//     console.log(valp1p2);
//     return p3;
// }).then(valp3 => {
//     console.log(valp3);
// }).catch(err => console.log(err));
// .then(val => console.log(val))
// .catch(err => console.log(err));
// p1.then(valp1 => {
//     console.log(valp1);
//     return p2;
// }).then(valp2 => {
//     console.log(valp2);
//     return p3;
// }).then(valp3 => {
//     console.log(valp3);
// }).catch(err => console.log(err));