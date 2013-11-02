(function () {
    // Returns the sum of multiples (k) of n, where n * k < 1000
    var s = function (n) {
            var i, sum;
            for (i = n, sum = 0; i < 1000; sum += i, i += n);
            return sum;
        },
        m3 = s(3),
        m5 = s(5),
        m15 = s(15);
    console.log(m3 + m5 - m15);
})();