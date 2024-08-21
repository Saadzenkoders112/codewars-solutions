// Digitwise Addition
// Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, it adds 1 to every digit of that number.If the digit is a 9, we replace it with a 10 without carrying over to the next digit.
// Program a function that takes two numbers, n and k, and outputs the number of digits in n after applying Digitwise addition k times.Since the answer can be very large, return the answer modulo 1_000_000_007.

//Solved through recursion
function BitwiseAddition(num, step) {
    let result = []
    if (step === 0) {
        let strNum = num.toString()
        return `No. of digits are ${strNum.length}`
    } else {
        let splittedNum = num.toString().split("")
        for (let i of splittedNum) {
            let item = parseInt(i)+1
            let itemStr = item.toString()
            result.push(itemStr)
        }
        let final = result.reduce((final, item) => final + item)
        return BitwiseAddition(parseInt(final), step-1)
    }
}

//https://www.codewars.com/kata/663e0eccecb2d0a12da51f84