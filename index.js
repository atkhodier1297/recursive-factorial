// Problem: Find the factorial of a number using recursion.

// Each factorial is the previous solution multiplied by the new integer.
// This is what's in common between each factorial solution.

function recursiveFactorial(n){
    if (n === 0) {
        return 1
    }
    return n * recursiveFactorial(n-1)
}

console.log(recursiveFactorial(5))
console.log(recursiveFactorial(10))
console.log(recursiveFactorial(15))

// Big O === O(n) linear time complexity
// inputs grow in proportion to the 'n' value