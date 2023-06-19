function evaluate(action) {
    return function(a) {
        return function(b) {
            switch(action) {
                case 'sum': console.log(a+b);; break;
                case 'multiply': console.log(a*b); break;
                case 'devide': console.log(a/b); break;
                case 'subtract': console.log(a-b); break;
                default: console.log('Invalid action');
            }
        }
    }
}

evaluate('sum')(1)(5);
evaluate('multiply')(1)(5);
evaluate('devide')(10)(5);
evaluate('subtract')(1)(5);
evaluate('unknows')(1)(5);