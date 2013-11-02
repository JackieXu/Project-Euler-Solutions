/**
 * Even and uneven numbers can be represented as 2k and 2k + 1 respectively.
 *
 * 2k + 2k = 4k => 2(2k) => 2j
 * 2k + 2k + 1 => 4k + 1 => 2j + 1
 * 2k + 1 + 2k + 1 = 4k + 2 => 2(2k + 1) => 2j
 *
 * The Fibonacci series starts with 1, 2, 3, 5 ...
 * This means that every third number after 2 will be an even number
 *
 */
#include <stdio.h>

int fib(int n) {
    switch (n) {
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            return fib(n - 1) + fib(n - 2);
    }
}

int main(int argc, char *argv) {
    int n = 2;
    int sum = 0;
    while (fib(n) < 4000000) {
        sum += fib(n);
        n += 3;
    }
    printf("%d", sum);
    return 0;
}