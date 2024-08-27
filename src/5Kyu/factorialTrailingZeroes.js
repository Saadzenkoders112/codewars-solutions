// Description:
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...
function factorial(n) {
    if (n <=1) {
        return n
    }  else {
        return n*factorial(n-1)
    }
}

function factorialTrailingZeroes (n) {
    let count = 0
    let val = factorial(n)
    let numString = val.toString()
    for(let i=numString.length-1; i>0; i--){
        if (numString[i] == 0) {
            count++
        } else {
            return count
        }
    }
}

//https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
