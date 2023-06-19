function infiniteCurry(a) {
    return function inner(b) {
        if(b) return infiniteCurry(a+b);
        return a;
    }
}

let x = infiniteCurry(10)(5)(6)(7)(9)();
console.log(x);