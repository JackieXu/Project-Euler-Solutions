/**
 * x = even number
 * y = uneven number
 *
 * x + x = x
 * x + y = y
 * y + y = x
 *
 * The Fibonacci series starts with 1, 2, 3, 5 ...
 * This means that every third number after 2 will be an even number
 *
 */
(function () {
    // Returns the nth fibonacci number
    var f = function (n) {
            switch (n) {
            case 1:
                return 1;
            case 2:
                return 2;
            default:
                return f(n - 1) + f(n - 2);
            }
        },
        n = 2,
        sum = 0;
    while (f(n) < 4e6) {
        sum += f(n);
        n += 3;
    }
    console.log(sum);
})();