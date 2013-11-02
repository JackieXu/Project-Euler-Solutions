#include <stdio.h>

// Returns the sum of multiple k of n, where n * k < 1000
int sum(int n) {
    int count = 1000 / n;
    return count * (n + count * n) / 2;
}

int main(int argc, char *argv) {

    printf("%d", sum(3) + sum(5) - sum(15) - 1000);
    
    return 0;
}