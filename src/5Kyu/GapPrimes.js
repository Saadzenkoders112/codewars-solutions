// Description:
// The prime numbers are not regularly spaced.For example from 2 to 3 the gap is 1. From 3 to 5 the gap is 2. From 7 to 11 it is 4. Between 2 and 50 we have the following pairs of 2 - gaps primes: 3 - 5, 5 - 7, 11 - 13, 17 - 19, 29 - 31, 41 - 43

// A prime gap of length n is a run of n - 1 consecutive composite numbers between two successive primes(see: http://mathworld.wolfram.com/PrimeGaps.html).

//     We will write a function gap with parameters:

//     g(integer >= 2) which indicates the gap we are looking for

// m(integer > 2) which gives the start of the search(m inclusive)

// n(integer >= m) which gives the end of the search(n inclusive)

// In the example above gap(2, 3, 50) will return [3, 5] or(3, 5) or { 3, 5 } which is the first pair between 3 and 50 with a 2 - gap.

// So this function should return the first pair of two prime numbers spaced with a gap of g between the limits m, n if these numbers exist otherwise `nil or null or None or Nothing (or ... depending on the language).

function isPrime(num) {
    if (num % 2 === 0) return false
    if (num <= 1) return false
    if (num ===2) return true
    for (let i=3; i < num; i+=2) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

function GapPrimes(g, m, n) {
    let primeNums = []
    let result =[]
    let count = 0
    for (let i = m; i <= n; i++) {
        if (isPrime(i)){
            primeNums.push(i)
        }
    }
    for (let i=0; i<primeNums.length; i++) {
        if ((primeNums[i + 1] - primeNums[i]) === g) {
            result.push(`${primeNums[i]}`, `${primeNums[i+1]}`)
        }else {
            count ++
            continue
        }
    }
    if (count === 0) {
        return null
    } else {
        return result
    }
}

//https://www.codewars.com/kata/561e9c843a2ef5a40c0000a4