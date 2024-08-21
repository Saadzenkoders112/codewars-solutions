// Description:
// Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors(excluding 1 and the number itself).

function ThreeDivisors (n, m) {
    let count = 0
    let result = []
    for (let i=n; i<=m; i++) {
        for (let j = n; j <= m; j++) {
            if (i%j === 0 && i!==j){
                count++
                console.log(i, j, count)
            }
        }
        if (count === 3) {
            result.push(i)
            count = 0
        } else {
            count = 0
        }
    }
    return result
}

//https://www.codewars.com/kata/65eb2c4c274bd91c27b38d32