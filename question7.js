function generateFibonacci(n) {
    if (n <= 0) {
        return [];
    }

    const fibonacciSequence = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextNumber);
    }

    return fibonacciSequence.slice(0, n);
}

const n = 10;
const fibonacciSequence = generateFibonacci(n);
console.log(fibonacciSequence); 
