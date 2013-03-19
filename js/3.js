/**
 * As this was still in the hundred thousands, I did this without memoization.
 * I could have built a prime sieve, but this seemed easier. :)
 */
(function () {
    var n = 600851475143,
        // This was an even number, so I dropped it by 1
        s = Math.floor(Math.sqrt(n)) - 1,
        isPrime = function (n) {
            if (n < 2) return false;
            if (n < 4) return true;
            if (n % 2 === 0) return false;
            if (n < 9) return true;
            if (n % 3 === 0) return false;
            var r = Math.floor(Math.sqrt(n)),
                f = 5;
            while (f <= r) {
                if (n % f === 0) return false;
                if (n % (f + 2) === 0) return false;
                f += 6;
            }
            return true;
        };
    while (n % s !== 0 || !isPrime(s)) {
        s -= 2;
    }
    console.log(s);
})();